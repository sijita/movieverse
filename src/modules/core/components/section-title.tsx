import Link from 'next/link';

export default function SectionTitle({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div className="bg-white p-2 transform -rotate-1 w-fit shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <Link
        href={href}
        className="text-4xl font-bold text-black hover:text-white hover:bg-black transition-colors"
      >
        {title}
      </Link>
    </div>
  );
}
