import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ContactForm from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Contact — Raidin",
  description:
    "Contactez l’équipe Raidin pour toute question, assistance ou partenariat.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-[100svh] flex-col">
      <SiteHeader />
      <main className="container flex-1 py-10 md:py-16">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Nous contacter</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Une question, un problème, une idée ? Écrivez-nous.</p>
              <p>
                Email:{" "}
                <a className="underline" href="mailto:support@raidin.app">
                  contact@digitservz.dz
                </a>
              </p>
              <p>Support disponible du 7/7, 9h–23h (heure locale).</p>
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
