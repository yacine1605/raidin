"use client";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ContactForm from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";

export default function ContactPage() {
  const { t, dir } = useLanguage();
  return (
    <div className="flex min-h-[100svh] flex-col">
      <SiteHeader />
      <main className="container flex-1 py-10 md:py-16">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t("contactUs")}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>{t("contactQuestion")}</p>
              <p>
                {t("contactEmail")}
                <a className="underline" href="mailto:support@raidin.app">
                  raidin@digitservz.dz
                </a>
              </p>
              <p> {t("contactPhone")} : 0784065560</p>
              <p>{t("contactSupportHours")} </p>
            </CardContent>
          </Card>
          {/*<Card>
            <CardHeader>
              <CardTitle>Formulaire de contact</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>*/}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
