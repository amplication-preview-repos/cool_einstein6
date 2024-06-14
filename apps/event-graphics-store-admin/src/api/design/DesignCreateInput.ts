import { InputJsonValue } from "../../types";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type DesignCreateInput = {
  assets?: InputJsonValue;
  template?: TemplateWhereUniqueInput | null;
};
