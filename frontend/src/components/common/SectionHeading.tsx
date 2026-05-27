export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow ? <p className="text-sm font-semibold text-brand-accent">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold tracking-normal text-brand">{title}</h2>
    </div>
  );
}
