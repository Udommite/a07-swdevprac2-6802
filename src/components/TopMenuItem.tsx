import Link from "next/link";

type TopMenuItemProps = {
  title: string;
  pageRef: string;
};

export default function TopMenuItem({
  title,
  pageRef,
}: TopMenuItemProps) {
  return (
    <Link
      href={pageRef}
      className="rounded-md bg-black px-4 py-2 font-medium text-white"
    >
      {title}
    </Link>
  );
}
