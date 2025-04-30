"use client";

import { AppStore, createAppStore, initAppStore } from "@/stores";
import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

export type StoreApi = ReturnType<typeof createAppStore>;

export const StoreContext = createContext<StoreApi | undefined>(undefined);

export interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const storeRef = useRef<StoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createAppStore(initAppStore());
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

export const useAppStore = <T,>(selector: (store: AppStore) => T): T => {
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return useStore(storeContext, selector);
};
