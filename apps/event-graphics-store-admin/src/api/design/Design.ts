import { JsonValue } from "type-fest";
import { Template } from "../template/Template";

export type Design = {
  assets: JsonValue;
  createdAt: Date;
  id: string;
  template?: Template | null;
  updatedAt: Date;
};
