import { StateSchema } from "app/providers/StoreProvider";

export const getSelectedSection = (state: StateSchema) =>
  state.burger.selectedSection;
