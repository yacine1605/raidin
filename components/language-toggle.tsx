"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { languages } from "@/lib/i18n";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "ar" : "fr");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-xs font-medium"
      aria-label={`Switch to ${language === "fr" ? "Arabic" : "French"}`}
    >
      {languages[language === "fr" ? "ar" : "fr"].name}
    </Button>
  );
}
