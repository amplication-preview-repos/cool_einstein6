import { SortOrder } from "../../util/SortOrder";

export type DesignOrderByInput = {
  assets?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  templateId?: SortOrder;
  updatedAt?: SortOrder;
};
