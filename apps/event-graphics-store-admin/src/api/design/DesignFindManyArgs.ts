import { DesignWhereInput } from "./DesignWhereInput";
import { DesignOrderByInput } from "./DesignOrderByInput";

export type DesignFindManyArgs = {
  where?: DesignWhereInput;
  orderBy?: Array<DesignOrderByInput>;
  skip?: number;
  take?: number;
};
