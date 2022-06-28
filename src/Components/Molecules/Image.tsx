export default function Image({
  url,
  title,
}: {
  url: string;
  title: string;
}): React.ReactElement {
  return (
    <div className="image">
      <img src={url} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
