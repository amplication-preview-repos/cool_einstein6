import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AssetWhereInput = {
  id?: StringFilter;
  typeField?: "Option1";
  url?: StringNullableFilter;
};
