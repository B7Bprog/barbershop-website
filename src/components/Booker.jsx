"use client";

import { BookerEmbed } from "@calcom/atoms";

export default function Booker({ username, eventSlug }) {
  return (
    <BookerEmbed
      username={username}
      eventSlug={eventSlug}
      view="month_view"
      onCreateBookingSuccess={() => {
        console.log("Booking created successfully");
      }}
    />
  );
}
