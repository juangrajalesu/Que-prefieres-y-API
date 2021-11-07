import React from "react";
import EditableElement from "./Elements/EditableElement";
import Title from "./Elements/Title";
import Answer from "./Elements/Answer";

const EditableQuestion = ({ question, loadQuestions }) => {
  return (
    <div className="card text-center mt-2 mx-1">
      <div className="card-body d-flex flex-column">
        <Title text={question.question} />
        <div className="col">
          <div className="row row-cols-2">
            <Answer color="green" text={question.firstAnswer} />
            <Answer color="red" text={question.secondAnswer} />
          </div>
        </div>
        <EditableElement question={question} loadQuestions={loadQuestions} />
      </div>
    </div>
  );
};

export default EditableQuestion;
