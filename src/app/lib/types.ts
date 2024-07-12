export type NoteAccessPermision =
  | NoteAccessPermisions.r
  | NoteAccessPermisions.rw;

export enum NoteAccessPermisions {
  r = "READ",
  rw = "READ/WRITE",
}
