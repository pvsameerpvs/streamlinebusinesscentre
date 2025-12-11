// components/home/amenities-marquee.tsx
"use client";

import React from "react";

const items = [
  "BRAND NEW FULLY",
  "FULLY EQUIPPED MEETING",
  "PROFESSIONAL FRONT DESK",
  "CUSTOM-DESIGNED FURNITURE &",
  "COMPLIMENTARY TEA, COFFEE,",
  "HIGH-SPEED INTERNET ACCESS",
  "FINGERPRINT OPERATED DOOR",
  "DEWA AND AC",
  "DEDICATED INTERCOM CONNECTION",
  "CENTRALIZED PRINTING &",
  "OFFICE CLEANING TWICE",
  "MAINTENANCE AVAILABLE UPON"
];

export function AmenitiesMarquee() {
  return (
    <section className="w-full bg-[#202020] py-6 md:py-16 text-[#d4a574]">
      <div className="overflow-hidden">
        <div
          className="
            marquee-track 
            flex items-center
            whitespace-nowrap
            text-base md:text-4xl
            font-semibold uppercase 
            tracking-[0.35em]
            leading-none
          "
        >
          {/* duplicate items twice to create seamless loop */}
          {[0, 1].map((loop) => (
            <React.Fragment key={loop}>
              {items.map((text, index) => (
                <React.Fragment key={`${loop}-${index}`}>
                  <span className="marquee-text-outline">
                    {text}
                  </span>
                  <span className="mx-8 inline-block align-middle text-[#d4a574]">
                    *
                  </span>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
