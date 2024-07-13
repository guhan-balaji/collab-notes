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

type BaseElement = {
  type: ElementType;
  children: CustomText[];
};

export type ParagraphElement = BaseElement & {
  type: ElementType.paragraph;
};

export type CodeElement = BaseElement & {
  type: ElementType.code;
};

export type CustomElement = ParagraphElement | CodeElement;
