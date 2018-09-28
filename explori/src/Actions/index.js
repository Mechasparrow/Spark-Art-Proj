import { TEST, SELECT_COLLECTION, SELECT_ITEM } from "../Constants";

export const test = () => ({
  type: TEST
});

export const select_collection = collection_idx => ({
  type: SELECT_COLLECTION,
  payload: {
    collection_idx
  }
});

export const select_item = selected_item_idx => ({
  type: SELECT_ITEM,
  payload: {
    selected_item_idx
  }
});
