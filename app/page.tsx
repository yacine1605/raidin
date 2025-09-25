"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShieldCheck,
  CreditCard,
  MapPinned,
  Clock,
  Smartphone,
  Download,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";

//export const metadata = {
//  title: "Raidin — Application de Depannage sur Android",
//  description:
//    "Raidin, votre application de VTC sur Android. Réservez un chauffeur en quelques minutes, suivez votre trajet en temps réel, paiements sécurisés.",
//  openGraph: {
//    title: "Raidin — Application de VTC sur Android",
//    description:
//      "Réservez un Depannage en quelques minutes. Suivi en temps réel, chauffeurs vérifiés, paiements sécurisés.",
//    images: ["/raidin-android-app-preview.png"],
//  },
//};
export default function HomePage() {
  const [downloadStatus, setDownloadStatus] = useState({});
  const { t, dir } = useLanguage();

  return (
    <div className="flex min-h-[100svh] flex-col   ">
      <SiteHeader />
      <main className="flex-1 ml-10">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
          <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-emerald-700 border-emerald-200 bg-emerald-50">
                <Smartphone className="h-3.5 w-3.5" />
                {t("roadsideAssistance")}{" "}
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {t("heroTitle")}
              </h1>
              <p className="text-muted-foreground text-lg">
                {t("heroDescription")}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  <a href="https://digitservz.dz/downloads/Raidin.apk" download>
                    <Download className="mr-2 h-5 w-5" />
                    {t("download")} Raidin 1.0
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#comment-ca-marche"> {t("seeHowItWorks")}</a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                {t("coverage247")}
              </p>
            </div>
            <div className="relative">
              <div className="relative mx-auto max-w-[380px]">
                <Image
                  src="/photo.jpg"
                  width={380}
                  height={760}
                  alt="Aperçu de l'application Raidin sur smartphone"
                  className="rounded-[2rem] border shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("whyChooseRaidin")}
            </h2>
            <p className="text-muted-foreground">{t("featuresSubtitle")}</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPinned className="h-5 w-5 text-blue-400" />
                  {t("reservation2Clicks")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t("rapidInterventionDesc")}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  {t("realTimeTracking")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t("realTimeTrackingDesc")}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-blue-400" />
                  {t("paymentTracking")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t("paymentTrackingDesc")}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-blue-400" />
                  {t("verifiedDrivers")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t("verifiedDriversDesc")}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How it works */}
        <section id="comment-ca-marche" className="bg-muted/30">
          <div className="container py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center space-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t("howItWorks")}
              </h2>
              <p className="text-muted-foreground">{t("howItWorksSubtitle")}</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: t("step1Title"),
                  desc: t("step1Desc"),
                  img: "/android-app-download.png",
                },
                {
                  step: "2",
                  title: t("step2Title"),
                  desc: t("step2Desc"),
                  img: "/roadside-assistance-geolocation.png",
                },
                {
                  step: "3",
                  title: t("step3Title"),
                  desc: t("step3Desc"),
                  img: "/mobile-towing-invoice.png",
                },
                {
                  step: "4",
                  title: t("step4Title"),
                  desc: t("step4Desc"),
                  img: "/tow-truck-on-the-way.png",
                },
              ].map((item) => (
                <Card key={item.step} className="overflow-hidden">
                  <Image
                    src={item.img || "/placeholder.svg"}
                    width={640}
                    height={400}
                    alt={`Étape ${item.step}`}
                    className="h-40 w-full object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-400 text-white text-xs">
                        {item.step}
                      </span>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {item.desc}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-16 md:py-24">
          <div className="grid items-center gap-6 rounded-2xl border bg-gradient-to-br from-blue-500 to-blue-800 px-6 py-10 text-white md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold sm:text-3xl">
                {t("needHelpNow")}{" "}
              </h3>
              <p className="text-white/90">{t("ctaDescription")} </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <Button
                asChild
                size="lg"
                className="bg-blue-500 hover:bg-blue-600"
              >
                <a href="https://digitservz.dz/downloads/Raidin.apk" download>
                  <Download className="mr-2 h-5 w-5" />
                  {t("download")}
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">{t("contact")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
