# 03_CONTENT_MODEL

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

## Store

- id
- slug
- name
- category
- shortDescription
- addressText
- locationText
- thumbnail
- markerId
- featuredProductIds
- isActive

## MapMarker

- id
- storeId
- x
- y
- label
- directionHint
- isActive

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
- storeId
- title
- summary
- productIds
- ctaLabel
- ctaLink
- displayOrder
- isActive

## Notice

- id
- title
- dateText
- isImportant
- link
- isActive

## TrustItem

- id
- icon
- title
- description
- tone
- link
- isActive
