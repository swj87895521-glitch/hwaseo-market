# 화서시장 API 타입 및 계약 정의

> 백엔드 API 계약과 프론트엔드 TypeScript 타입 기준을 함께 정리한 문서
> 최종 수정일: 2026-04-15
> 문서 목적: 프론트엔드-백엔드 간 통신 규약 표준화

---

## 문서 사용 원칙

- 이 문서는 프론트엔드와 백엔드가 공유하는 외부 계약 기준이다.
- 내부 구현 세부사항보다 API 요청/응답 형태를 우선한다.
- Prisma 모델은 참고용이며, API 응답 스키마와 1:1로 동일하다고 가정하지 않는다.
- 배열이나 객체를 DB에 JSON 문자열로 저장하더라도, API 응답은 파싱된 JSON 형태를 반환한다.
- 날짜/시간 필드는 모두 ISO 8601 UTC 문자열로 반환한다.
- 금액 단위는 모두 KRW 정수로 처리한다.
- 공개 조회 API와 인증 필요 API, 관리자 API를 구분한다.

---

## 목차

1. [공통 응답 타입](#공통-응답-타입)
2. [공통 규칙](#공통-규칙)
3. [인증 규약](#인증-규약)
4. [에러 코드 규약](#에러-코드-규약)
5. [도메인 타입](#도메인-타입)
6. [엔드포인트 계약](#엔드포인트-계약)
7. [DB-API 변환 메모](#db-api-변환-메모)
8. [Express 타입 확장](#express-타입-확장)

---

## 공통 응답 타입

**권장 파일:** `src/types/api.ts`

### 공통 메타 정보

```typescript
export type ApiMeta = {
  requestId: string;
  timestamp: string; // ISO 8601 UTC
};
```

### 성공 응답

```typescript
export type ApiSuccess<T> = {
  success: true;
  data: T;
  meta: ApiMeta;
};
```

### 에러 코드

```typescript
export type ApiErrorCode =
  | 'INVALID_INPUT'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'CONFLICT'
  | 'EXPIRED'
  | 'VALIDATION_FAILED'
  | 'INTERNAL_ERROR';
```

### 에러 응답

```typescript
export type ApiError = {
  success: false;
  error: {
    code: ApiErrorCode;
    message: string;
    details?: Record<string, unknown>;
  };
  meta: ApiMeta;
};
```

### 공통 응답 유니온

```typescript
export type ApiResponse<T> = ApiSuccess<T> | ApiError;
```

### 페이지네이션 타입

```typescript
export type Pagination = {
  total: number;
  page: number;       // 1-base
  limit: number;
  totalPages: number;
};

export type PaginatedData<T> = {
  items: T[];
  pagination: Pagination;
};

export type PaginatedApiResponse<T> = ApiResponse<PaginatedData<T>>;
```

### JSON 응답 예시

#### 성공 응답

```json
{
  "success": true,
  "data": {
    "id": "store-001",
    "name": "화서수산"
  },
  "meta": {
    "requestId": "req_20260415_001",
    "timestamp": "2026-04-15T04:00:00.000Z"
  }
}
```

#### 페이지네이션 성공 응답

```json
{
  "success": true,
  "data": {
    "items": [],
    "pagination": {
      "total": 100,
      "page": 1,
      "limit": 10,
      "totalPages": 10
    }
  },
  "meta": {
    "requestId": "req_20260415_002",
    "timestamp": "2026-04-15T04:00:00.000Z"
  }
}
```

#### 에러 응답

```json
{
  "success": false,
  "error": {
    "code": "INVALID_INPUT",
    "message": "잘못된 요청입니다.",
    "details": {
      "field": "page"
    }
  },
  "meta": {
    "requestId": "req_20260415_003",
    "timestamp": "2026-04-15T04:00:00.000Z"
  }
}
```

---

## 공통 규칙

### 식별자 규칙

- 공개 조회 API에서 사용자 친화 URL이 필요한 경우 `slug`를 사용한다.
- 관리자 수정/삭제 API와 내부 식별이 필요한 경우 `id`를 사용한다.
- 문서에 별도 표기가 없으면 path param의 `:id`는 내부 고유 ID, `:slug`는 사용자 노출용 slug이다.

### Query 파라미터 규칙

- query string은 문자열로 전달되며, 서버에서 타입 변환한다.
- boolean query는 `'true'` 또는 `'false'`만 허용한다.
- `page` 기본값은 `1`, `limit` 기본값은 `10`이다.
- `limit` 최대값은 `100`으로 제한한다.
- 빈 문자열은 전달하지 않는 것을 원칙으로 한다.

### 요청 본문 규칙

- `POST`, `PUT`, `PATCH` 요청은 `Content-Type: application/json`을 사용한다.
- 선택 필드는 생략 가능하며, `null` 허용 여부는 각 필드 정의를 따른다.

### 날짜/시간 규칙

- API 응답의 날짜/시간은 모두 ISO 8601 UTC 문자열이다.
- 프론트엔드에서 사용자 지역 시간대로 변환하여 표시한다.

### 금액 규칙

- 금액은 모두 KRW 정수로 처리한다.
- 소수점은 사용하지 않는다.

---

## 인증 규약

### 인증 헤더

인증이 필요한 API는 아래 형식의 헤더를 사용한다.

```http
Authorization: Bearer {token}
```

### 토큰 규칙

- `/api/auth/login`은 일반 사용자 JWT를 발급한다.
- `/api/admin/login`은 관리자 JWT를 발급한다.
- 사용자 전용 API와 관리자 전용 API는 토큰을 혼용하지 않는다.
- 만료되었거나 유효하지 않은 토큰은 `401 UNAUTHORIZED`를 반환한다.
- 인증은 되었지만 권한이 부족한 경우 `403 FORBIDDEN`을 반환한다.

### 인증 예시

```typescript
fetch('/api/my/coupons', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

---

## 에러 코드 규약

| HTTP Status | error.code | 설명 |
|-------------|------------|------|
| 400 | `INVALID_INPUT` | 잘못된 요청 형식 또는 파라미터 |
| 401 | `UNAUTHORIZED` | 토큰 없음, 만료, 위조, 인증 실패 |
| 403 | `FORBIDDEN` | 권한 부족 |
| 404 | `NOT_FOUND` | 리소스를 찾을 수 없음 |
| 409 | `CONFLICT` | 중복 등록 또는 상태 충돌 |
| 410 | `EXPIRED` | 만료된 리소스 사용 시도 |
| 422 | `VALIDATION_FAILED` | 비즈니스 규칙 검증 실패 |
| 500 | `INTERNAL_ERROR` | 서버 내부 오류 |

### 에러 메시지 작성 규칙

- `error.message`는 사용자와 개발자가 모두 이해 가능한 문장으로 작성한다.
- 프론트 분기는 `message`가 아니라 `error.code` 기준으로 처리한다.
- 상세 정보가 필요하면 `error.details`에 필드별 오류를 포함한다.

---

## 도메인 타입

### 요청 파라미터 타입

```typescript
export type GetStoresParams = {
  category?: StoreCategorySlug;
};

export type GetProductsParams = {
  storeId?: string;
  featured?: boolean;
};

export type GetNoticesParams = {
  page?: number;
  limit?: number;
};

export type GetMapMarkersParams = {
  category?: MarketMapCategory;
};

export type LoginParams = {
  email: string;
  password: string;
};

export type RegisterCouponParams = {
  code: string;
};

export type GetLoyaltyParams = {
  storeId: string;
};
```

### 응답 타입 별칭

```typescript
export type GetStoresResponse = ApiResponse<Store[]>;
export type GetStoreResponse = ApiResponse<Store>;

export type GetProductsResponse = ApiResponse<Product[]>;
export type GetProductResponse = ApiResponse<Product>;

export type GetNoticesResponse = PaginatedApiResponse<Notice>;
export type GetNoticeResponse = ApiResponse<Notice>;

export type GetBannersResponse = ApiResponse<EventBanner[]>;
export type GetMapMarkersResponse = ApiResponse<MarketMapMarker[]>;
export type GetStoreProductGroupsResponse = ApiResponse<StoreProductGroup[]>;

export type LoginResponse = ApiResponse<{ token: string }>;
export type GetMeResponse = ApiResponse<User>;

export type GetMyBadgesResponse = ApiResponse<StoreLoyalty[]>;
export type GetStoreLoyaltyResponse = ApiResponse<StoreLoyalty>;

export type GetMyCouponsResponse = ApiResponse<Coupon[]>;
export type RegisterCouponResponse = ApiResponse<Coupon>;
```

### User

**권장 파일:** `src/types/user.ts`

```typescript
export type User = {
  id: string;
  email: string;
  name?: string;
  createdAt: string; // ISO 8601 UTC
};
```

### Store

**권장 파일:** `src/types/store.ts`

```typescript
export type StoreCategorySlug =
  | 'all'
  | 'fish'
  | 'vegetable'
  | 'oil'
  | 'meat'
  | 'general';

export type StoreCategory = Exclude<StoreCategorySlug, 'all'>;

export type StoreCategoryLabel =
  | '전체상품'
  | '수산'
  | '채소'
  | '기름'
  | '정육'
  | '가게';

export type StoreCategoryName = Exclude<StoreCategoryLabel, '전체상품'>;

export type StoreCategoryItem = {
  slug: StoreCategorySlug;
  label: StoreCategoryLabel;
  description: string;
  helperText: string;
};

export type StoreFeaturedProduct = {
  id: string;
  name: string;
  summary: string;
  badge: string;
  image: string;
};

export type Store = {
  id: string;
  slug: string;
  name: string;
  category: StoreCategoryName;
  categorySlug: StoreCategory;
  intro: string;
  location: string;
  locationLabel: string;
  tags: string[];
  badges: string[];
  ownerStory: string;
  storeStory: string[];
  featuredProducts: StoreFeaturedProduct[];
  image: string;
  isActive: boolean;
  shortDescription?: string;
  addressText?: string;
  locationText?: string;
  thumbnail?: string;
  markerId?: string;
  featuredProductIds?: string[];
};
```

### Product

**권장 파일:** `src/types/product.ts`

```typescript
export type Product = {
  id: string;
  slug: string;
  storeId: string;
  category: string;
  name: string;
  price: number;
  originalPrice?: number;
  unitText?: string;
  thumbnail: string;
  badgeLabels: string[];
  tagLabels: string[];
  isFeatured: boolean;
  isNew: boolean;
  isActive: boolean;
};
```

### Notice

**권장 파일:** `src/types/notice.ts`

```typescript
export type Notice = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string[];
  createdAt: string; // ISO 8601 UTC
  views: number;
  isPinned: boolean;
  isActive: boolean;
};
```

### Banner

**권장 파일:** `src/types/eventBanner.ts`

```typescript
export type EventBanner = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  ctaLabel: string;
  ctaLink: string;
  eventType: 'coupon' | 'event' | 'special' | 'benefit' | 'season';
  isActive: boolean;
  displayOrder: number;
};
```

### MapMarker

**권장 파일:** `src/types/mapMarker.ts`

```typescript
export type MarketMapCategory =
  | '화서수산'
  | '화서채소'
  | '화서기름'
  | '화서정육'
  | '화서가게';

export type MarketMapFilter = 'All' | MarketMapCategory;

export type MarketMapFilterOption = {
  value: MarketMapFilter;
  label: string;
};

export type MarketMapCategorySummary = {
  id: MarketMapCategory;
  label: MarketMapCategory;
  shortLabel: string;
  markerColor: string;
  markerGlow: string;
  markerCountLabel: string;
  overviewDescription: string;
  categorySummary: string;
  helperDescription?: string;
};

export type MarketMapMarker = {
  id: string;
  category: MarketMapCategory;
  name: string;
  x: number;
  y: number;
  shortDescription: string;
  locationDescription: string;
  featuredItems: string[];
};

export type MarketMapOverviewItem = {
  title: string;
  description: string;
  markerColor: string;
};

export type MarketMapPanelContent =
  | {
      mode: 'overview';
      eyebrow: string;
      title: string;
      description: string;
      items: MarketMapOverviewItem[];
    }
  | {
      mode: 'category';
      eyebrow: string;
      title: string;
      description: string;
      helperDescription?: string;
      markerColor: string;
      markerCountLabel: string;
    }
  | {
      mode: 'store';
      eyebrow: string;
      title: string;
      description: string;
      category: string;
      markerColor: string;
      locationDescription: string;
      featuredItems: string[];
    };
```

### StoreProductGroup

**권장 파일:** `src/types/storeProductGroup.ts`

```typescript
export type StoreProductGroup = {
  id: string;
  storeSlug: string;
  categoryLabel: string;
  heroCopy: string;
  description: string;
  locationText: string;
  buttonText: string;
  featuredProductIds: string[];
  displayOrder: number;
  isActive: boolean;
};
```

### TrustItem

**권장 파일:** `src/types/trustItem.ts`

```typescript
export type TrustItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
  tone: 'primary' | 'secondary';
  link?: string;
  isActive: boolean;
};
```

> `TrustItem`은 현재 프론트엔드 전용 정적 타입이며, 별도 DB 모델은 없다.

### StoreLoyalty

**권장 파일:** `src/types/storeLoyalty.ts`

```typescript
export type BadgeLevel =
  | '첫 방문 손님'
  | '단골 예비'
  | '단골손님'
  | '진짜 단골'
  | '화서 VIP';

export type StoreLoyalty = {
  id: string;
  userId: string;
  storeId: string;
  storeName: string;
  storeSlug: string;
  purchaseCount: number;
  currentBadge: BadgeLevel | null;
  nextBadge: BadgeLevel | null;
  nextBadgeThreshold: number | null;
  achievedAt: string | null;
};
```

### Coupon

**권장 파일:** `src/types/coupon.ts`

```typescript
export type CouponType = 'online' | 'offline';
export type CouponStatus = 'active' | 'used' | 'expired';

export type Coupon = {
  id: string;
  userId: string;
  code: string;
  type: CouponType;
  status: CouponStatus;
  discountAmount: number;
  minOrderAmount: number;
  expiredAt: string;
  usedAt: string | null;
  issuedReason: 'offline_purchase' | 'online_purchase';
};
```

---

## 엔드포인트 계약

### Public API

#### `GET /api/stores`

- 설명: 스토어 목록 조회
- 인증: 불필요
- query:
  - `category?: StoreCategorySlug`
- response: `GetStoresResponse`

#### `GET /api/stores/:slug`

- 설명: 스토어 상세 조회
- 인증: 불필요
- path:
  - `slug: string`
- response: `GetStoreResponse`

#### `GET /api/products`

- 설명: 상품 목록 조회
- 인증: 불필요
- query:
  - `storeId?: string`
  - `featured?: boolean`
- response: `GetProductsResponse`

#### `GET /api/notices`

- 설명: 공지 목록 조회
- 인증: 불필요
- query:
  - `page?: number` 기본값 `1`
  - `limit?: number` 기본값 `10`, 최대 `100`
- response: `GetNoticesResponse`

#### `GET /api/notices/:slug`

- 설명: 공지 상세 조회
- 인증: 불필요
- path:
  - `slug: string`
- response: `GetNoticeResponse`

#### `GET /api/banners`

- 설명: 이벤트 배너 조회
- 인증: 불필요
- response: `GetBannersResponse`

#### `GET /api/map/markers`

- 설명: 장터 지도 마커 조회
- 인증: 불필요
- query:
  - `category?: MarketMapCategory`
- response: `GetMapMarkersResponse`

### Auth API

#### `POST /api/auth/login`

- 설명: 일반 사용자 로그인 및 JWT 발급
- 인증: 불필요
- request body:

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

- response: `LoginResponse`

#### `GET /api/auth/me`

- 설명: 현재 로그인한 사용자 정보 조회
- 인증: 필요
- response: `GetMeResponse`

### Loyalty API

#### `GET /api/my/badges`

- 설명: 내 단골 배지 전체 목록 조회
- 인증: 필요
- response: `GetMyBadgesResponse`

#### `GET /api/stores/:storeId/loyalty`

- 설명: 특정 점포의 내 단골 현황 조회
- 인증: 필요
- path:
  - `storeId: string`
- response: `GetStoreLoyaltyResponse`

### Coupon API

#### `GET /api/my/coupons`

- 설명: 내 쿠폰 전체 목록 조회
- 인증: 필요
- response: `GetMyCouponsResponse`

#### `POST /api/coupons/register`

- 설명: 쿠폰 코드 등록
- 인증: 필요
- request body:

```json
{
  "code": "MARKET-2026-03"
}
```

- response: `RegisterCouponResponse`
- 예상 오류:
  - `404 NOT_FOUND`: 존재하지 않는 코드
  - `409 CONFLICT`: 이미 사용한 코드
  - `410 EXPIRED`: 만료된 코드
  - `422 VALIDATION_FAILED`: 동일 계정 중복 등록

### Admin API

> 아래 API는 관리자 JWT 인증이 필요하다.

#### `POST /api/admin/login`

- 설명: 관리자 로그인 및 JWT 발급
- request body:

```json
{
  "email": "admin@example.com",
  "password": "password"
}
```

- response: `ApiResponse<{ token: string }>`

#### 콘텐츠 관리 API

| Path | Method | 설명 |
|------|--------|------|
| `/api/stores` | POST | 스토어 생성 |
| `/api/stores/:id` | PUT | 스토어 수정 |
| `/api/products` | POST | 상품 생성 |
| `/api/products/:id` | PUT | 상품 수정 |
| `/api/notices` | POST | 공지 생성 |
| `/api/notices/:id` | PUT | 공지 수정 |
| `/api/banners` | POST | 배너 생성 |
| `/api/banners/:id` | PUT | 배너 수정 |
| `/api/banners/order` | PUT | 배너 순서 변경 |

#### 운영 기능 API

| Path | Method | 설명 |
|------|--------|------|
| `/api/admin/coupon-batches` | GET | 쿠폰 배치 목록 조회 |
| `/api/admin/coupon-batches` | POST | 오프라인 쿠폰 코드 배치 등록 |
| `/api/admin/coupon-batches/:id` | PUT | 쿠폰 배치 수정/비활성화 |
| `/api/admin/badges/config` | GET | 배지 달성 기준 조회 |
| `/api/admin/badges/config` | PUT | 배지 달성 기준 수정 |

---

## DB-API 변환 메모

다음 필드는 DB에서 문자열(JSON) 형태로 저장될 수 있으나, API 응답에서는 파싱된 배열/객체 형태로 반환한다.

| 모델 | DB 필드 | API 반환 타입 |
|------|---------|----------------|
| Store | `tags` | `string[]` |
| Store | `badges` | `string[]` |
| Store | `storeStory` | `string[]` |
| Store | `featuredProducts` | `StoreFeaturedProduct[]` |
| Store | `featuredProductIds` | `string[]` |
| Product | `badgeLabels` | `string[]` |
| Product | `tagLabels` | `string[]` |
| Notice | `content` | `string[]` |
| MapMarker | `featuredItems` | `string[]` |
| StoreProductGroup | `featuredProductIds` | `string[]` |

### 참고용 Prisma 모델

> 아래 내용은 참고용이다. 실제 외부 계약 기준은 위 API 타입 정의를 따른다.

```prisma
model User {
  id           String         @id @default(cuid())
  email        String         @unique
  password     String
  name         String?
  coupons      Coupon[]
  loyalties    StoreLoyalty[]
  createdAt    DateTime       @default(now())
  updatedAt    DateTime       @updatedAt
}

model Store {
  id                 String         @id @default(cuid())
  slug               String         @unique
  name               String
  category           String
  categorySlug       String
  intro              String
  location           String
  locationLabel      String
  ownerStory         String
  tags               String
  badges             String
  storeStory         String
  featuredProducts   String         @default("[]")
  featuredProductIds String         @default("[]")
  image              String
  thumbnail          String?
  addressText        String?
  locationText       String?
  markerId           String?
  shortDescription   String?
  isActive           Boolean        @default(true)
  products           Product[]
  mapMarker          MapMarker?
  loyalties          StoreLoyalty[]
  createdAt          DateTime       @default(now())
  updatedAt          DateTime       @updatedAt
}

model Product {
  id            String   @id @default(cuid())
  slug          String   @unique
  storeId       String
  category      String
  name          String
  price         Int
  originalPrice Int?
  unitText      String?
  thumbnail     String
  badgeLabels   String
  tagLabels     String
  isFeatured    Boolean  @default(false)
  isNew         Boolean  @default(false)
  isActive      Boolean  @default(true)
  store         Store    @relation(fields: [storeId], references: [id])
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model Notice {
  id        String   @id @default(cuid())
  slug      String   @unique
  title     String
  summary   String
  content   String
  views     Int      @default(0)
  isPinned  Boolean  @default(false)
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Banner {
  id           String   @id @default(cuid())
  tag          String
  title        String
  subtitle     String
  image        String
  ctaLabel     String
  ctaLink      String
  eventType    String
  isActive     Boolean  @default(true)
  displayOrder Int      @default(0)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

model MapMarker {
  id                  String   @id @default(cuid())
  category            String
  name                String
  x                   Float
  y                   Float
  shortDescription    String
  locationDescription String
  featuredItems       String
  storeId             String?  @unique
  store               Store?   @relation(fields: [storeId], references: [id])
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt
}

model StoreProductGroup {
  id                 String   @id @default(cuid())
  storeSlug          String
  categoryLabel      String
  heroCopy           String
  description        String
  locationText       String
  buttonText         String
  featuredProductIds String
  displayOrder       Int      @default(0)
  isActive           Boolean  @default(true)
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt
}

model StoreLoyalty {
  id            String   @id @default(cuid())
  userId        String
  storeId       String
  purchaseCount Int      @default(0)
  currentBadge  String?
  achievedAt    DateTime?
  user          User     @relation(fields: [userId], references: [id])
  store         Store    @relation(fields: [storeId], references: [id])
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@unique([userId, storeId])
}

model Coupon {
  id             String   @id @default(cuid())
  userId         String
  code           String
  type           String
  status         String   @default("active")
  discountAmount Int
  minOrderAmount Int      @default(0)
  expiredAt      DateTime
  usedAt         DateTime?
  issuedReason   String
  user           User     @relation(fields: [userId], references: [id])
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}

model CouponBatch {
  id               String   @id @default(cuid())
  code             String   @unique
  discountAmount   Int
  minOrderAmount   Int      @default(0)
  usageLimitPerUser Int     @default(1)
  expiredAt        DateTime
  isActive         Boolean  @default(true)
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
}

model Admin {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## Express 타입 확장

**참고 파일:** `hwaseo-market-backend/src/types/express/index.d.ts`

```typescript
declare global {
  namespace Express {
    interface Request {
      requestId?: string;
      admin?: string | JwtPayload;
      user?: string | JwtPayload;
    }
  }
}
```

---

## 후속 권장 작업

- 필요하면 `src/types/api.ts`, `src/types/storeLoyalty.ts`, `src/types/coupon.ts`를 실제 생성하고 문서 계약과 맞춘다.
- 가능하면 Markdown 문서 외에 OpenAPI 또는 공용 TypeScript 스키마를 단일 소스로 관리한다.
- CI에서 API 계약과 실제 응답 스키마 불일치 여부를 검사한다.

