"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type NavMode = "galaxy" | "sidebar";

interface NavigationContextType {
  navMode: NavMode;
  setNavMode: (mode: NavMode) => void;
  toggleNavMode: () => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [navMode, setNavModeState] = useState<NavMode>("galaxy");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  useEffect(() => {
    try {
      const savedMode = localStorage.getItem("poetfolio_nav_mode") as NavMode | null;
      if (savedMode === "galaxy" || savedMode === "sidebar") {
        setNavModeState(savedMode);
      }
      const savedSidebarState = localStorage.getItem("poetfolio_sidebar_open");
      if (savedSidebarState !== null) {
        setSidebarOpen(savedSidebarState === "true");
      }
    } catch (e) {
      // Storage access gracefully handled
    }
  }, []);

  const setNavMode = (mode: NavMode) => {
    setNavModeState(mode);
    try {
      localStorage.setItem("poetfolio_nav_mode", mode);
    } catch (e) {}
  };

  const toggleNavMode = () => {
    const nextMode = navMode === "galaxy" ? "sidebar" : "galaxy";
    setNavMode(nextMode);
  };

  const handleSetSidebarOpen = (open: boolean) => {
    setSidebarOpen(open);
    try {
      localStorage.setItem("poetfolio_sidebar_open", String(open));
    } catch (e) {}
  };

  const toggleSidebar = () => {
    handleSetSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-nav-mode", navMode);
      document.documentElement.style.setProperty(
        "--sidebar-offset",
        navMode === "sidebar" ? (sidebarOpen ? "270px" : "76px") : "0px"
      );
    }
  }, [navMode, sidebarOpen]);

  return (
    <NavigationContext.Provider
      value={{
        navMode,
        setNavMode,
        toggleNavMode,
        sidebarOpen,
        setSidebarOpen: handleSetSidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    // Graceful fallback if rendered outside provider
    return {
      navMode: "galaxy" as NavMode,
      setNavMode: () => {},
      toggleNavMode: () => {},
      sidebarOpen: true,
      setSidebarOpen: () => {},
      toggleSidebar: () => {},
    };
  }
  return context;
}
