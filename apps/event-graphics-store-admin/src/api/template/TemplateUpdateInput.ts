import { InputJsonValue } from "../../types";
import { DesignUpdateManyWithoutTemplatesInput } from "./DesignUpdateManyWithoutTemplatesInput";
import { ProjectUpdateManyWithoutTemplatesInput } from "./ProjectUpdateManyWithoutTemplatesInput";

export type TemplateUpdateInput = {
  description?: string | null;
  design?: InputJsonValue;
  designs?: DesignUpdateManyWithoutTemplatesInput;
  projects?: ProjectUpdateManyWithoutTemplatesInput;
  title?: string | null;
};
