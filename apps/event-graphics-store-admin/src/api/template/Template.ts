import { JsonValue } from "type-fest";
import { Design } from "../design/Design";
import { Project } from "../project/Project";

export type Template = {
  createdAt: Date;
  description: string | null;
  design: JsonValue;
  designs?: Array<Design>;
  id: string;
  projects?: Array<Project>;
  title: string | null;
  updatedAt: Date;
};
