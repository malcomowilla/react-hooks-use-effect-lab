import React, { useState } from "react";
// import questions from "../data/quiz";
import { useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  // add useEffect code

useEffect(()=>{
const TimeoutId = setTimeout(()=>{
    setTimeRemaining(timeRemaining - 1)
  }, 1000)

  if (timeRemaining === 0) {
  setTimeRemaining(10)
  onAnswered(false)
}


  return function cleanUp() {
    clearTimeout(TimeoutId)
  }

  
}, [ timeRemaining, onAnswered])
  function handleAnswer(correct) {
    setTimeRemaining(10);
    onAnswered(correct);
  }


  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;




































// function Question({onAnswered, question}) {

//   function handleClickAnswer(isCorrect) {
//     onAnswered(isCorrect)
//   }

//   const {id, answers, prompt, correctIndex} = question

// return(
//   <>
//   <h1>question {id}</h1>
// <h1>{prompt}</h1>
//   {answers.map((answer, index)=>{
//   const isitCorrect=  index === correctIndex
//     return (
// <button key={answer} onClick={handleClickAnswer(isitCorrect)}>{answer}</button>
//     )
//   })}

//   </>
// )
// }



// export default Question











