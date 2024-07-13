"use client";

import { useCallback, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact, RenderElementProps } from "slate-react";
import { BaseEditor, Descendant, Editor, Transforms, Element } from "slate";
import { ReactEditor } from "slate-react";
import DefaultElement, { CodeElement } from "./CustomElement";
import { CustomElement, CustomText, ElementType } from "@/app/lib/types.ui";

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
  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  function handleOnKeyDown(e: React.KeyboardEvent): void {
    if (e.key === "`" && e.ctrlKey) {
      e.preventDefault();
      const [match] = Editor.nodes(editor, {
        match: (n) => Element.isElement(n) && n.type === ElementType.code,
      });

      Transforms.setNodes(
        editor,
        { type: match ? ElementType.paragraph : ElementType.code },
        { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
      );
    }
  }

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable renderElement={renderElement} onKeyDown={handleOnKeyDown} />
    </Slate>
  );
}