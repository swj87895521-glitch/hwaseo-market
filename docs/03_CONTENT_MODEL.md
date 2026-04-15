# 03_CONTENT_MODEL

이 문서는 현재 프론트엔드 내부 콘텐츠 소스의 필드 구조를 정의한다.
외부 API 요청/응답 계약은 `docs/07_API_TYPES.md`에서 별도로 관리한다.
내부 콘텐츠 shape와 외부 API shape는 목적이 다를 수 있으므로 1:1 동일하다고 가정하지 않는다.

## EventBanner

- id
- tag
- title
- subtitle
- image
- ctaLabel
- ctaLink
- eventType
- isActive
- displayOrder

## StoreCategoryItem

- slug
- label
- description
- helperText

## Store

- id
- slug
- name
- category
- categorySlug
- intro
- location
- locationLabel
- tags
- badges
- ownerStory
- storeStory
- featuredProducts
- image
- isActive
- shortDescription
- addressText
- locationText
- thumbnail
- markerId
- featuredProductIds

## StoreFeaturedProduct

- id
- name
- summary
- badge
- image

## MapMarker

- id
- category
- name
- x
- y
- shortDescription
- locationDescription
- featuredItems

## Product

- id
- slug
- storeId
- category
- name
- price
- originalPrice
- unitText
- thumbnail
- badgeLabels
- tagLabels
- isFeatured
- isNew
- isActive

## StoreProductGroup

- id
- storeSlug
- categoryLabel
- heroCopy
- description
- locationText
- buttonText
- featuredProductIds
- displayOrder
- isActive

## Notice

- id
- slug
- title
- summary
- content
- createdAt
- views
- isPinned
- isActive

## TrustItem

- id
- icon
- title
- description
- tone
- link
- isActive
