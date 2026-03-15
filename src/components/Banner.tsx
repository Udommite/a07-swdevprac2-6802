"use client";

import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

const bannerImages = [
  "/img/cover.jpg",
  "/img/cover2.jpg",
  "/img/cover3.jpg",
  "/img/cover4.jpg",
];

export default function Banner() {
  const [imageIndex, setImageIndex] = useState(0);
  const router = useRouter();

  const handleBannerClick = () => {
    setImageIndex((currentIndex) => (currentIndex + 1) % bannerImages.length);
  };

  const handleSelectVenue = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    router.push("/venue");
  };

  return (
    <section className="relative overflow-hidden rounded-2xl shadow-md">
      <img
        src={bannerImages[imageIndex]}
        alt="Venue Explorer banner"
        className="h-[320px] w-full cursor-pointer object-cover md:h-[420px]"
        onClick={handleBannerClick}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/45 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-center px-8 py-12 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
          Venue Explorer
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
          Find the right venue for your next event
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-100">
          Browse featured spaces and continue to the booking page when you are
          ready to reserve one.
        </p>
      </div>
      <button
        type="button"
        className="absolute bottom-6 right-6 rounded-lg bg-sky-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-sky-500"
        onClick={handleSelectVenue}
      >
        Select Venue
      </button>
    </section>
  );
}
