"use client";

import Script from "next/script";

export default function TawkMessenger() {
  const propertyId = process.env.NEXT_PUBLIC_TAWK_MESSENGER_PROPERTY_ID;
  const widgetId = process.env.NEXT_PUBLIC_TAWK_MESSENGER_WIDGET_ID;

  if (!propertyId || !widgetId) return null;

  return (
    <Script
      id="tawk-messenger"
      src={`https://embed.tawk.to/${propertyId}/${widgetId}`}
      strategy="lazyOnload"
    />
  );
}