import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  id?: StringFilter;
  template?: TemplateWhereUniqueInput;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
