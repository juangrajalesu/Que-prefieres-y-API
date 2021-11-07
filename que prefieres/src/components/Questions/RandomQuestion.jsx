import React, { useState, useEffect,useRef } from "react";
import * as QuestionService from "./QuestionService";
import QuestionItem from "./QuestionItem/QuestionItem";
import Skip from "./QuestionItem/Elements/Skip";
import QuestionNotFound from "../NotFound/QuestionNotFound";

let questions = [];

// function to remove an specific element from an array
const remove = (array, element) => {
  const index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
};

const RandomQuestion = () => {
  const [isVoted, setIsVoted] = useState(false);

  const [randomQuestion, setRandomQuestion] = useState({
    question: "",
    firstAnswer: "",
    secondAnswer: "",
    counterFirstAnswer: 0,
    counterSecondAnswer: 0,
  });

  const loadQuestion = useRef();

  loadQuestion.current = async () => {
    questions = await QuestionService.getQuestions();
    questions = questions.data;
    questions = questions.sort(() => {
      return Math.random() - 0.5;
    });
    if (randomQuestion.question === "") selectQuestion();
  };

  const selectQuestion = () => {
    const randomQ = questions[0];
    setRandomQuestion(randomQ);
  };

  useEffect(() => {
    if (questions.length === 0) loadQuestion.current();
    selectQuestion();
  }, []);

  const skipFunctionality = () => {
    if (isVoted) {
      remove(questions, randomQuestion);
      setIsVoted(false);
    } else {
      questions = [...questions.splice(1), questions[0]];
    }
    selectQuestion();
  };

  return (
    <div>
      {questions.length !== 0 ? (
        <React.Fragment>
          <QuestionItem
            question={randomQuestion}
            isVoted={isVoted}
            setIsVoted={setIsVoted}
          />
          <Skip onClick={skipFunctionality} />
        </React.Fragment>
      ) : (
        <QuestionNotFound />
      )}
    </div>
  );
};

export default RandomQuestion;
