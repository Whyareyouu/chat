import { MenuSection } from "features/BurgetMenu/ui/menu.config";

export type BurgerSchema = {
  isOpen: boolean;
  selectedSection: MenuSection;
};
