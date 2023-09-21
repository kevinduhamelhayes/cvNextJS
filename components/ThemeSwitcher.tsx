// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded-md">
      <p className="mb-4 text-gray-900 dark:text-gray-100">
        The current theme is: {theme}
      </p>
      <button 
        onClick={toggleTheme} 
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-400"
      >
        Toggle Theme
      </button>
    </div>
  )
};
