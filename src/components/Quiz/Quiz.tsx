import { MouseEvent, useEffect, useRef, useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';
import type { QuizQuestion } from '../../assets/data';

function Quiz() {
  const [index, setIndex] = useState<number>(0);
  const [questions, setQuestions] = useState<QuizQuestion>(data[index]);
  const [questionAns, setQuestionAns] = useState<boolean>(false);
  const [isImageLoaded, setImageLoaded] = useState<boolean>(false);
  const [locked, setLocked] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<boolean>(false);

  useEffect(() => {
    setImageLoaded(false);
    setQuestions(data[index]);
  }, [index]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const questionRefs = data.map(() => useRef<HTMLLIElement>(null));

  const checkAns = (e: MouseEvent, ans: number) => {
    const target = e.target as HTMLLIElement;
    if (locked) return;
    if (questions.ans === ans) {
      target.classList.add('correct');
      setQuestionAns(true);
      setScore(score + 1);
    } else {
      target.classList.add('wrong');
      setQuestionAns(false);
      questionRefs[questions.ans].current?.classList.add('correct');
    }
    setLocked(true);
  }

  const next = () => {
    if (locked) {
      if (index < data.length - 1) {
        setIndex(index + 1);
        questionRefs.forEach((option) => {
          option.current?.classList.remove('correct');
          option.current?.classList.remove('wrong');
          return null;
        });
        setLocked(false);
      } else {
        setResult(true);
      }
    }
  }

  return (
    <div className="prose max-w-none sm:prose-sm  md:prose-md lg:prose-lg xl:prose-xl">
      {result ? <h1>Resultat: {score} von {data.length} Punkten</h1> : <h1 className="text-3xl font-bold">{questions.question}</h1>}
      <hr />
      {result ?
        <>
          <p>Hier kommt zuszätzlicher Text oder ein Bild</p>
        </>
       :
        <>
          {!isImageLoaded && questions.image && (
            <div className="flex space-x-2 justify-center items-center bg-white">
              <span className="sr-only">Loading...</span>
              <div className="h-8 w-8 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-8 w-8 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-8 w-8 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
          )}
          {questions.image && (
            <figure>
              <img 
                className="rounded-lg shadow w-full"
                src={`./questions/${questions.image}`}
                onLoad={() => setImageLoaded(true)} 
                style={{display: isImageLoaded ? 'block' : 'none'}}
                alt="Foto zu Quizfrage" 
              />
              {questions.imageCaption && <caption className="caption-bottom text-sm text-gray-500 w-max pt-1">{questions.imageCaption}</caption>}
            </figure>
          )}
          <ul className="list-none !pl-0">
            {questions.options.map((option, index) => (
              <li
                className="bg-gray-200 !px-4 !py-2 !my-4 cursor-pointer hover:bg-gray-300 rounded-lg shadow-sm"
                key={index}
                ref={questionRefs[index]}
                onClick={(e) => {checkAns(e, index);}}
              >
                  {option}
              </li>
            ))}
          </ul>

          {locked && (
            <>
              <div className="border rounded-lg p-4 mb-10">
                {questionAns ? (
                  <h4 className="!mt-0 text-green-700">Bravo, das ist richtig!</h4>
                ) : (
                  <h4 className="!mt-0 text-red-700">Leider falsch...</h4>
                )}
                {questions.description && <p className="!mb-0">{questions.description}</p>}
              </div>
              <button
                type="button"
                className="rounded-md bg-blue-600 px-10 py-3 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={next}
              >
                Weiter
              </button>
            </>
          )}
          <p className="index">Frage {index+1} von {data.length}</p>
        </>
      }
    </div>
  )
}

export default Quiz;
