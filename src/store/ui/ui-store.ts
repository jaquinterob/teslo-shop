import { create } from "zustand";
interface State {
  isSideMenuOpen: Boolean;
  openSidemenu: () => void;
  closeSidemenu: () => void;
}
export const useUIStore = create<State>()((set) => ({
  isSideMenuOpen: false,
  openSidemenu: () => set({ isSideMenuOpen: true }),
  closeSidemenu: () => set({ isSideMenuOpen: false }),
}));
