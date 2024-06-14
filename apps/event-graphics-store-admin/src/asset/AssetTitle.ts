import { Asset as TAsset } from "../api/asset/Asset";

export const ASSET_TITLE_FIELD = "url";

export const AssetTitle = (record: TAsset): string => {
  return record.url?.toString() || String(record.id);
};
