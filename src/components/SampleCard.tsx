type SampleCardProps = {
  title: string;
  description: string;
};

export default function SampleCard({ title, description }: SampleCardProps) {
  return (
    <section className="dashboard__card">
      <p className="settings-view__eyebrow">Sample</p>
      <h1 className="text-2xl font-semibold mt-2 text-[#111827]">{title}</h1>
      <p className="mt-2 text-[#4f5368]">{description}</p>
    </section>
  );
}
