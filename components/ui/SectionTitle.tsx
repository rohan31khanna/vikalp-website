interface Props {
  title: string;
  subtitle: string;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  light = false,
}: Props) {
  return (
    <>
      <div className="gold-line" />

      <h2
        className={`section-title ${
          light ? "section-title-light" : ""
        }`}
      >
        {title}
      </h2>

      <p
  className={`section-subtitle max-w-3xl ${
    light ? "section-subtitle-light" : ""
  }`}
>
        {subtitle}
      </p>
    </>
  );
}