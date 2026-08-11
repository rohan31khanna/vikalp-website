"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

import { useNavigator } from "@/hooks/useNavigator";

type NavigatorContextValue = ReturnType<
  typeof useNavigator
>;

const NavigatorContext =
  createContext<NavigatorContextValue | null>(
    null
  );

interface NavigatorProviderProps {
  children: ReactNode;
}

export default function NavigatorProvider({
  children,
}: NavigatorProviderProps) {
  const navigator = useNavigator();

  return (
    <NavigatorContext.Provider value={navigator}>
      {children}
    </NavigatorContext.Provider>
  );
}

export function useNavigatorContext() {
  const context = useContext(
    NavigatorContext
  );

  if (!context) {
    throw new Error(
      "useNavigatorContext must be used inside NavigatorProvider."
    );
  }

  return context;
}