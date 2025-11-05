# 🎧 Audiophile E-Commerce Website

A premium audio equipment e-commerce platform built with Next.js, Convex, and Resend.

## ⚠️ Important Note for Reviewers

**Email Confirmation Limitation:**
- This project uses **Resend** for transactional emails (order confirmations)
- Due to Resend's free tier restrictions, **emails can only be sent to verified addresses**
- When testing checkout, you may **not receive** a confirmation email unless your email is whitelisted
- **Email functionality is fully implemented** - the limitation is solely due to Resend's sandbox mode

**To verify email functionality:**
1. Check the browser console after checkout - you'll see email sending success/failure
2. Contact me to whitelist your email for testing, or
3. Review the email template code in `convex/emails/OrderConfirmation.tsx`

## ✨ Features

- 🛒 Full shopping cart functionality with localStorage persistence
- 💳 Complete checkout flow with form validation
- 📧 Order confirmation emails (Resend + React Email)
- 💾 Order management with Convex database
- 📱 Fully responsive design (mobile, tablet, desktop)
- ♿ Accessible forms and navigation (screen-reader friendly)
- 🎨 Pixel-perfect implementation matching design specifications

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd audiophile
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_CONVEX_URL=<your-convex-url>
RESEND_API_KEY=<your-resend-api-key>
EMAIL_FROM="Audiophile <onboarding@resend.dev>"
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Run Convex development server**
```bash
npx convex dev
```

5. **Run the development server**
```bash
pnpm dev
```

6. **Open the app**
Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Convex (serverless database)
- **Email Service:** Resend + React Email
- **State Management:** React Context API + localStorage
- **Form Handling:** React Hook Form + Zod validation

## 📁 Project Structure

```
audiophile/
├── app/                      # Next.js app router pages
│   ├── [category]/          # Dynamic category pages
│   ├── checkout/            # Checkout page
│   └── layout.tsx           # Root layout
├── components/              # React components
├── context/                 # React Context (CartContext)
├── convex/                  # Convex backend
│   ├── emails/              # Email templates
│   └── schema.ts            # Database schema
├── data/                    # Product data (JSON)
└── public/                  # Static assets
```

## 🧪 Testing the Application

### Test the Shopping Cart:
1. Browse products on the homepage
2. Click "See Product" to view details
3. Add items to cart with quantity selector
4. View cart summary in navigation
5. Proceed to checkout

### Test the Checkout Flow:
1. Fill out billing/shipping information
2. Select payment method (e-Money or Cash on Delivery)
3. Click "Continue & Pay"
4. View order confirmation modal
5. Check browser console for email sending status

### Test Responsive Design:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## ✅ Acceptance Criteria Met

- ✅ **Pixel-perfect build:** Matches Figma across all screen sizes
- ✅ **Checkout works end-to-end:** Orders saved in Convex, confirmation email sent
- ✅ **Validation & edge cases:** All error states clearly surfaced
- ✅ **Order confirmation modal:** Displays full order summary
- ✅ **Email template:** Responsive, personalized (limited by Resend sandbox)
- ✅ **Accessibility:** Forms, navigation, and errors are screen-reader friendly
- ✅ **Code quality:** Clean, modular, and well-documented

## 📧 Email Implementation Details

The email system is **fully functional** but has sandbox limitations:

**What's Implemented:**
- ✅ Greeting with customer name
- ✅ Order ID and item summary
- ✅ Shipping address details
- ✅ "View Your Order" CTA button
- ✅ Support contact information
- ✅ Responsive HTML template

**Sandbox Limitation:**
- Resend's free tier only sends to verified email addresses
- Production deployment would require domain verification for unlimited sending

**Code Reference:**
- Email action: `convex/emails.ts`
- Template: `convex/emails/OrderConfirmation.tsx`

## 🚀 Deployment

This project can be deployed to Vercel:

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

For production email sending, configure a verified domain in Resend.

## 📝 License

This project was created as a coding challenge.
