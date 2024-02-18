export type QuizQuestion = {
  question: string;
  image?: string;
  options: string[];
  description?: string;
  ans: number;
};

export const data: QuizQuestion[] = [
  {
    question: "Wie lange ist der Mühlebachkanal?",
    options: ["800 m", "2.7 km", "4.4 km", "13 km"],
    image: "muehlebach_hoehe_falken.jpg",
    description: "Der Mühlebachkanal wird in Siebnen beim Wehr des Kraftwerks Wägital (Aabrücke) abgezweigt und fliesst auf rund 4.4 km Länge via Wangen nach Nuolen in den Zürichsee.",
    ans: 2,
  },
  {
    question: "Welcher Höhenunterschied wird durch das Wasserrad überwunden von Siebnen bis nach Nuolen?",
    image: "ortsnamen_nuolenbach.png",
    options: ["7 Meter", "39 Meter", "3.5 Meter", "15 Meter"],
    description: "Beim Wehr in Siebnen befindet sich der Bach auf 444 und in Nuolen auf 405 Meter über Meer. Das macht eine Höhendifferenz von 39 Metern.",
    ans: 1,
  },
  {
    question: "An wie vielen Stunden im Jahr fliesst Wasser im Mühlebach, welches vom Stauwehr in Siebnen abgezweigt wird?",
    image: "wehr_siebnen.gif",
    options: ["24 Stunden", "365 Tage", "2'000 Stunden", "5'000 Stunden"],
    description: "Der Mühlebachkanal kann nur mit Wasser beschickt werden, wenn im Kraftwerk Wägital Strom produziert wird und das Stauwehr unterhalb der Kantonsstrassenbrücke in Siebnen angehoben ist. Das ist in der Regel während 2000 Stunden im Jahr der Fall, wovon 1500 Stunden auf das Winterhalbjahr fallen.",
    ans: 2,
  },
  {
    question: "Wie viele Kleinwassertraftwerke gibt es am Mühlebach?",
    image: "alte_turbine_nuolen.jpg",
    options: ["4 Krafwerke", "2 Kraftwerke"],
    description: "Das Wasser wird auf dem Weg von Siebnen bis Nuolen an vier Standorten in Kleinwasserkraft-werken turbiniert. Das Elektrizitätswerk der Gemeinde Wangen betreibt für die Energiegewinnung am Mühlebachkanal zwei Kraftwerke, zum einen das Kraftwerk Seidenweberei in Wangen und zum anderen das Kraftwerk Bruggholz in Nuolen (auf dem Bild oben die alte Turbine). Zudem betreibt die EW Wirth AG am Mühlebachkanal ebenfalls zwei Kraft-werke. Das Kraftwerk Kopf liegt südlich der SBB-Gleise und das Kraftwerk der ehemaligen Spinnerei an der Fabrikstrasse.",
    ans: 0,
  },
  {
    question: "Leistung der Trubine in Nuolen?",
    image: "alte_turbine_nuolen.jpg",
    options: ["kW", "kW"],
    description: "Etwas text",
    ans: 0,
  },
  {
    question: "Wann wurde der Mühlebach kanalisiert?",
    image: "ew_wirth.png",
    options: ["1802", "1852", "1902", "1952"],
    description: "1852 wurde der Mühlebach auf Initiative von Caspar Honegger kanalisiert. Ebenfalls wurde in jener Zeit die Baumwollspinnerei gebaut, welche heute im Volksmund \"Alte Fabrik\" bekannt ist.",
    ans: 0,
  },
  {
    question: "Wie viel Kubikmeter Wasser fliesst pro Sekunde im Mühlebach?",
    options: ["5.5 m3/s", "0.5 m3/s", "1.25 m3/s", "2.14 m3/s"],
    description: "Gemäss Vertrag mit dem Kraftwerk Wägital von 1925 hatte das EW Wirth einen Anspruch auf eine Dotierwassermenge von 2.14 m3/s. Mit dieser Menge wird der Kanal noch nach wie vor betrieben.",
    ans: 3,
  },
  {
    question: "Welches ist das Wappen der Gemeinde Wangen?",
    image: "quiz_wappen_wangen.png",
    options: ["Variante A", "Variante B", "Variante C"],
    description: "Variante C. Blauer Grund, unten zwei grüne Hügel, auf diesen ein goldiger Abtstab stehend mit einem weissen Tüchlein oben. Wangen war über jahrhunderte mit Klöstern verbunden, deshalb der Abtstab. Die grünen Hügel symbolisieren den Buechberg und der blaue Grund den See.",
    ans: 2,
  },
];