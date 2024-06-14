import { Design as TDesign } from "../api/design/Design";

export const DESIGN_TITLE_FIELD = "id";

export const DesignTitle = (record: TDesign): string => {
  return record.id?.toString() || String(record.id);
};
