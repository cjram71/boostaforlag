export function QuoteBlock({ quote, attribution }: { quote: string; attribution?: string }) {
  return (
    <figure className="quote-block">
      <blockquote>“{quote}”</blockquote>
      {attribution ? <figcaption>— {attribution}</figcaption> : null}
    </figure>
  );
}
