import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface OrderConfirmationEmailProps {
  customerName: string;
  orderNumber: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageSrc: string;
  }>;
  shippingAddress: string;
  shippingCity: string;
  shippingZipCode: string;
  shippingCountry: string;
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}

export const OrderConfirmationEmail = ({
  customerName = "Valued Customer",
  orderNumber = "ORD-123456",
  items = [],
  shippingAddress = "",
  shippingCity = "",
  shippingZipCode = "",
  shippingCountry = "",
  subtotal = 0,
  shipping = 0,
  vat = 0,
  grandTotal = 0,
}: OrderConfirmationEmailProps) => {
  const formatPrice = (price: number) => `$${price.toLocaleString()}`;

  return (
    <Html>
      <Head />
      <Preview>Your Audiophile order {orderNumber} has been confirmed!</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={heading}>AUDIOPHILE</Heading>
          </Section>

          {/* Greeting */}
          <Section style={section}>
            <Heading style={h1}>Thank you for your order!</Heading>
            <Text style={text}>
              Hi {customerName},
            </Text>
            <Text style={text}>
              We're excited to let you know that your order has been confirmed and is being processed.
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Order Details */}
          <Section style={section}>
            <Text style={orderNumberStyle}>
              Order Number: <strong>{orderNumber}</strong>
            </Text>
          </Section>

          {/* Order Items */}
          <Section style={section}>
            <Heading style={h2}>Order Summary</Heading>
            {items.map((item, index) => (
              <div key={index} style={itemRow}>
                <div style={itemDetails}>
                  <Text style={itemName}>{item.name}</Text>
                  <Text style={itemPrice}>
                    {formatPrice(item.price)} x {item.quantity}
                  </Text>
                </div>
                <Text style={itemTotal}>
                  {formatPrice(item.price * item.quantity)}
                </Text>
              </div>
            ))}
          </Section>

          <Hr style={hr} />

          {/* Totals */}
          <Section style={section}>
            <div style={totalRow}>
              <Text style={totalLabel}>Subtotal:</Text>
              <Text style={totalValue}>{formatPrice(subtotal)}</Text>
            </div>
            <div style={totalRow}>
              <Text style={totalLabel}>Shipping:</Text>
              <Text style={totalValue}>{formatPrice(shipping)}</Text>
            </div>
            <div style={totalRow}>
              <Text style={totalLabel}>VAT (Included):</Text>
              <Text style={totalValue}>{formatPrice(vat)}</Text>
            </div>
            <div style={totalRow}>
              <Text style={grandTotalLabel}>Grand Total:</Text>
              <Text style={grandTotalValue}>{formatPrice(grandTotal)}</Text>
            </div>
          </Section>

          <Hr style={hr} />

          {/* Shipping Address */}
          <Section style={section}>
            <Heading style={h2}>Shipping Address</Heading>
            <Text style={text}>
              {shippingAddress}<br />
              {shippingCity}, {shippingZipCode}<br />
              {shippingCountry}
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={section}>
            <Text style={text}>
              If you have any questions about your order, please contact our support team.
            </Text>
            <Text style={footer}>
              © 2025 Audiophile. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const header = {
  backgroundColor: "#191919",
  padding: "24px 40px",
  textAlign: "center" as const,
};

const heading = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  letterSpacing: "2px",
  margin: "0",
};

const section = {
  padding: "0 40px",
};

const h1 = {
  color: "#000000",
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "16px",
};

const h2 = {
  color: "#000000",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "16px",
};

const text = {
  color: "#525252",
  fontSize: "14px",
  lineHeight: "24px",
  marginBottom: "12px",
};

const orderNumberStyle = {
  color: "#000000",
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "24px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "24px 40px",
};

const itemRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
  paddingBottom: "16px",
  borderBottom: "1px solid #f0f0f0",
};

const itemDetails = {
  flex: 1,
};

const itemName = {
  color: "#000000",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 4px 0",
};

const itemPrice = {
  color: "#6b7280",
  fontSize: "13px",
  margin: "0",
};

const itemTotal = {
  color: "#000000",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
};

const totalRow = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
};

const totalLabel = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "0",
};

const totalValue = {
  color: "#000000",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
};

const grandTotalLabel = {
  color: "#000000",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "8px 0 0 0",
};

const grandTotalValue = {
  color: "#D87D4E",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "8px 0 0 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  marginTop: "24px",
  textAlign: "center" as const,
};

export default OrderConfirmationEmail;
