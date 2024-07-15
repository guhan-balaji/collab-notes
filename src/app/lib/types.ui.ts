import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

export type EditorType = BaseEditor & ReactEditor;

export type FormatedText = {
  text: string;
  bold?: true;
  italic?: true;
  underline?: true;
};

export type CustomText = FormatedText;

export enum ElementType {
  paragraph = "paragraph",
  code = "code",
}

interface BaseElement {
  type: ElementType;
  children: CustomText[];
}

export interface ParagraphElement extends BaseElement {
  type: ElementType.paragraph;
}

export interface CodeElement extends BaseElement {
  type: ElementType.code;
}

export type CustomElement = ParagraphElement | CodeElement;
