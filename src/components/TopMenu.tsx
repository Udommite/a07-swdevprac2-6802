import TopMenuItem from "@/components/TopMenuItem";

export default function TopMenu() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-sky-900 text-white shadow-md">
      <div className="mx-auto flex h-[50px] w-full items-center justify-end px-4">
        <div className="flex items-center gap-3">
          <span className="font-semibold">Venue Explorer</span>
          <nav aria-label="Top menu">
            <TopMenuItem title="Booking" pageRef="/booking" />
          </nav>
          <img
            src="/img/logo.png"
            alt="Venue Explorer logo"
            className="h-9 w-9 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
