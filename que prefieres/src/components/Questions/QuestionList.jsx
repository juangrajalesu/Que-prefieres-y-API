import React, { useState, useEffect } from "react";
import * as QuestionService from "./QuestionService";
import EditableQuestion from "./QuestionItem/EditableQuestionItem";
import QuestionNotFound from "../NotFound/QuestionNotFound";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  const loadQuestions = async () => {
    const res = await QuestionService.getQuestions();
    setQuestions(res.data);
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <div className="row   row-cols-xl-4 justify-content-center">
      {questions.map((oneQuestion) => {
        return (
          <EditableQuestion
            question={oneQuestion}
            loadQuestions={loadQuestions}
            key={oneQuestion._id}
          />
        );
      })}
      {questions[0] ? null : <QuestionNotFound />}
    </div>
  );
};

export default QuestionList;
