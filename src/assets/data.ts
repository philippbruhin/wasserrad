export type QuizQuestion = {
  question: string;
  image?: string;
  options: string[];
  description?: string;
  ans: number;
};

export const data: QuizQuestion[] = [
  {
    question: "Which device is required for the Internet connection?",
    image: "Wangen_SZ_Dorfkern_Sommer_2018.jpg",
    options: ["Correct Answer", "Wrong Answer", "Wrong Answer"],
    ans: 0,
  },
  {
    question: "Welches ist das Wappen der Gemeinde Wangen?",
    image: "quiz_wappen_wangen.png",
    options: ["Variante A", "Variante B", "Variante C"],
    description: "Blauer Grund, unten zwei grüne Hügel, auf diesen ein goldiger Abtstab stehend mit einem weissen Tüchlein oben. Wangen war über jahrhunderte mit Klöstern verbunden, deshalb der Abtstab. Die grünen Hügel symbolisieren den Buechberg und der blaue Grund den See.",
    ans: 2,
  },
  {
    question: "Third Question?",
    options: ["Wrong Answer", "Correct Answer"],
    ans: 1,
  },
];