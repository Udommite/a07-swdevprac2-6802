import CardPanel from "@/components/CardPanel";

export default function VenuePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8">
      <h1 className="text-4xl font-bold text-slate-900">Select Your Venue</h1>
      <CardPanel />
    </div>
  );
}
