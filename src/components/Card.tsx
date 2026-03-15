"use client";

import Rating from "@mui/material/Rating";
import Link from "next/link";
import { ReactNode } from "react";
import InteractiveCard from "@/components/InteractiveCard";

type CardProps = {
  venueName: string;
  imgSrc: string;
  rating: number;
  onRatingChange: (venueName: string, rating: number) => void;
  showRating?: boolean;
  footer?: ReactNode;
  href?: string;
};

export default function Card({
  venueName,
  imgSrc,
  rating,
  onRatingChange,
  showRating = true,
  footer,
  href,
}: CardProps) {
  const content = (
    <div>
      <div>
        <img
          src={imgSrc}
          alt={venueName}
          className="h-64 w-full object-cover"
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-slate-900">{venueName}</h2>
        {showRating ? (
          <div className="mt-4">
            <Rating
              id={`${venueName} Rating`}
              name={`${venueName} Rating`}
              data-testid={`${venueName} Rating`}
              value={rating}
              onChange={(_, value) => onRatingChange(venueName, value ?? 0)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );

  return (
    <InteractiveCard>
      <div>
        {href ? <Link href={href} className="block">{content}</Link> : content}
        {footer ? (
          <div className="border-t border-slate-200 px-5 py-4">{footer}</div>
        ) : null}
      </div>
    </InteractiveCard>
  );
}
