// "use client";

// import { useEffect, useState } from "react";
// import { getContactEmail } from "@/lib/contact";

// /**
//  * Renders the contact email only after mount so it is not in the initial HTML.
//  * Reduces scraping; email is still visible to users and can be clicked to open mail client.
//  */
// export default function ClientEmail({ className = "", asLink = true }) {
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     setEmail(getContactEmail());
//   }, []);

//   if (!email) {
//     return <span className={className} aria-hidden="true" />;
//   }

//   if (asLink) {
//     const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
//     return (
//       <a
//         href={gmailComposeUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={className}
//       >
//         {email}
//       </a>
//     );
//   }

//   return <span className={className}>{email}</span>;
// }



"use client";

import { useEffect, useState } from "react";
import { getContactEmail } from "@/lib/contact";

export default function ClientEmail({ 
  className = "", 
  asLink = true,
  loadingText = ""
}) {
  const [email, setEmail] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setEmail(getContactEmail());
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);

  const handleClick = (e) => {
    if (!isMobile) return; // Let default behavior happen on desktop
    
    e.preventDefault();
    const gmailAppUrl = `googlegmail://co?to=${encodeURIComponent(email)}`;
    const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    
    window.location.href = gmailAppUrl;
    
    // Fallback to web if app doesn't open
    setTimeout(() => {
      window.location.href = gmailWebUrl;
    }, 1000);
  };

  if (!email) {
    return loadingText ? <span className={className}>{loadingText}</span> : null;
  }

  if (asLink) {
    const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    
    return (
      <a
        href={gmailWebUrl}
        target={isMobile ? "_self" : "_blank"}
        rel={isMobile ? undefined : "noopener noreferrer"}
        onClick={handleClick}
        className={className}
      >
        {email}
      </a>
    );
  }

  return <span className={className}>{email}</span>;
}