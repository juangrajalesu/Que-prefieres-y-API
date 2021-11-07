import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Title from "./QuestionItem/Elements/Title";
import * as QuestionService from "./QuestionService";

const QuestionForm = () => {
  const history = useHistory();
  const params = useParams();

  const [question, setQuestion] = useState({
    question: "",
    firstAnswer: "",
    secondAnswer: "",
    counterFirstAnswer: 0,
    counterSecondAnswer: 0,
  });

  const handleInputChange = (event) => {
    setQuestion({ ...question, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    params.id
      ? await QuestionService.updateQuestion(params.id, question)
      : await QuestionService.setQuestion(question);

    toast.dark(params.id ? "question updated" : "new question created", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
    });
    history.push("/");
  };

  useEffect(() => {
    if (params.id) {
      getQuestion(params.id);
    }
  }, [params]);

  const getQuestion = async (id) => {
    const res = await QuestionService.getQuestion(id);
    setQuestion(res.data);
  };

  return (
    <div>
      <div className="d-flex justify-content-center  ">
        <div className="card">
          <div className="card-body">
            <Title text="New Question" />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-group mb-3">
                  <span className="input-group-text col-4" id="basic-addon1">
                    Question
                  </span>
                  <input
                    type="text"
                    name="question"
                    className="form-control col-8"
                    onChange={handleInputChange}
                    value={question.question}
                    autoComplete="off"
                    autoFocus
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-3">
                  <span className="input-group-text col-4" id="basic-addon1">
                    Answer one
                  </span>
                  <input
                    type="text"
                    name="firstAnswer"
                    className="form-control col-8"
                    onChange={handleInputChange}
                    value={question.firstAnswer}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-3">
                  <span className="input-group-text col-4" id="basic-addon1">
                    Answer two
                  </span>
                  <input
                    type="text"
                    name="secondAnswer"
                    className="form-control col-8"
                    onChange={handleInputChange}
                    value={question.secondAnswer}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="d-grid gap-2">
                {params.id ? (
                  <button className="btn btn-primary">Update question</button>
                ) : (
                  <button className="btn btn-primary">Create question</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
