export type QuizQuestion = {
  question: string;
  image?: string;
  options: string[];
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
    question: "Which continent has the highest number of countries?",
    options: ["Correct Answer", "Wrong Answer", "Wrong Answer", "Wrong Answer"],
    ans: 0,
  },
  {
    question: "Third Question?",
    options: ["Wrong Answer", "Correct Answer"],
    ans: 1,
  },
];