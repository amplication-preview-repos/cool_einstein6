import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DesignListRelationFilter } from "../design/DesignListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type TemplateWhereInput = {
  description?: StringNullableFilter;
  design?: JsonFilter;
  designs?: DesignListRelationFilter;
  id?: StringFilter;
  projects?: ProjectListRelationFilter;
  title?: StringNullableFilter;
};
