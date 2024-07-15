"use client";

import { useCallback, useState } from "react";
import { createEditor } from "slate";
import {
  Slate,
  Editable,
  withReact,
  RenderElementProps,
  RenderLeafProps,
} from "slate-react";
import { Descendant } from "slate";
import DefaultElement, { CodeElement, Leaf } from "./CustomElement";
import {
  CustomElement,
  CustomText,
  EditorType,
  ElementType,
} from "@/app/lib/types.ui";
import { handleOnKeyDown } from "@/app/lib/notes/note";

declare module "slate" {
  interface CustomTypes {
    Editor: EditorType;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: ElementType.paragraph,
    children: [{ text: "A line of text in a paragraph." }],
  },
];

export default function Note() {
  const [editor] = useState(() => withReact(createEditor()));

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />;
  }, []);
  const renderElement = useCallback((props: RenderElementProps) => {
    const et: ElementType = props.element.type;
    switch (et) {
      case ElementType.code:
        return <CodeElement {...props} />;
      case ElementType.paragraph:
        return <DefaultElement {...props} />;
      default:
        const _exhaustiveCheck: never = et;
        throw new Error(
          `Unexpected type: ${_exhaustiveCheck} is not of type ElementType.`
        );
    }
  }, []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={handleOnKeyDown(editor)}
      />
    </Slate>
  );
}
