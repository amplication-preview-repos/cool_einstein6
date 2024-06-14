import { InputJsonValue } from "../../types";
import { DesignCreateNestedManyWithoutTemplatesInput } from "./DesignCreateNestedManyWithoutTemplatesInput";
import { ProjectCreateNestedManyWithoutTemplatesInput } from "./ProjectCreateNestedManyWithoutTemplatesInput";

export type TemplateCreateInput = {
  description?: string | null;
  design?: InputJsonValue;
  designs?: DesignCreateNestedManyWithoutTemplatesInput;
  projects?: ProjectCreateNestedManyWithoutTemplatesInput;
  title?: string | null;
};
