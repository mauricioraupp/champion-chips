"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "@geist-ui/icons"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer transition-colors"
    >
      {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}