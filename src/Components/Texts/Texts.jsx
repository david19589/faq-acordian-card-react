import "./Texts.css";
import { useState } from "react";
import ArrowDown from "/src/assets/icon-arrow-down.svg";
import ArrowUp from "/src/assets/icon-arrow-up.svg";

const Texts = () => {
  const [Clicked, setClicked] = useState(1);
  const Array = [
    {
      question: "How many team members can I invite?",
      answer: "as many as you want.",
      id: 0,
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
      id: 1,
    },
    {
      question: "How do I reset my password?",
      answer:
        "u can reset your password by clicking/pressing on (forgot password).",
      id: 2,
    },
    {
      question: "Can I cancel my subscription?",
      answer: "u can cancel your subscription any time.",
      id: 3,
    },
    {
      question: "Do you provide additional support?",
      answer: "yes, we do.",
      id: 4,
    },
  ];
  const clickHandler = (id) => {
    if (id === Clicked){
      setClicked(null)
    } else {
      setClicked(id)
    }
  }
  return (
    <div className="box">
      <h1 className="FAQ">FAQ</h1>
      {Array.map((item) => {
        return (
          <div key={item.id} onClick={() => clickHandler(item.id)}>
            <p className={`${Clicked === item.id ? "questionActive" : "question"}`}>{item.question}</p>
            {Clicked === item.id ? (
              <img className="arrowUp" src={ArrowUp}></img>
            ) : (
              <img className="arrowDown" src={ArrowDown}></img>
            )}
            {Clicked === item.id ? (
              <p className="answer">{item.answer}</p>
            ) : null}
            <u className="line"></u>
          </div>
        );
      })}
    </div>
  );
};

export default Texts;
