"use client";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ContactForm from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  CreditCard,
  Download,
  Headphones,
  MapPinned,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/hooks/use-language";

//export const metadata = {
//  title: "Contact — Raidin",
//  description:
//    "Contactez l’équipe Raidin pour toute question, assistance ou partenariat.",
//};
import logo from "../../public/rpro.png";
import { useState } from "react";
export default function ContactPage() {
  const { t, dir } = useLanguage();

  const [downloadStatus, setDownloadStatus] = useState({});

  const handleDownload = async (apk, displayName) => {
    try {
      // Set loading state
      setDownloadStatus((prev) => ({ ...prev, [apk.id]: "loading" }));

      // Get download URL from secure API
      const response = await fetch(`/api/get-download-url/${apk.id}`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to get download URL");
      }

      const { downloadUrl } = await response.json();

      // Create a temporary anchor element to trigger download
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `${displayName}.apk`;
      link.target = "_blank";
      link.style.display = "none";

      // Add to DOM, click, then remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Set success state
      setDownloadStatus((prev) => ({ ...prev, [apk.id]: "success" }));

      // Reset status after 3 seconds
      setTimeout(() => {
        setDownloadStatus((prev) => ({ ...prev, [apk.id]: null }));
      }, 3000);
    } catch (error) {
      console.error("Download error:", error);
      setDownloadStatus((prev) => ({ ...prev, [apk.id]: "error" }));

      // Reset error status after 3 seconds
      setTimeout(() => {
        setDownloadStatus((prev) => ({ ...prev, [apk.id]: null }));
      }, 3000);

      alert(`Download failed: ${error.message}`);
    }
  };
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

              <div className="flex flex-row">
                <Image src={logo} alt="" width={90} />

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  {t("proHeroTitle")}
                </h1>
              </div>
              <p className="text-muted-foreground text-lg">
                {t("proHeroDesc")}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600"
                  onClick={() =>
                    handleDownload({ id: "Raidin-Pro" }, "Raidin-Pro")
                  }
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t("download")}
                  RaidinPro V1.0.0
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#comment-ca-marche">{t("seeHowItWorks")}</a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                {t("coverage247")}
              </p>
            </div>
            <div className="relative">
              <div className="relative mx-auto max-w-[380px]">
                <Image
                  src="/1754759903708.jpg"
                  width={180}
                  height={160}
                  alt="Aperçu de l'application Raidin sur smartphone"
                  className="rounded-[2rem] border shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        {/* Advantages */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("advantagesTitle")}
            </h2>
            <p className="text-muted-foreground">{t("advantagesSubtitle")}</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPinned className="h-5 w-5 text-blue-500" />
                  {t("qualifiedRequestsTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t("qualifiedRequestsDesc")}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  {t("realTimeFlowTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t("realTimeFlowDesc")}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-blue-500" />
                  {t("simplifiedPaymentsTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t("simplifiedPaymentsDesc")}{" "}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-blue-500" />
                  {t("integratedProToolsTitle")}{" "}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t("integratedProToolsDesc")}{" "}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-blue-500" />
                  {t("transparentCommissionTitle")}{" "}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t("transparentCommissionDesc")}{" "}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-blue-500" />
                  {t("dedicatedSupportTitle")}{" "}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t("dedicatedSupportDesc")}{" "}
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
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: t("proStep1Title"),
                  desc: t("proStep1Desc"),
                },
                {
                  step: "2",
                  title: t("proStep2Title"),
                  desc: t("proStep2Desc"),
                },
                {
                  step: "3",
                  title: t("proStep3Title"),
                  desc: t("proStep3Desc"),
                },
                {
                  step: "4",
                  title: t("proStep4Title"),
                  desc: t("proStep4Desc"),
                },
              ].map((item) => (
                <Card key={item.step}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs">
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
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              {t("prerequisitesTitle")}
            </h2>
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
              {[
                t("prerequisite1"),
                t("prerequisite2"),
                t("prerequisite3"),
                t("prerequisite4"),
                t("prerequisite5"),
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-500" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* CTA */}
        <section className="container py-16 md:py-24">
          <div className="grid items-center gap-6 rounded-2xl border bg-gradient-to-br from-blue-500 to-blue-800 px-6 py-10 text-white md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold sm:text-3xl">
                {t("becomePartner")}{" "}
              </h3>
              <p className="text-white/90">{t("ctaDescription")} </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-white/90"
                onClick={() => handleDownload({ id: "Raidin" }, "Raidin")}
              >
                <Download className="mr-2 h-5 w-5" />
                {t("download")}
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
