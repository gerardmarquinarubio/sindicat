import { DatesToStrings } from "./DateToString";

export type ObjectMappable<T> = DatesToStrings<T> | T;
