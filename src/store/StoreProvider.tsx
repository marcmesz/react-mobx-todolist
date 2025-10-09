import type { ReactNode } from "react"
import { StoreContext } from "./storeContext"
import { store } from "./store"

interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
