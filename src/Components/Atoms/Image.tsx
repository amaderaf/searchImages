export function Image({
  url,
  title,
}: {
  url: string;
  title: string;
}): React.ReactElement {
  return (
    <div className="image">
      <img src={url} alt={title} loading="lazy" />
      <h3>{title}</h3>
    </div>
  );
}
