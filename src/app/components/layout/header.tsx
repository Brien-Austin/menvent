"use client";

import React, { useState, useEffect } from "react";
import Logo from "./logo";
import { useNavRoutes } from "@/app/hooks/useNavRoutes";
import { useAppDispatch } from "@/app/store/store";
import { setCurrentTab } from "@/app/store/features/navigation-slice";
import { usePathname } from "next/navigation";

const Header = () => {
  const routes = useNavRoutes();
  const dispatch = useAppDispatch();
  const [currentTab, setCurrentTabState] = useState<string>("most-recent");
  const pathname = usePathname();

  useEffect(() => {
    const savedTab = localStorage.getItem("currentTab");
    if (savedTab) {
      setCurrentTabState(savedTab);
    }
  }, []);

  const handleTabClick = (tabname: string) => {
    localStorage.setItem("currentTab", tabname);
    setCurrentTabState(tabname);
    dispatch(setCurrentTab(tabname));
  };

  if  (currentTab === 'feed' &&pathname !== "/") {
    return (
     <div className="p-8">
        <Logo/>
     </div>
    );
  }

  return (
    <nav>
      <div
        className={`fixed dark:bg-[#0A0A0A] z-50 top-0 left-0 w-full h-20 dark:bg-none p-5 ${
            pathname !== "/" && "relative bg-none"
        }`}
      >
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-10">
            {currentTab !== "feed" && pathname !== "/"
              ? null
              : routes.map((route, i) => (
                  <button
                    key={i}
                    className={`px-3 py-1 rounded-full transition-all ${
                      currentTab === route.tabname
                        ? "ring-[2px] ring-purple-700 bg-purple-50 dark:bg-purple-900/10"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
                    }`}
                    onClick={() => handleTabClick(route.tabname)}
                    suppressHydrationWarning
                  >
                    {route.label}
                  </button>
                ))}
          </div>
          <div className="flex items-center space-x-10">
            {/* Right side content */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
