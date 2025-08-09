"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Send } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Erreur réseau")
      setStatus("success")
      form.reset()
    } catch (err: any) {
      setError(err?.message ?? "Une erreur est survenue")
      setStatus("error")
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">Nom</label>
          <Input id="name" name="name" placeholder="Votre nom" required />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input id="email" name="email" type="email" placeholder="vous@example.com" required />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <Textarea id="message" name="message" placeholder="Comment pouvons-nous vous aider ?" rows={5} required />
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={status === "loading"} className="bg-emerald-600 hover:bg-emerald-700">
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Envoi...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Envoyer
            </>
          )}
        </Button>
        {status === "success" && <p className="text-sm text-emerald-700">Message envoyé avec succès.</p>}
        {status === "error" && <p className="text-sm text-red-600">{error}</p>}
      </div>
      <p className="text-xs text-muted-foreground">
        En envoyant ce formulaire, vous acceptez nos <a className="underline" href="/cgu">CGU</a> et notre{" "}
        <a className="underline" href="/confidentialite">Politique de Confidentialité</a>.
      </p>
    </form>
  )
}
