import { MouseEvent, useEffect, useRef, useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';
import type { QuizQuestion } from '../../assets/data';

function Quiz() {
  const [index, setIndex] = useState<number>(0);
  const [questions, setQuestions] = useState<QuizQuestion>(data[index]);
  const [locked, setLocked] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<boolean>(false);

  useEffect(() => {
    setQuestions(data[index]);
  }, [index]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const questionRefs = data.map(() => useRef<HTMLLIElement>(null));

  const checkAns = (e: MouseEvent, ans: number) => {
    const target = e.target as HTMLLIElement;
    if (locked) return;
    if (questions.ans === ans) {
      target.classList.add('correct');
      setScore(score + 1);
    } else {
      target.classList.add('wrong');
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

  const reset = () => {
    setIndex(0);
    setLocked(false);
    setScore(0);
    setResult(false);
  }

  return (
    <div className="container">
      {result ? <h1>Result: {score} of {data.length}</h1> : <h1>{ index+1 }. {questions.question}</h1>}
      <hr />
      {result ? <button onClick={reset}>Reset</button>
       :
        <>
          {questions.image && <img src={`./questions/${questions.image}`} alt="Description of the image" />}
          <ul>
            {questions.options.map((option, index) => (
              <li
                key={index}
                ref={questionRefs[index]}
                onClick={(e) => {checkAns(e, index);}}
              >
                  {option}
              </li>
            ))}
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">{index+1} of {data.length} questions</div>
        </>
      }
    </div>
  )
}

export default Quiz;
