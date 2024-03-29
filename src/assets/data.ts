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
    image: "muehlebach_unterhalb_fabrik.jpg",
    imageCaption: "Mühlebach auf Höhe Restaraunt Falken mit Blick Richtung Alte Fabrik in Siebnen.",
    description: "Der Mühlebachkanal wird in Siebnen beim Wehr (gegenüber reformierter Kirche) abgezweigt und fliesst auf rund 4.4 km Länge via Wangen nach Nuolen in den Zürichsee.",
    ans: 2,
  },
  {
    question: "Wie gross ist der Höhenunterschied vom Beginn des Baches in Siebnen bis ans Ende im Zürichsee?",
    image: "ortsnamen_nuolenbach.png",
    imageCaption: "Verlauf des Mühlebach oder Nuolenbach genannt, von Siebnen bis nach Nuolen. Screenshot von ortsnamen.ch.",
    options: ["3.5 Meter", "7 Meter", "15 Meter", "39 Meter"],
    description: "Beim Wehr in Siebnen befindet sich der Bach auf 444 und in Nuolen auf 405 Meter über Meer. Das macht eine Höhendifferenz von 39 Metern.",
    ans: 3,
  },
  {
    question: "An wie vielen Stunden im Jahr fliesst Wasser im Mühlebach, welches von der Wägitaler Aa in Siebnen abgezweigt wird?",
    image: "wehr_siebnen.gif",
    imageCaption: "Wehr bei Aabrücke in Siebnen im Zeitraffer. Hier wird das Wasser für den Mühlebach abgezweigt.",
    options: ["24 Stunden", "2'000 Stunden", "5'000 Stunden", "8'766 Stunden (das ganze Jahr)"],
    description: "Der Mühlebachkanal kann nur mit Wasser beschickt werden, wenn im Kraftwerk Wägital Strom produziert wird und das Stauwehr unterhalb der Kantonsstrassenbrücke in Siebnen angehoben ist. Das ist in der Regel während 2'000 Stunden im Jahr der Fall, wovon 1'500 Stunden auf das Winterhalbjahr fallen. Das sind 83 Tage oder 23% des Jahres.",
    ans: 1,
  },
  {
    question: "Wann wurde der Mühlebach zum Kanal umgebaut?",
    image: "ew_wirth.png",
    imageCaption: "Die ehemalige Spinnerei Honegger in Siebnen, heute bekannt als Alte Fabrik. Davor der begradigte Mühlebachkanal. Bild: Valentin Kessler",
    options: ["1802", "1852", "1902", "1952"],
    description: "Im Jahr 1852 initiierte der Unternehmer Caspar Honegger die Kanalisierung des Mühlebachs. Zusätzlich liess er in jener Zeit die Baumwollspinnerei errichten, die heute im Volksmund \"Alte Fabrik\" genannt wird. In dieser Fabrik wurde anfangs Garn und später auch Stoffe  für Kleider, Vorhänge, Tischtücher etc. hergestellt. Nach Anfangsschwierigkeiten machte man das sehr erfolgreich. In der Neuzeit jedoch immer weniger (Globalisierung, Billigprodukte aus Asien) und so wurde die Produktion 1979 eingestellt. Die Fabrik steht unter Denkmalschutz und beherbergt heute Kleingewerbe und Studios.",
    ans: 1,
  },
  {
    question: "Wie viele Kleinwasserkraftwerke gibt es heute am Mühlebach?",
    image: "alte_turbine_nuolen.jpg",
    imageCaption: "Alte Turbine in Nuolen. Foto von der Webseite des EW Wangen.",
    options: ["Es gibt heute kein Kraftwerk mehr", "2 Kraftwerke", "4 Krafwerke"],
    description: "Das Wasser wird auf dem Weg von Siebnen bis Nuolen an vier Standorten in Kleinwasserkraftwerken turbiniert. Zwei befinden sich unterhalb der Bahnline, zwei oberhalb. Jene Turbine in Nuolen hat eine elektrische Leistung von 82 kW. Die Jahresproduktion von nur dieser einzelnen Turbine beträgt rund 200'000 kWh. Das entspricht dem Jahresverbrauch von ca. 50 Schweizer Haushalten.",
    ans: 2,
  },
  {
    question: "Wo fliesst das Wasser in einer Kurve am schnellsten?",
    image: "muehlebach_hoehe_falken.jpg",
    imageCaption: "Mühlebach auf Höhe Restaurant Falken in Siebnen.",
    options: ["Aussenkurve", "Innenkurve", "Überall gleich schnell"],
    description: "In der Aussenkurve fliesst das Wasser schneller. Da die äussere Seite der Kurve einen grösseren Radius hat als die innere Seite, muss das Wasser an der Aussenseite eine grössere Strecke zurücklegen. Um die Kontinuität aufrechtzuerhalten, erhöht das Wasser seine Geschwindigkeit an der Aussenkurve, während es an der Innekurve  langsamer fliesst. An Flüssen mit einem natürlichen Bachbett kann man diesen Effekt erkennen, an den Sedimenten (Geröll & Sand), welche sich an der Innenkurve ablagern. An der Aussenkurve hingegen wird das Ufer abgetragen.",
    ans: 0,
  },
  {
    question: "Wie hoch ist die Durchflussmenge des Mühlebachs pro Sekunde?",
    options: ["1'250 Liter Wasser pro Sekunde", "2'140 Liter Wasser pro Sekunde", "5'500 Liter Wasser pro Sekunde"],
    description: "Gemäss Vertrag mit dem Kraftwerk Wägital von 1925 hatte das EW Wirth einen Anspruch auf eine Dotierwassermenge von 2.14 m3/s. Mit dieser Menge wird der Kanal nach wie vor betrieben. Es fliesst somit 2'140 l Wasser pro Sekunde durch den Kanal, was wiederum 14 gefüllten Badewannen entspricht.",
    ans: 1,
  },
  {
    question: "Wie stark schwankt der Wasserpegel im Wägitalersee?",
    image: "Wikipedia_Waegitalerstausee_Roland_Zumbuehl.jpg",
    imageCaption: "Wägitalersee mit Gross Aubrig im Hintergrund. Foto Wikipedia, Roland Zumbuehl.",
    options: ["5 Meter", "20 Meter", "50 Meter", "100 Meter"],
    description: "Um Hangrutsche zu vermeiden, wird nur die Wassermenge zwischen den Staukoten 880 und 900 m ü. Meer bewirtschaftet. Der Wägitalersee kann also um 20 Meter ansteigen oder absinken. Der See hat eine Fläche von 4.18 Quadratkilometern, was 585 Fussballfeldern entspricht. Die maximale Tiefe beträgt 65 Meter. Er fasst 150 Mio. m3 Wasser, was wiederum 100 Milliarden 1.5l Flaschen entspricht. Das Füllen dauerte zwei Jahre. Aus diesem Grund wurde schon während des Baus der Staumauer mit dem Aufstauen begonnen.",
    ans: 1,
  },
  {
    question: "Wie hoch ist der sichtbare Teil der Staumauer des Wägitalersees?",
    image: "luca-LriqS4xCRi4-unsplash-1024x683.jpg",
    imageCaption: "Die Bauzeit von ca 2 Jahren (1922 - 1924) für die Staumauer Schräh war für damalige Verhältnisse enorm kurz. Bild: unsplash",
    options: ["44 Meter", "66 Meter", "88 Meter", "111 Meter"],
    description: "Die Staumauer ist als Gewichtsstaumauer ausgeführt. Von den 111 m Gesamthöhe sind 66 m sichtbar über der Talsohle. Die Krone ist 156 m lang und oben 4.6 m breit. Unten ist die Mauer 75 m dick.",
    ans: 1,
  },
  {
    question: "Wann läuft die Konzession (Vertrag) für das Kraftwerk Wägital mit der Stadt Zürich und der Axpo aus?",
    image: "SIK_05-IKS-SZ-1609-045.jpg",
    imageCaption: "Kraftwerk Wägital Zentrale Siebnen. Eine Konzession ist in diesem Fall eine Genehmigung für die Nutzung des Wassers vom Wägitalersee, welche der Bezirk March (und somit wir alle) an ein Unternehmen vergibt. Bild: Sylvia Bärtschi, ETH Bildarchiv.",
    options: ["2025", "2040", "2050", "2060"],
    description: "1921 gründeten die Stadt Zürich und die Nordostschweizerischen Kraftwerke AG (heute Axpo) gemeinsam die AG Kraftwerk Wägital. Die laufende Konzession für das Kraftwerk, die zwischen dem Bezirk March und der AG Kraftwerk Wägital besteht, wird im Jahre 2040 auslaufen.",
    ans: 1,
  },
];
