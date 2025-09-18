"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../public/raidin.png";
import { useLanguage } from "@/hooks/use-language";

import LanguageToggle from "./language-toggle";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t, dir } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          {/*<Car className="h-5 w-5 text-emerald-600" />
          <span>Raidin</span>*/}
          <Image src={Logo} alt="Raidin" width="90" /> <LanguageToggle />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/cgu"
            className="hover:text-foreground/80 text-foreground/60"
          >
            {t("terms")}
          </Link>
          <Link
            href="/confidentialite"
            className="hover:text-foreground/80 text-foreground/60"
          >
            {t("privacy")}
          </Link>
          <Link
            href="/contact"
            className="hover:text-foreground/80 text-foreground/60"
          >
            {t("contact")}
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-blue-400 hover:bg-blue-700">
            <Link href="/depannage" target="_blank" rel="noopener noreferrer">
              {t("joinAsPro")}
            </Link>
          </Button>
        </div>
        <button
          aria-label="Ouvrir le menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-muted"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <div className="flex flex-row gap-2 items-center">
              <Menu className="h-5 w-5" />
              <div className="flex "></div>
            </div>
          )}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-3">
           
            <Link href="/cgu" className="py-1" onClick={() => setOpen(false)}>
              {t("terms")}
            </Link>
            <Link
              href="/confidentialite"
              className="py-1"
              onClick={() => setOpen(false)}
            >
              {t("privacy")}
            </Link>
            <Link
              href="/contact"
              className="py-1"
              onClick={() => setOpen(false)}
            >
              {t("contact")}
            </Link>
            <LanguageToggle />
            <Button asChild className="bg-blue-400 hover:bg-blue-700">
              <Link href="/depannage" target="_blank" rel="noopener noreferrer">
                {t("joinAsPro")}{" "}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
