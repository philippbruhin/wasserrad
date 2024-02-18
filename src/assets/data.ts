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
    question: "Wie gross ist der Höhenunterschied vom Beginn des Baches in Siebnen bis nach Nuolen?",
    image: "ortsnamen_nuolenbach.png",
    options: ["7 Meter", "39 Meter", "3.5 Meter", "15 Meter"],
    description: "Beim Wehr in Siebnen befindet sich der Bach auf 444 und in Nuolen auf 405 Meter über Meer. Das macht eine Höhendifferenz von 39 Metern.",
    ans: 1,
  },
  {
    question: "An wie vielen Stunden im Jahr fliesst Wasser im Mühlebach, welches vom Stauwehr in Siebnen abgezweigt wird?",
    image: "wehr_siebnen.gif",
    options: ["24 Stunden", "365 Tage", "2'000 Stunden", "5'000 Stunden"],
    description: "Der Mühlebachkanal kann nur mit Wasser beschickt werden, wenn im Kraftwerk Wägital Strom produziert wird und das Stauwehr unterhalb der Kantonsstrassenbrücke in Siebnen angehoben ist. Das ist in der Regel während 2'000 Stunden im Jahr der Fall, wovon 1'500 Stunden auf das Winterhalbjahr fallen. Um die Zahl in Perspektive zu setzen: Das sind 83 Tage oder 23% des Jahres.",
    ans: 2,
  },
  {
    question: "Wann wurde der Mühlebach kanalisiert?",
    image: "ew_wirth.png",
    options: ["1802", "1852", "1902", "1952"],
    description: "Im Jahr 1852 initiierte Caspar Honegger die Kanalisierung des Mühlebachs. Zusätzlich liess er in jeiner Zeit die Baumwollspinnerei errichten, die heute im Volksmund \"Alte Fabrik\" genannt wird. Übrigens Honegger prägtre Siebnen und die Region massgeblich. Bereits 1835 hatte er in Siebnen ein Arbeiterinnenheim erbauen lassen und gründete zum Ansporn seiner Arbeiter eine Spar- und Unterstützungskasse, die als erste Fabrikkrankenkasse der Schweiz in die Geschichte einging. In gleicher Weise nahm er sich des Schul- und Bildungswesens in Siebnen an, wo er für die damaligen Verhältnisse sehr grosse Summen zur Errichtung der Sekundarschule spendete und ebensoviel an den Bau der reformierten Kirche, welche 1878 eingeweiht wurde.",
    ans: 1,
  },
  {
    question: "Wie viele Kleinwassertraftwerke gibt es am Mühlebach?",
    image: "ew_wirth_turbine_siebnen.jpg",
    options: ["4 Krafwerke", "2 Kraftwerke", "Es gibt kein Kraftwerk"],
    description: "Das Wasser wird auf dem Weg von Siebnen bis Nuolen an vier Standorten in Kleinwasserkraftwerken turbiniert. Das Elektrizitätswerk der Gemeinde Wangen betreibt für die Energiegewinnung am Mühlebachkanal zwei Kraftwerke, zum einen das Kraftwerk Seidenweberei in Wangen und zum anderen das Kraftwerk Bruggholz in Nuolen. Zudem betreibt die EW Wirth AG am Mühlebachkanal ebenfalls zwei Kraftwerke. Das Kraftwerk Kopf, welches südlich der SBB-Gleise liegt, sowie das Kraftwerk der ehemaligen Spinnerei in der alten Fabrik in Siebnen. Das obige Bild zeigt jene Turbine, welche sich bei der alten Fabrik befindet. Das Foto wurde in den 1980er Jahren aufgenommen.",
    ans: 0,
  },
  {
    question: "Wie viel Strom generiert die Turbine in Nuolen in einem Jahr?",
    image: "alte_turbine_nuolen.jpg",
    options: ["Etwa das, was 10 Schweizer Haushalte benötigen.", "11'000 kWh", "110'000 kWh", "200'000 kWh"],
    description: "Die elektrische Leistung der Turbine in Nuolen beträgt 82 kW. Die Jahresproduktion beträgt rund 200'000 kWh. Das entspricht dem Jahresverbrauch von ca. 45 Haushalten.",
    ans: 3,
  },
  {
    question: "Wie hoch ist die Durchflussmenge des Mühlebachs in Kubikmetern pro Sekunde?",
    options: ["5.5 Kubikmeter Wasser pro Sekunde", "1.25 Kubikmeter Wasser pro Sekunde", "2.14 Kubikmeter Wasser pro Sekunde"],
    description: "Gemäss Vertrag mit dem Kraftwerk Wägital von 1925 hatte das EW Wirth einen Anspruch auf eine Dotierwassermenge von 2.14 m3/s. Mit dieser Menge wird der Kanal nach wie vor betrieben.",
    ans: 2,
  },
  {
    question: "Welches ist das Wappen der Gemeinde Wangen?",
    image: "quiz_wappen_wangen.png",
    options: ["Variante A", "Variante B", "Variante C"],
    description: "Variante C. Blauer Grund, unten zwei grüne Hügel, auf diesen ein goldiger Abtstab stehend mit einem weissen Tüchlein oben. Wangen war über jahrhunderte mit Klöstern verbunden, deshalb der Abtstab. Die grünen Hügel symbolisieren den Buechberg und der blaue Grund den See.",
    ans: 2,
  },
  {
    question: "Wie viele Einwohner hatte Wangen im Jahre 2021?",
    image: "Wangen_SZ_Dorfkern_Sommer_2018.jpg",
    options: ["4'961", "5'356", "5'662"],
    description: "Im Jahre 1980 hat Wangen noch 2'847 Einwohner gehabt. Im Jahre 2021 sind es bereits 5'662 Einwohner gewesen.",
    ans: 1,
  },
];