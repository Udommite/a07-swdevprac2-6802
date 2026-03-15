import Link from "next/link";
import { notFound } from "next/navigation";
import { venueMap } from "@/data/venues";

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venue = venueMap.get(vid);

  if (!venue) {
    notFound();
  }

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10">
      <div>
        <Link
          href="/venue"
          className="inline-flex rounded-lg bg-sky-600 px-4 py-2 font-medium text-white transition hover:bg-sky-500"
        >
          Back to Venue List
        </Link>
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
        Venue Detail
      </p>
      <h1 className="text-4xl font-bold text-slate-900">{venue.name}</h1>
      <img
        src={venue.image}
        alt={venue.name}
        className="w-full rounded-3xl object-cover shadow-lg md:h-[420px]"
      />
    </section>
  );
}
