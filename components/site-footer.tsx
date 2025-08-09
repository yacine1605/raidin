import Link from "next/link";
import { Car } from "lucide-react";
import Logo from "../public/raidin.png";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="border-t ">
      <div className="container grid gap-6 py-8 md:grid-cols-2 ml-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-semibold">
            <Image src={Logo} alt="Raidin" width="90" />
          </div>
          <p className="text-sm text-muted-foreground">
            Raidin est une application de mise en relation entre passagers et
            dépannage chauffeurs professionnels. Disponible sur Android.
          </p>
        </div>
        <div className="grid gap-1 text-sm md:justify-self-end">
          <Link href="/cgu" className="hover:underline">
            Conditions Générales d&apos;Utilisation
          </Link>
          <Link href="/confidentialite" className="hover:underline">
            Politique de Confidentialité
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-xs text-muted-foreground flex items-center justify-between flex-wrap gap-2">
          <span>
            © {new Date().getFullYear()} Digitservz. Tous droits réservés.
          </span>
        </div>
      </div>
    </footer>
  );
}
