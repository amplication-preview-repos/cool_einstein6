import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  template?: TemplateWhereUniqueInput | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
