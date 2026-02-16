"use client";

import { useEffect, useState } from "react";
import { getContactEmail } from "@/lib/contact";

/**
 * Renders the contact email only after mount so it is not in the initial HTML.
 * Reduces scraping; email is still visible to users and can be clicked to open mail client.
 */
export default function ClientEmail({ className = "", asLink = true }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(getContactEmail());
  }, []);

  if (!email) {
    return <span className={className} aria-hidden="true" />;
  }

  if (asLink) {
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    return (
      <a
        href={gmailComposeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {email}
      </a>
    );
  }

  return <span className={className}>{email}</span>;
}
