import Types from "../Reducers/actionTypes";

export const updateStoreData = (data) => ({
  type: Types.UPDATE_STORE,
  payload: { ...data },
});
