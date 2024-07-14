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
import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";
import DefaultElement, { CodeElement, Leaf } from "./CustomElement";
import { CustomElement, CustomText, ElementType } from "@/app/lib/types.ui";
import { formatText } from "@/app/lib/notes/helper";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
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

  function handleOnKeyDown(e: React.KeyboardEvent): void {
    formatText(e, editor);
  }

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={handleOnKeyDown}
      />
    </Slate>
  );
}
