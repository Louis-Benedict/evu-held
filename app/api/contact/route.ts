import { Resend } from "resend";

const serviceLabels: Record<string, string> = {
  pv: "PV-Netzanmeldung (Solar)",
  wp: "Wärmepumpen-Anmeldung",
  wallbox: "Wallbox-Anmeldung",
  sonstige: "Sonstige Anlagen",
  partner: "Partner Werden",
  zaehler: "Zählerantrag",
  mehrere: "Mehrere Anmeldungstypen",
};

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { firstName, lastName, email, phone, serviceType, message } =
      await req.json();

    await resend.emails.send({
      from: "Kontaktformular <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Neue Anfrage: ${serviceLabels[serviceType] ?? serviceType} – ${firstName} ${lastName}`,
      text: [
        `Name:      ${firstName} ${lastName}`,
        `E-Mail:    ${email}`,
        `Telefon:   ${phone || "–"}`,
        `Leistung:  ${serviceLabels[serviceType] ?? serviceType}`,
        ``,
        `Anmerkungen:`,
        message || "–",
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] send error", err);
    return Response.json({ ok: false }, { status: 500 });
  }
}
