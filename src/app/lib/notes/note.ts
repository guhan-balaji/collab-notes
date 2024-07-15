import { Element, Editor, Transforms, BaseEditor } from "slate";
import { EditorType, ElementType } from "../types.ui";
import { ReactEditor } from "slate-react";

const CustomEditor = {
  isBoldMarkActive(editor: EditorType): boolean {
    const marks = Editor.marks(editor);
    return marks ? marks.bold === true : false;
  },

  isCodeBlockActive(editor: EditorType): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === ElementType.code,
    });

    return !!match;
  },

  toggleBoldMark(editor: EditorType) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "bold");
    } else {
      Editor.addMark(editor, "bold", true);
    }
  },

  toggleCodeBlock(editor: EditorType) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? ElementType.paragraph : ElementType.code },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
    );
  },
};

// Event Handlers
export function handleOnKeyDown(editor: BaseEditor & ReactEditor) {
  return (e: React.KeyboardEvent) => {
    if (!e.ctrlKey) return;
    switch (e.key) {
      case "`": {
        e.preventDefault();
        CustomEditor.toggleCodeBlock(editor);
      }

      case "b": {
        e.preventDefault();
        CustomEditor.toggleBoldMark(editor);
        break;
      }
    }
  };
}
