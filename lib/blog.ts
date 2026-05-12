export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string; // YYYY-MM-DD
  readingTimeMinutes: number;
  category: string;
  excerpt: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "waermepumpe-anmelden",
    title: "Wärmepumpe anmelden – ist das Pflicht?",
    metaTitle: "Wärmepumpe anmelden – Pflicht & Anleitung 2025 | EVU-HELD",
    metaDescription:
      "Muss eine Wärmepumpe angemeldet werden? Ja – wir erklären die Pflichten nach §14a EnWG, die Eintragung im Marktstammdatenregister und alle notwendigen Schritte.",
    publishedAt: "2025-03-10",
    readingTimeMinutes: 4,
    category: "Wärmepumpe",
    excerpt:
      "Viele Hausbesitzer sind unsicher, ob sie ihre Wärmepumpe anmelden müssen. Wir klären auf: Was gilt nach §14a EnWG, welche Schritte sind erforderlich und welche Folgen drohen bei fehlender Anmeldung.",
    content: [
      {
        type: "paragraph",
        text: "Viele Hausbesitzer fragen sich, ob sie ihre Wärmepumpe überhaupt anmelden müssen – oder ob das nur eine optionale Formalität ist. Die klare Antwort: In den meisten Fällen ist die Anmeldung gesetzlich vorgeschrieben und sollte nicht auf die lange Bank geschoben werden.",
      },
      {
        type: "h2",
        text: "Warum muss eine Wärmepumpe angemeldet werden?",
      },
      {
        type: "paragraph",
        text: "Wärmepumpen zählen als steuerbare Verbrauchseinrichtungen gemäß §14a des Energiewirtschaftsgesetzes (EnWG). Das bedeutet: Der zuständige Netzbetreiber hat das Recht, die Leistung Ihrer Wärmepumpe in Hochlastsituationen kurzzeitig zu reduzieren – maximal auf 4,2 kW. Als Gegenleistung erhalten Betreiber vergünstigte Netzentgelte, was langfristig Kosten spart.",
      },
      {
        type: "h2",
        text: "Was muss konkret angemeldet werden?",
      },
      {
        type: "list",
        items: [
          "Anmeldung beim zuständigen Netzbetreiber (mit technischen Daten der Anlage)",
          "Eintragung im Marktstammdatenregister (MaStR) der Bundesnetzagentur",
          "Ggf. Installation und Abstimmung eines separaten Zählers oder Unterzählers",
          "Nachweis der Steuerbarkeit durch ein kompatibles Steuergerät (z. B. EEBUS oder Rundsteuerempfänger)",
        ],
      },
      {
        type: "h2",
        text: "Welche Wärmepumpen sind betroffen?",
      },
      {
        type: "paragraph",
        text: "Grundsätzlich fallen alle neu installierten Wärmepumpen ab einer elektrischen Leistung von mehr als 4,2 kW unter die §14a-Regelung. Auch bestehende Anlagen, die nach dem 1. Januar 2024 erweitert oder modernisiert werden, können der Meldepflicht unterliegen. Im Zweifelsfall empfiehlt sich eine Rücksprache mit einem Fachbetrieb.",
      },
      {
        type: "h2",
        text: "Was passiert ohne Anmeldung?",
      },
      {
        type: "list",
        items: [
          "Der Netzbetreiber kann den Netzanschluss der Wärmepumpe verweigern oder einschränken",
          "Kein Anspruch auf die vergünstigten Netzentgelte nach §14a EnWG",
          "Mögliche rechtliche Konsequenzen und Bußgelder",
          "Probleme mit dem Versicherungsschutz bei einem Schaden durch eine nicht angemeldete Anlage",
        ],
      },
      {
        type: "h2",
        text: "Wie läuft die Anmeldung ab?",
      },
      {
        type: "paragraph",
        text: "Die Anmeldung einer Wärmepumpe beim Netzbetreiber erfordert technische Daten wie die Nennleistung, den Standort und den Hersteller der Anlage. Diese Informationen müssen in einem vom Netzbetreiber vorgegebenen Formular eingereicht werden. Zusätzlich muss die Anlage innerhalb von vier Wochen nach Inbetriebnahme im Marktstammdatenregister registriert werden.",
      },
      {
        type: "paragraph",
        text: "Da jeder Netzbetreiber eigene Formulare und Prozesse hat, ist die Anmeldung für Privatpersonen oft unübersichtlich und zeitaufwendig. Fehler in der Dokumentation können zu Verzögerungen oder einer Ablehnung der Anmeldung führen.",
      },
      {
        type: "callout",
        text: "Wir übernehmen die komplette Anmeldung Ihrer Wärmepumpe – beim Netzbetreiber, im Marktstammdatenregister und bei allen weiteren Behörden. Deutschlandweit, schnell und zuverlässig.",
      },
    ],
  },
  {
    slug: "pv-anlage-anmelden",
    title: "PV-Anlage anmelden – Schritt für Schritt erklärt",
    metaTitle: "PV-Anlage anmelden 2025 – Schritt für Schritt | EVU-HELD",
    metaDescription:
      "Alles zur Anmeldung einer Photovoltaikanlage: Voranmeldung beim Netzbetreiber, Marktstammdatenregister, Zähler und häufige Fehler – verständlich erklärt.",
    publishedAt: "2025-02-28",
    readingTimeMinutes: 5,
    category: "PV-Anlage",
    excerpt:
      "Eine PV-Anlage muss vor oder direkt nach der Inbetriebnahme angemeldet werden. Wir erklären alle Schritte – von der Voranmeldung beim Netzbetreiber bis zur Eintragung im Marktstammdatenregister.",
    content: [
      {
        type: "paragraph",
        text: "Wer eine Photovoltaikanlage (PV-Anlage) installiert, muss diese ordnungsgemäß anmelden – das ist gesetzlich vorgeschrieben und Voraussetzung für den Netzbetrieb und die Einspeisevergütung. Viele Betreiber unterschätzen den Aufwand und stolpern über Fehler, die zu Verzögerungen oder sogar zur Ablehnung durch den Netzbetreiber führen können.",
      },
      {
        type: "h2",
        text: "Schritt 1: Voranmeldung beim Netzbetreiber",
      },
      {
        type: "paragraph",
        text: "Bevor die PV-Anlage in Betrieb genommen wird, muss eine Voranmeldung beim zuständigen Netzbetreiber erfolgen. Dabei werden technische Daten wie die geplante Modulleistung (kWp), der Wechselrichtertyp und der Standort übermittelt. Der Netzbetreiber prüft, ob das lokale Netz die Einspeisung aufnehmen kann, und erteilt eine Netzverträglichkeitsprüfung.",
      },
      {
        type: "h2",
        text: "Schritt 2: Installation und Inbetriebnahme",
      },
      {
        type: "paragraph",
        text: "Nach der Freigabe durch den Netzbetreiber kann die Anlage installiert und in Betrieb genommen werden. Ein konzessionierter Elektrobetrieb muss die Inbetriebnahme durchführen und bestätigen. Das Inbetriebnahmeprotokoll wird für die weitere Anmeldung benötigt.",
      },
      {
        type: "h2",
        text: "Schritt 3: Endanmeldung beim Netzbetreiber",
      },
      {
        type: "paragraph",
        text: "Nach der Installation wird die Endanmeldung beim Netzbetreiber eingereicht. Hierbei werden das Inbetriebnahmeprotokoll, die technischen Daten und ggf. Fotos der Anlage übermittelt. Erst nach dieser Anmeldung darf offiziell in das Netz eingespeist werden.",
      },
      {
        type: "h2",
        text: "Schritt 4: Eintragung im Marktstammdatenregister (MaStR)",
      },
      {
        type: "paragraph",
        text: "Das Marktstammdatenregister (MaStR) der Bundesnetzagentur ist das zentrale Register für alle Energieanlagen in Deutschland. Die Registrierung muss innerhalb eines Monats nach Inbetriebnahme erfolgen – sonst drohen Bußgelder und der rückwirkende Verlust der Einspeisevergütung.",
      },
      {
        type: "list",
        items: [
          "Anlagenbetreiber im MaStR registrieren (sofern noch nicht geschehen)",
          "Technische Daten der Anlage eintragen (Leistung, Standort, Inbetriebnahmedatum)",
          "Wechselrichter und Speicher separat erfassen",
          "Registrierungsbestätigung aufbewahren",
        ],
      },
      {
        type: "h2",
        text: "Schritt 5: Zähleroptimierung und Speicheranmeldung",
      },
      {
        type: "paragraph",
        text: "Je nach Konfiguration kann ein Zweirichtungszähler oder ein Unterzähler für den Batteriespeicher erforderlich sein. Der Einbau eines Smart Meters (intelligentes Messsystem) wird ab einer Anlagenleistung von 7 kWp verpflichtend und muss mit dem Netzbetreiber abgestimmt werden.",
      },
      {
        type: "h2",
        text: "Häufige Fehler bei der PV-Anmeldung",
      },
      {
        type: "list",
        items: [
          "Anmeldung nach der Inbetriebnahme vergessen oder zu spät eingereicht",
          "Falsche oder unvollständige technische Angaben",
          "Fehlende Unterschriften oder Dokumente",
          "Falschen Netzbetreiber kontaktiert",
          "Speicher oder Wechselrichter nicht separat registriert",
        ],
      },
      {
        type: "callout",
        text: "Mit unserem Service übernehmen wir alle Anmeldeschritte für Sie – von der Voranmeldung bis zur MaStR-Registrierung. Schnell, korrekt und ohne Stress für Sie.",
      },
    ],
  },
  {
    slug: "wallbox-anmelden-14a-enwg",
    title: "Wallbox anmelden – Pflicht nach §14a EnWG?",
    metaTitle: "Wallbox anmelden 2025 – Pflicht nach §14a EnWG | EVU-HELD",
    metaDescription:
      "Seit 2024 gilt §14a EnWG auch für Wallboxen. Wir erklären, wer anmelden muss, was der Netzbetreiber verlangt und welche finanziellen Vorteile die Registrierung bringt.",
    publishedAt: "2025-02-15",
    readingTimeMinutes: 4,
    category: "Wallbox",
    excerpt:
      "Seit der Einführung von §14a EnWG gelten neue Regeln für Wallboxen. Wir erklären, welche Pflichten gelten, was angemeldet werden muss und welche Vorteile die Registrierung bringt.",
    content: [
      {
        type: "paragraph",
        text: "Mit dem Rollout von Elektrofahrzeugen steigt auch die Zahl der Wallboxen in deutschen Haushalten und Gewerbebetrieben rasant. Was viele Betreiber nicht wissen: Seit der Novellierung des §14a EnWG zum 1. Januar 2024 gelten klare Anmeldepflichten für Wallboxen.",
      },
      {
        type: "h2",
        text: "Was regelt §14a EnWG für Wallboxen?",
      },
      {
        type: "paragraph",
        text: "§14a EnWG verpflichtet Betreiber sogenannter steuerbarer Verbrauchseinrichtungen – dazu zählen Wallboxen mit einer Leistung von mehr als 3,7 kW – zur Anmeldung beim Netzbetreiber. Im Gegenzug kann der Netzbetreiber die Ladeleistung in Spitzenlastsituationen kurzzeitig auf mindestens 3,7 kW drosseln. Als Ausgleich erhalten Betreiber günstigere Netzentgelte.",
      },
      {
        type: "h2",
        text: "Welche Wallboxen müssen angemeldet werden?",
      },
      {
        type: "list",
        items: [
          "Alle neu installierten Wallboxen mit einer elektrischen Anschlussleistung über 3,7 kW",
          "Wallboxen in Privathaushalten, Mehrfamilienhäusern und gewerblichen Gebäuden",
          "Bestehende Anlagen, die nach dem 1. Januar 2024 erneuert oder erweitert wurden",
        ],
      },
      {
        type: "h2",
        text: "Was muss beim Netzbetreiber gemeldet werden?",
      },
      {
        type: "list",
        items: [
          "Typ und Hersteller der Wallbox",
          "Elektrische Nennleistung (kW)",
          "Installationsadresse und Zählernummer",
          "Nachweis der Steuerbarkeit (kompatibles Steuergerät oder Schnittstelle)",
          "Inbetriebnahmedatum und Installationsprotokoll",
        ],
      },
      {
        type: "h2",
        text: "Welche Vorteile bringt die Anmeldung?",
      },
      {
        type: "paragraph",
        text: "Die Anmeldung ist nicht nur Pflicht – sie bringt auch finanzielle Vorteile. Durch die Teilnahme am §14a-Modell profitieren Betreiber von reduzierten Netzentgelten. Diese Einsparungen können je nach Netzbetreiber und Stromanbieter mehrere hundert Euro im Jahr betragen.",
      },
      {
        type: "h2",
        text: "Was passiert ohne Anmeldung?",
      },
      {
        type: "list",
        items: [
          "Der Netzbetreiber kann den Anschluss der Wallbox ablehnen",
          "Kein Anspruch auf die vergünstigten Netzentgelte nach §14a EnWG",
          "Mögliche Bußgelder und rechtliche Konsequenzen",
          "Risiko von Netzproblemen bei hoher Last im lokalen Stromnetz",
        ],
      },
      {
        type: "h2",
        text: "Wie läuft die Anmeldung ab?",
      },
      {
        type: "paragraph",
        text: "Jeder Netzbetreiber hat eigene Anmeldeformulare und Anforderungen. In der Regel wird die Anmeldung online über das Kundenportal des Netzbetreibers durchgeführt. Die notwendigen Unterlagen müssen vollständig und korrekt eingereicht werden – Fehler führen zu Verzögerungen oder Ablehnungen.",
      },
      {
        type: "callout",
        text: "Wir melden Ihre Wallbox korrekt beim Netzbetreiber an und sorgen dafür, dass alle Anforderungen nach §14a EnWG erfüllt sind. Schnell und zuverlässig – deutschlandweit.",
      },
    ],
  },
  {
    slug: "anlage-nicht-angemeldet-folgen",
    title: "Was passiert, wenn ich meine Anlage nicht anmelde?",
    metaTitle: "Energieanlage nicht angemeldet – alle Folgen und Risiken | EVU-HELD",
    metaDescription:
      "Was passiert, wenn PV-Anlage, Wärmepumpe oder Wallbox nicht angemeldet sind? Wir erklären alle rechtlichen, finanziellen und technischen Konsequenzen – und wie Sie sie vermeiden.",
    publishedAt: "2025-01-20",
    readingTimeMinutes: 6,
    category: "Ratgeber",
    excerpt:
      "Die Anmeldung von Energieanlagen ist keine optionale Formalität. Wer PV-Anlage, Wärmepumpe oder Wallbox nicht registriert, riskiert ernsthafte rechtliche, finanzielle und technische Konsequenzen.",
    content: [
      {
        type: "paragraph",
        text: "Die Anmeldung von Energieanlagen – egal ob PV-Anlage, Wärmepumpe oder Wallbox – wird von vielen Betreibern als bürokratische Pflicht gesehen, die gerne aufgeschoben wird. Dabei sind die Konsequenzen einer fehlenden oder fehlerhaften Anmeldung erheblich und können teuer werden.",
      },
      {
        type: "h2",
        text: "Welche Anlagen müssen angemeldet werden?",
      },
      {
        type: "list",
        items: [
          "Photovoltaikanlagen (PV-Anlagen / Solaranlagen) ab 800 Watt",
          "Wärmepumpen als steuerbare Verbrauchseinrichtungen nach §14a EnWG",
          "Wallboxen mit einer Leistung über 3,7 kW",
          "Batteriespeicher, die mit dem öffentlichen Stromnetz verbunden sind",
          "Blockheizkraftwerke (BHKW)",
        ],
      },
      {
        type: "h2",
        text: "Konsequenz 1: Ablehnung durch den Netzbetreiber",
      },
      {
        type: "paragraph",
        text: "Der Netzbetreiber hat das Recht, eine nicht angemeldete Anlage vom Netz zu trennen. Das bedeutet: keine Einspeisung, keine Vergütung, kein Eigenverbrauch aus dem Netz. In der Praxis werden viele Anlagen zunächst stillschweigend betrieben – doch sobald der Netzbetreiber bei einer Prüfung oder einem Zählertausch auf eine nicht angemeldete Anlage stößt, kann er sofortigen Handlungsbedarf fordern.",
      },
      {
        type: "h2",
        text: "Konsequenz 2: Verlust der Einspeisevergütung",
      },
      {
        type: "paragraph",
        text: "Die gesetzlich garantierte Einspeisevergütung nach dem Erneuerbare-Energien-Gesetz (EEG) setzt eine ordnungsgemäße Registrierung im Marktstammdatenregister voraus. Wer die Frist von einem Monat nach Inbetriebnahme überschreitet, verliert für diesen Zeitraum den Anspruch auf Vergütung – rückwirkend. Bei einer Anlage mit 10 kWp kann das schnell mehrere hundert Euro bedeuten.",
      },
      {
        type: "h2",
        text: "Konsequenz 3: Rechtliche Folgen und Bußgelder",
      },
      {
        type: "paragraph",
        text: "Die Bundesnetzagentur kann bei Verstößen gegen die Registrierungspflicht im Marktstammdatenregister Bußgelder verhängen. Auch bei Verstößen gegen die Anmeldepflicht nach §14a EnWG drohen rechtliche Konsequenzen. Darüber hinaus kann der Netzbetreiber zivilrechtlich vorgehen, wenn durch eine nicht angemeldete Anlage Schäden am Netz entstehen.",
      },
      {
        type: "h2",
        text: "Konsequenz 4: Verlust von Förderungen",
      },
      {
        type: "paragraph",
        text: "Viele staatliche Förderprogramme – etwa der KfW-Kredit für Energieanlagen oder Zuschüsse von Landesbehörden – setzen eine ordnungsgemäße Anmeldung voraus. Wer die Anlage nicht korrekt registriert hat, riskiert die Rückforderung bereits ausgezahlter Förderungen. Auch steuerliche Vorteile können bei fehlender Anmeldung wegfallen.",
      },
      {
        type: "h2",
        text: "Konsequenz 5: Versicherungsschutz kann entfallen",
      },
      {
        type: "paragraph",
        text: "Viele Gebäude- und Haftpflichtversicherungen setzen voraus, dass technische Anlagen ordnungsgemäß angemeldet und zugelassen sind. Kommt es bei einer nicht angemeldeten Anlage zu einem Brand, einem Kurzschluss oder einem Schaden am Netz, kann die Versicherung die Leistung verweigern – mit potenziell existenzbedrohenden finanziellen Folgen.",
      },
      {
        type: "h2",
        text: "Konsequenz 6: Technische Risiken",
      },
      {
        type: "paragraph",
        text: "Eine nicht angemeldete Anlage wurde möglicherweise nicht auf Netzverträglichkeit geprüft. Das kann zu Überspannungen, Netzinstabilitäten oder Fehlern bei der Einspeisung führen. Im schlimmsten Fall beschädigt die Anlage das lokale Netz oder die Geräte anderer Verbraucher – und der Betreiber haftet.",
      },
      {
        type: "h2",
        text: "Ist eine nachträgliche Anmeldung möglich?",
      },
      {
        type: "paragraph",
        text: "Ja – eine nachträgliche Anmeldung ist in der Regel möglich. Allerdings können bereits entstandene Bußgelder oder der Verlust der Einspeisevergütung nicht mehr rückgängig gemacht werden. Je früher Sie die Anmeldung nachholen, desto geringer sind die finanziellen Auswirkungen. Einige Netzbetreiber zeigen sich kulant, wenn die Anmeldung unverzüglich nach Feststellung des Versäumnisses erfolgt.",
      },
      {
        type: "h2",
        text: "Fazit: Anmeldung ist Pflicht – nicht Kür",
      },
      {
        type: "paragraph",
        text: "Die Anmeldung von PV-Anlagen, Wärmepumpen und Wallboxen ist keine optionale Formalität, sondern eine gesetzliche Pflicht mit ernsthaften Konsequenzen bei Nichtbeachtung. Die gute Nachricht: Mit professioneller Unterstützung ist der Prozess deutlich einfacher und schneller als erwartet.",
      },
      {
        type: "callout",
        text: "Sie haben eine Anlage, die noch nicht angemeldet ist? Wir helfen Ihnen – auch bei der nachträglichen Anmeldung. Schnell, korrekt und deutschlandweit.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
