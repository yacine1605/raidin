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
  const apkFiles = [
    {
      id: "client.apk",
      name: "RAIDIN Client",
      version: "1.0.0",
      size: "15 MB",
      description: "Official RAIDIN mobile client application",
      releaseDate: "2024-01-15",
      isStable: true,
    },
    {
      id: "server.apk",
      name: "RAIDIN Server",
      version: "1.0.0",
      size: "20 MB",
      description: "RAIDIN server management application",
      releaseDate: "2024-01-15",
      isStable: true,
    },
  ];
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
                Disponible sur Android
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Raidin — Dépannage et remorquage 24/7
              </h1>
              <p className="text-muted-foreground text-lg">
                En cas de panne ou d’accident, obtenez rapidement de l’aide. Un
                dépanneur professionnel à proximité intervient sur place ou
                remorque votre véhicule en toute sécurité
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600"
                  onClick={() => handleDownload({ id: "Raidin" }, "Raidin")}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger Raidin v1.0
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#comment-ca-marche">Voir comment ça marche</a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                iOS bientôt disponible.
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
              Pourquoi choisir Raidin ?
            </h2>
            <p className="text-muted-foreground">
              Une expérience fluide, transparente et sécurisée pour tous vos
              déplacements.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPinned className="h-5 w-5 text-blue-400" />
                  Réservation en 2 clics
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Indiquez votre destination et trouvez un chauffeur à proximité,
                instantanément.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  Suivi en temps réel
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Visualisez l’arrivée de votre chauffeur et partagez votre trajet
                avec vos proches.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-blue-400" />
                  Paiements sécurisés
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Payez directement cash, en toute sécurité.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-blue-400" />
                  Chauffeurs vérifiés
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Tous nos chauffeurs et dépannage sont contrôlés et évalués pour
                votre sérénité.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How it works */}
        <section id="comment-ca-marche" className="bg-muted/30">
          <div className="container py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center space-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Comment ça marche
              </h2>
              <p className="text-muted-foreground">
                Quatre étapes simples pour vous déplacer sans stress.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Téléchargez l'application",
                  desc: "Installez Raidin depuis notre site et créez votre compte.",
                  img: "/android-app-download.png",
                },
                {
                  step: "2",
                  title: "Demandez une assistance",
                  desc: "Décrivez la panne/accident et confirmez votre position.",
                  img: "/roadside-assistance-geolocation.png",
                },
                {
                  step: "3",
                  title: "Un dépanneur arrive ",
                  desc: "Le professionnel le plus proche est dépêché sur place.",
                  img: "/mobile-towing-invoice.png",
                },
                {
                  step: "4",
                  title: "Remorquage ou réparation",
                  desc: "Intervention sur place ou remorquage, paiement en espèces.",
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
                Prêt à partir ?
              </h3>
              <p className="text-white/90">
                Téléchargez Raidin et commandez votre dépannage en
                quelques secondes.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-white/90"
                onClick={() => handleDownload({ id: "Raidin" }, "Raidin")}
              >
                <Download className="mr-2 h-5 w-5" />
                Télécharger
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
