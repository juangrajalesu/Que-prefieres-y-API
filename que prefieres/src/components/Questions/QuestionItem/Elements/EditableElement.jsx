import React from "react";
import * as QuestionService from "../../QuestionService";
import { useHistory } from "react-router-dom";

const EditableElement = ({ question, loadQuestions }) => {
  const history = useHistory();
  const handleDelete = async (id) => {
    await QuestionService.deleteQuestion(id);
    loadQuestions();
  };

  return (
    <div className="col">
      <div className="row row-cols-2">
        <button
          onClick={() => {
            history.push(`/update/${question._id}`);
          }}
          className="btn btn-warning ">
          ✎
        </button>
        <button
          onClick={() => handleDelete(question._id)}
          className="btn btn-danger ">
          🗑
        </button>
      </div>
    </div>
  );
};

export default EditableElement;
