# JSON Data Architecture - Audiophile Project

## 📁 File Structure

```
data/
  └── products.json          # All product data (single source of truth)

lib/
  └── products.ts            # Utility functions to access data

app/
  ├── headphones/
  │   └── [id]/
  │       └── page.tsx       # Dynamic detail page (uses [category]/[id])
  ├── speakers/
  │   └── [id]/
  │       └── page.tsx       # Dynamic detail page (uses [category]/[id])
  ├── earphones/
  │   └── [id]/
  │       └── page.tsx       # Dynamic detail page (uses [category]/[id])
  └── [category]/
      └── [id]/
          └── page.tsx       # NEW: Universal detail page for all products
```

## 📊 JSON Structure Overview

### Product Object
```json
{
  "id": "xx99-mark-ii",
  "category": "headphones",
  "name": "XX99 MARK II",
  "fullName": "XX99 MARK II HEADPHONES",
  "isNew": true,
  "price": 2999,
  "description": "...",
  "imageSrc": "/Preview1 (3).png",
  "layoutVariant": "left",
  "features": [
    { "text": "..." },
    { "text": "..." }
  ],
  "inTheBox": [
    { "quantity": 1, "item": "Headphone Unit" },
    { "quantity": 2, "item": "Replacement Earpiece" }
  ],
  "gallery": [
    { "imageSrc": "/gallery-1.png", "imageAlt": "..." },
    { "imageSrc": "/gallery-2.png", "imageAlt": "..." }
  ],
  "relatedProducts": ["xx99-mark-i", "xx59", "zx9"]
}
```

## 🔧 Utility Functions (lib/products.ts)

```typescript
// Get all products
getAllProducts(): Product[]

// Get specific product
getProductById(id: string): Product | undefined

// Get products by category
getProductsByCategory(category: string): Product[]

// Get related products automatically
getRelatedProducts(productId: string): Product[]

// Get categories
getAllCategories(): Category[]
```

## 🚀 Usage Example

### In Detail Page
```typescript
const product = getProductById(params.id);
const relatedProducts = getRelatedProducts(params.id);

<ProductDetail
  isNew={product.isNew}
  productName={product.fullName}
  price={product.price}
  // ... all data from JSON
/>
```

### In Category Page
```typescript
const products = getProductsByCategory(category);

products.map(product => (
  <ProductShowcase
    productName={product.fullName}
    price={product.price}
    // ... all data from JSON
  />
))
```

## ✨ Benefits

1. **Single Source of Truth** - Change data in one place, updates everywhere
2. **No Hardcoding** - All product data in JSON
3. **Easy Scaling** - Add new products just by adding to JSON
4. **Type Safe** - TypeScript interfaces ensure consistency
5. **Reusable Functions** - Same functions work for all categories
6. **Related Products** - Automatically pulls correct related items
7. **Dynamic Routing** - Works with `[category]/[id]` pattern

## 📝 Current Products in JSON

- ✅ XX99 MARK II (Headphones) - $2,999
- ✅ XX99 MARK I (Headphones) - $1,899
- ✅ XX59 (Headphones) - $899
- ✅ ZX9 (Speakers) - $4,500
- ✅ ZX7 (Speakers) - $3,500
- ✅ YX1 (Earphones) - $599

## 🔄 Navigation Flow

```
CategoriesShowcase SHOP Button
    ↓
Navigate to /headphones (or /speakers, /earphones)
    ↓
Category Page (uses getProductsByCategory)
    ↓
Click Product
    ↓
Navigate to /headphones/xx99-mark-ii
    ↓
Detail Page (uses getProductById)
    ↓
Shows: ProductDetail + Features + Gallery + Related Products
```

All data comes from `products.json` - no hardcoding needed!
