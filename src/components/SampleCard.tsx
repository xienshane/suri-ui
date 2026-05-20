type SampleCardProps = {
  title: string;
  description: string;
};

export default function SampleCard({ title, description }: SampleCardProps) {
  return (
    <section className="border border-black/10 rounded-lg p-6 bg-white">
      <p className="text-xs uppercase tracking-wide text-black/60">Sample</p>
      <h1 className="text-2xl font-semibold mt-2">{title}</h1>
      <p className="mt-2 text-black/70">{description}</p>
    </section>
  );
}
