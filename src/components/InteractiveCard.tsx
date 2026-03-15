"use client";

import { ReactNode, useState } from "react";

type InteractiveCardProps = {
  children: ReactNode;
};

export default function InteractiveCard({
  children,
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-full overflow-hidden rounded-lg ${
        isHovered ? "bg-neutral-200 shadow-2xl" : "bg-white shadow-lg"
      }`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}
