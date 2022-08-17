import React from "react";
import style from "./Quiz.module.scss";

const questions = [
  {
    title: " Can web browsers read JSX directly? ",
    variants: ["Yes", "No, only with js", "No, only with Babel"],
    correct: 2,
  },
  {
    title: "What is JSX? ",
    variants: [
      "One of the Component",
      "JSX is a syntax extension of JavaScript",
      "higher order function",
    ],
    correct: 1,
  },
  {
    title: " What is the difference between the ES6 and ES5 standards?",
    variants: [
      "Components and Function, exports vs export, require vs import",
      "Functions, Components",
      "difference only in syntax",
    ],
    correct: 0,
  },
  {
    title: "Why is there a need for using keys in Lists?",
    variants: [
      "A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists",
      "For fast component loading",
      "It is not required",
    ],
    correct: 0,
  },
  {
    title: " How do you create a React app?",
    variants: [
      "Install NodeJS ",
      "Install library from GitHib",
      "Create new document",
    ],
    correct: 0,
  },
];

function Result({ correct }) {
  return (
    <div className={style.result}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="pic"
      />
      <h2>
        {correct} correct answers out of {questions.length}
      </h2>
      <a href="/">
        <button>try again</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const persentage = Math.round((step / questions.length) * 100);
  //   console.log(persentage);

  return (
    <>
      <div className={style.progress}>
        <div
          style={{ width: `${persentage}%` }}
          className={style.progress__inner}
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => (
          <li onClick={() => onClickVariant(index)} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

function Quiz() {
  // count correct answers
  const [correct, setCorrect] = React.useState(0);
  // step in progeress bar
  const [step, setStep] = React.useState(0);
  // questions render
  const question = questions[step];

  // click on variant
  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (question.correct === index) {
      console.log("ihskdch");
      setCorrect(correct + 1);
    }
  };

  return (
    <div className={style.wrapper}>
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
      {/* <Result /> */}
    </div>
  );
}

export default Quiz;
