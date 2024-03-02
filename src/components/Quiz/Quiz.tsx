import { MouseEvent, useEffect, useRef, useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';
import Preloader from '../Preloader/Preloader';
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
    setQuestions(data[index]);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
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
      setImageLoaded(false);
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

  const reset = () => {
    setIndex(0);
    setLocked(false);
    setScore(0);
    setQuestionAns(false);
    setResult(false);
  }

  return (
    <div className="prose max-w-none sm:prose-sm  md:prose-md lg:prose-lg xl:prose-xl">
      {result ? <h1 className="text-center">Resultat: {score} von {data.length} Punkten</h1> : <h1 className="text-3xl font-bold">{questions.question}</h1>}
      <hr />
      {result ?
        <div className="text-center">
          <p>Hier noch etwas text und folgend das Trophäenbild.</p>
          {!isImageLoaded && (
            <Preloader />
          )}
          <img
            className="rounded-lg shadow w-full"
            src="./result/hero_10.png"
            onLoad={() => setImageLoaded(true)} 
            style={{display: isImageLoaded ? 'block' : 'none'}}
            alt="Trophäenbild"
          />
          <p>
            <a
              type="button"
              className="rounded-md bg-blue-600 px-10 py-3 mt-4 text-white hover:text-white no-underline shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="./result/hero_10.png"
              download
            >
              Bild herunterladen
            </a>
          </p>

          {score < data.length && (
            <>
            <div className="line-container my-5">
              <div className="line"></div>
                <span className="text-gray-400">oder</span>
              <div className="line"></div>
            </div>
            <button
              type="button"
              className="rounded-md bg-blue-600 px-10 py-3 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              onClick={reset}
            >
              Nochmals versuchen
            </button>
            </>
          )}
        </div>
       :
        <>
          {!isImageLoaded && questions.image && (
            <Preloader />
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
              {questions.imageCaption && <figcaption className="text-gray-400">{questions.imageCaption}</figcaption>}
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
