import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json() as { name?: string; email?: string; message?: string }
    // Simuler un traitement: journaliser le message côté serveur
    console.log("Nouveau message de contact Raidin:", body)
    // Retourner un succès
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 })
  }
}
