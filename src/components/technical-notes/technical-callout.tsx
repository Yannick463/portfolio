type TechnicalCalloutProps = {
  text: string;
};

export function TechnicalCallout({ text }: TechnicalCalloutProps) {
  return (
    <p
      className="technical-note-body mt-5 max-w-2xl rounded-xl border border-border-subtle bg-bg-secondary/60 px-4 py-3 text-text-secondary"
      role="note"
    >
      {text}
    </p>
  );
}
