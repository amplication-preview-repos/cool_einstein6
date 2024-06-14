import { InputJsonValue } from "../../types";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type DesignUpdateInput = {
  assets?: InputJsonValue;
  template?: TemplateWhereUniqueInput | null;
};
