import { Element, Editor, Transforms, BaseEditor } from "slate";
import { ElementType } from "../types.ui";
import { ReactEditor } from "slate-react";

export function formatText(e: React.KeyboardEvent, editor: BaseEditor & ReactEditor) {
  if (!e.ctrlKey) return;

  switch (e.key) {
    case "`": {
      e.preventDefault();
      const [match] = Editor.nodes(editor, {
        match: (n) => Element.isElement(n) && n.type === ElementType.code,
      });

      Transforms.setNodes(
        editor,
        { type: match ? ElementType.paragraph : ElementType.code },
        { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
      );
      break;
    }

    case "b": {
      e.preventDefault();
      Editor.addMark(editor, "bold", true);
      break;
    }
  }
}
