"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { MotionDiv } from "@/app/use-clients"

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      {theme === "light" && (
        <Button onClick={() => setTheme("dark")} variant="outline" size="icon">
          <MotionDiv
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-[1.1rem] w-[1.1rem] transition-all" />
          </MotionDiv>
        </Button>
      )}
      {theme === "dark" && (
        <Button onClick={() => setTheme("light")} variant="outline" size="icon">
          <MotionDiv
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-[1.1rem] w-[1.1rem] scale-100 rotate-0 transition-all dark:scale-100 dark:-rotate-90" />
          </MotionDiv>
        </Button>
      )}
    </div>
  )
}
