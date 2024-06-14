import { Template } from "../template/Template";
import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  id: string;
  template?: Template | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
