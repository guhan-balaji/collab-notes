import { RenderElementProps, RenderLeafProps } from "slate-react";

export default function DefaultElement(props: RenderElementProps) {
  return <p {...props.attributes}>{props.children}</p>;
}

export function CodeElement(props: RenderElementProps) {
  return (
    <>
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    </>
  );
}

export function Leaf(props: RenderLeafProps) {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}
    >
      {props.children}
    </span>
  );
}
