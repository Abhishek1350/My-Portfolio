"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return theme === "dark" ? (
    <Button
      isIconOnly
      color="default"
      aria-label="Light Mode"
      onClick={() => setTheme("light")}
      size="sm"
      variant="light"
      radius="full"
    >
      <FaRegSun size={16} className="text-primary" />
    </Button>
  ) : (
    <Button
      isIconOnly
      color="default"
      aria-label="Dark Mode"
      onClick={() => setTheme("dark")}
      size="sm"
      variant="light"
      radius="full"
    >
      <FaRegMoon size={16} className="text-primary" />
    </Button>
  );
}
