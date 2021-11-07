import React from "react";
import Title from "./Elements/Title";
import Answer from "./Elements/Answer";
import ShowVotes from "./Elements/ShowVotes";
import * as QuestionService from "../QuestionService";

const QuestionItem = ({ question, isVoted, setIsVoted }) => {
  const vote = async (isFirstAnswer) => {
    if (isFirstAnswer) {
      const response = await QuestionService.updateQuestion(question._id, {
        ...question,
        counterFirstAnswer: question.counterFirstAnswer + 1,
      });
      const { data } = response;
      question = data;
    } else {
      const response = await QuestionService.updateQuestion(question._id, {
        ...question,
        counterSecondAnswer: question.counterSecondAnswer + 1,
      });
      const { data } = response;
      question = data;
    }
  };

  return (
    <div className="card text-center mt-2 question" id='question'>
      <div className="card-body d-flex flex-column">
        <Title text={question.question} />
        {isVoted ? (
          <ShowVotes
            nfirstAnswer={question.counterFirstAnswer}
            nSecondAnswer={question.counterSecondAnswer}
          />
        ) : (
          <React.Fragment>
            <div className="col">
              <div className="flex-row row-cols-2">
                <Answer
                  color="green"
                  text={question.firstAnswer}
                  onClick={() => {
                    vote(true);
                    setIsVoted(true);
                  }}
                />
                <Answer
                  color="red"
                  text={question.secondAnswer}
                  onClick={() => {
                    vote(false);
                    setIsVoted(true);
                  }}
                />
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default QuestionItem;
