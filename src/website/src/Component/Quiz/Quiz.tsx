import { MouseEvent, useRef, useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';
import type { QuizQuestion } from '../../assets/data';

function Quiz() {
  let [index, setIndex] = useState<number>(0);
  let [questions, setQuestions] = useState<QuizQuestion>(data[index]);
  let [locked, setLocked] = useState<boolean>(false);
  let [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<boolean>(false);

  let Option1 = useRef<HTMLLIElement>(null);
  let Option2 = useRef<HTMLLIElement>(null);
  let Option3 = useRef<HTMLLIElement>(null);
  let Option4 = useRef<HTMLLIElement>(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e: MouseEvent, ans: number) => {
    const target = e.target as HTMLLIElement;
    if (locked) return;
    if (questions.ans === ans) {
      target.classList.add('correct');
      setScore(score + 1);
    } else {
      target.classList.add('wrong');
      option_array[questions.ans-1].current?.classList.add('correct');
    }
    setLocked(true);
  }

  const next = () => {
    if (locked) {
      if (index < data.length - 1) {
        setIndex(index + 1);
        setQuestions(data[index]);
        option_array.forEach((option) => {
          option.current?.classList.remove('correct');
          option.current?.classList.remove('wrong');
        });
        setLocked(false);
      } else {
        setResult(true);
      }
    }
  }

  const reset = () => {
    setIndex(0);
    setQuestions(data[0]);
    setScore(0);
    setResult(false);
  }

  return (
    <div className="container">
      <h1>{ index+1 }. {questions.question}</h1>
      <hr />
      {result ? 
        <>
          <h1>Result: {score} of {data.length}</h1>
          <button onClick={reset}>Reset</button>
        </>
        :
        <>
          <h2>Question 1</h2>
          <ul>
            <li ref={Option1} onClick={(e) => {checkAns(e, 1);}}>{questions.option1}</li>
            <li ref={Option2} onClick={(e) => {checkAns(e, 2);}}>{questions.option2}</li>
            <li ref={Option3} onClick={(e) => {checkAns(e, 3);}}>{questions.option3}</li>
            <li ref={Option4} onClick={(e) => {checkAns(e, 4);}}>{questions.option4}</li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">{index+1} of {data.length} questions</div>
        </>
      }
    </div>
  )
}

export default Quiz;
