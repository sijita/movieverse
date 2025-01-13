export default function SectionSubtitle({
  icon,
  subtitle,
  rotate,
}: {
  icon: React.ReactNode;
  subtitle: string;
  rotate: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 bg-black text-white p-2 transform ${rotate} w-fit`}
    >
      {icon}
      <h2 className="text-3xl font-semibold">{subtitle}</h2>
    </div>
  );
}
