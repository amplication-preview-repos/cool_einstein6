import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type DesignWhereInput = {
  assets?: JsonFilter;
  id?: StringFilter;
  template?: TemplateWhereUniqueInput;
};
