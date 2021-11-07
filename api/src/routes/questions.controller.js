import Questions from "./Questions.js";

const errorResponseMethod = (err, res, req) => {
  if (err) {
    return res.status(400).json({
      success: false,
      message: `The question with Id ${req.params.id} does not exists`,
    });
  }
};

export const getQuestions = async (req, res) => {
  try {
    const questions = await Questions.find();
    return res.json(questions);
  } catch (err) {
    return err;
  }
};

export const createQuestion = async (req, res) => {
  try {
    const question = new Questions(req.body);
    const savedQuestion = await question.save();
    return res.json(savedQuestion);
  } catch (err) {
    return err;
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    const deletedQuestion = await Questions.findByIdAndDelete(
      req.params.id,
      (err) => errorResponseMethod(err, res, req)
    );
    return res.json(deletedQuestion);
  } catch (err) {
    return err;
  }
};

export const updateQuestion = async (req, res) => {
  try {
    const updatedQuestion = await Questions.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err) => errorResponseMethod(err, res, req)
    );
    return res.json(updatedQuestion);
  } catch (err) {
    return err;
  }
};

export const getOneQuestion = async (req, res) => {
  try {
    const question = await Questions.findById(req.params.id, (err) =>
      errorResponseMethod(err, res, req)
    );
    if (question) return res.json(question);
  } catch (err) {
    return err;
  }
};
