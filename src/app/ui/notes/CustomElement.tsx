export default function DefaultElement({
  attributes,
  children,
}: Readonly<{
  attributes: React.HTMLAttributes<HTMLParagraphElement>;
  children: React.ReactNode;
}>) {
  return <p {...attributes}>{children}</p>;
}

export function CodeElement({
  attributes,
  children,
}: Readonly<{
  attributes: React.HTMLAttributes<HTMLPreElement>;
  children: React.ReactNode;
}>) {
  return (
    <>
      <pre {...attributes}>
        <code>{children}</code>
      </pre>
    </>
  );
}
