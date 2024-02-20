export type QuizQuestion = {
  question: string;
  image?: string;
  imageCaption?: string;
  options: string[];
  description?: string;
  ans: number;
};

export const data: QuizQuestion[] = [
  {
    question: "Wie lange ist der Mühlebachkanal?",
    options: ["800 m", "2.7 km", "4.4 km", "13 km"],
    image: "muehlebach_hoehe_falken.jpg",
    imageCaption: "Mühlebach auf Höhe Restaraunt Falken in Siebnen.",
    description: "Der Mühlebachkanal wird in Siebnen beim Wehr (gegenüber reformierter Kirche) abgezweigt und fliesst auf rund 4.4 km Länge via Wangen nach Nuolen in den Zürichsee.",
    ans: 2,
  },
  {
    question: "Wie gross ist der Höhenunterschied vom Beginn des Baches in Siebnen bis nach Nuolen?",
    image: "ortsnamen_nuolenbach.png",
    imageCaption: "Verlauf des Nuolenbach von Siebnen bis nach Nuolen. Screenshot von ortsnamen.ch.",
    options: ["3.5 Meter", "7 Meter", "15 Meter", "39 Meter"],
    description: "Beim Wehr in Siebnen befindet sich der Bach auf 444 und in Nuolen auf 405 Meter über Meer. Das macht eine Höhendifferenz von 39 Metern.",
    ans: 3,
  },
  {
    question: "An wie vielen Stunden im Jahr fliesst Wasser im Mühlebach, welches von der Wägitaler Aa in Siebnen abgezweigt wird?",
    image: "wehr_siebnen.gif",
    imageCaption: "Wehr bei Aabrücke in Siebnen im Zeitraffer. Ein Jahr hat 8'766 Stunden.",
    options: ["24 Stunden", "2'000 Stunden", "5'000 Stunden", "8'766 Stunden (1 volles Jahr)"],
    description: "Der Mühlebachkanal kann nur mit Wasser beschickt werden, wenn im Kraftwerk Wägital Strom produziert wird und das Stauwehr unterhalb der Kantonsstrassenbrücke in Siebnen angehoben ist. Das ist in der Regel während 2'000 Stunden im Jahr der Fall, wovon 1'500 Stunden auf das Winterhalbjahr fallen. Das sind 83 Tage oder 23% des Jahres.",
    ans: 1,
  },
  {
    question: "Wann wurde der Mühlebach zum Kanal umgebaut?",
    image: "ew_wirth.png",
    imageCaption: "Die ehemalige Spinnerei Honegger in Siebnen, heute bekannt als Alte Fabrik. Bild von Valentin Kessler aus Zeitschrift \"Mitteilungen des historischen Vereins des Kantons Schwyz\".",
    options: ["1802", "1852", "1902", "1952"],
    description: "Im Jahr 1852 initiierte der Unternehmer Caspar Honegger die Kanalisierung des Mühlebachs. Zusätzlich liess er in jener Zeit die Baumwollspinnerei errichten, die heute im Volksmund \"Alte Fabrik\" genannt wird. In dieser Fabrik wurde anfangs Garn und später auch Stoffe hergestellt. Nach Anfangsschwierigkeiten machte man das ziemlich erfolgreich. In der Neuzeit jedoch immer weniger (Globalisierung, Billigprodukte aus Asien, etc.) und so wurde die Produktion 1979 eingestellt. Die Fabrik steht unter Denkmalschutz und beherbergt heute Kleingewerbe und Studios.",
    ans: 1,
  },
  {
    question: "Wie viele Kleinwasserkraftwerke gibt es heute am Mühlebach?",
    image: "ew_wirth_turbine_siebnen.jpg",
    imageCaption: "Turbine auf dem Gelände der Alten Fabrik. Damit wurde Strom für die Fabrik produziert. Aufnahme aus den 1970er Jahren. Foto von Heinz Baumann, ETH Bildarchiv.",
    options: ["Es gibt heute kein Kraftwerk mehr", "2 Kraftwerke", "4 Krafwerke"],
    description: "Das Wasser wird auf dem Weg von Siebnen bis Nuolen an vier Standorten in Kleinwasserkraftwerken turbiniert. Das Elektrizitätswerk der Gemeinde Wangen betreibt zwei Kraftwerke. Zum einen das Kraftwerk Seidenweberei in Wangen und zum anderen das Kraftwerk Bruggholz in Nuolen. Zudem betreibt die EW Wirth AG am Mühlebachkanal ebenfalls zwei Kraftwerke. Das Kraftwerk Kopf, welches südlich der SBB-Gleise liegt, sowie das Kraftwerk der ehemaligen Spinnerei auf dem obigen Bild.",
    ans: 2,
  },
  {
    question: "Wie viel Strom generiert die Turbine in Nuolen in einem Jahr?",
    image: "alte_turbine_nuolen.jpg",
    imageCaption: "Alte Turbine in Nuolen. Foto von der Webseite des EW Wangen.",
    options: ["Strom für 2 Schweizer Haushalte (8'000 kWh)", "Strom für 10 Schweizer Haushalte (40'000 kWh)", "Strom für 35 Schweizer Haushalte (140'000 kWh)", "Strom für 50 Schweizer Haushalte (200'000 kWh)"],
    description: "Die elektrische Leistung der Turbine in Nuolen beträgt 82 kW. Die Jahresproduktion beträgt rund 200'000 kWh. Das entspricht dem Jahresverbrauch von ca. 50 Haushalten.",
    ans: 3,
  },
  {
    question: "Wie hoch ist die Durchflussmenge des Mühlebachs pro Sekunde?",
    options: ["1'250 Liter Wasser pro Sekunde", "2'140 Liter Wasser pro Sekunde", "5'500 Liter Wasser pro Sekunde"],
    description: "Gemäss Vertrag mit dem Kraftwerk Wägital von 1925 hatte das EW Wirth einen Anspruch auf eine Dotierwassermenge von 2.14 m3/s. Mit dieser Menge wird der Kanal nach wie vor betrieben. Es fliesst somit 2140 l Wasser pro Sekunde durch den Kanal, was wiederum 14 gefüllten Badewannen entspricht.",
    ans: 1,
  },
  {
    question: "Wie stark schwankt der Wasserpegel im Wägitalersee?",
    image: "Wikipedia_Waegitalerstausee_Roland_Zumbuehl.jpg",
    imageCaption: "Wägitalersee mit Blick nach Innerthal. Foto Wikipedia, Roland Zumbuehl.",
    options: ["5 Meter", "20 Meter", "50 Meter", "100 Meter"],
    description: "Um Hangrutsche zu vermeiden, wird nur die Wassermenge zwischen den Staukoten 880 und 900 m ü. Meer bewirtschaftet. Der See kann also um 20 Meter ansteigen oder absinken. Der See hat eine Fläche von 4.18 Quadratkilometern, was 585 Fussballfeldern entspricht. Die maximale Tiefe beträgt 65 Meter. Er fasst 150 Mio. m3 Wasser. Das Füllen des Wägitalersees dauerte zwei Jahre. Aus diesem Grund wurde schon während des Baus der Staumauer mit dem Aufstauen begonnen.",
    ans: 1,
  },
  {
    question: "Wie hoch ist der sichtbare Teil der Staumauer des Wägitalersees?",
    image: "luca-LriqS4xCRi4-unsplash-1024x683.jpg",
    imageCaption: "Die Bauzeit von ca 2 Jahren (1922 - 1924) für Staumauer Schräh war für damalige Verhältnisse enorm kurz. Bild: unsplash",
    options: ["44 Meter", "66 Meter", "88 Meter", "111 Meter"],
    description: "Die Staumauer ist als Gewichtsstaumauer ausgeführt. Von den 111 m Gesamthöhe sind 66 m sichtbar über der Talsohle. Die Krone ist 156 m lang und oben 4.6 m breit. Unten ist die Mauer 75 m breit.",
    ans: 1,
  },
  {
    question: "Wann läuft die Konzession (Vertrag) für das Kraftwerk Wägital mit der Stadt Zürich und der Axpo aus?",
    image: "SIK_05-IKS-SZ-1609-045.jpg",
    imageCaption: "Kraftwerk Wägital Zentrale Siebnen. Eine Konzession ist in diesem Fall eine Erlaubnis oder Genehmigung für die Nutzung von Wasserressourcen. Bild: Sylvia Bärtschi, ETH Bildarchiv.",
    options: ["2025", "2040", "2050", "2060"],
    description: "1921 gründeten die Stadt Zürich und die Nordostschweizerischen Kraftwerke AG (heute Axpo) gemeinsam die AG Kraftwerk Wägital. Die laufende Konzession für das Kraftwerk, die zwischen dem Bezirk March, der Axpo und der Stadt Zürich besteht, wird im Jahr 2040 auslaufen.",
    ans: 1,
  },
];
