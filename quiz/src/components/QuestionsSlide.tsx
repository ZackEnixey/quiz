import { FC, useState } from "react";
import Celebrate from "./Celebrate";
import "./Quiz.scss";

interface IQuestionsSlide {
  questionObject: any;
  counter: number;
  setCounter(counter: number): void;
}

const QuestionsSlide: FC<IQuestionsSlide> = (props) => {
  const { questionObject, counter, setCounter } = props;
  let [animation, setAnimation] = useState<string | undefined>(undefined);
  let [toggleAnswer, setToggleAnswer] = useState<boolean>(false);
  const initialCurrentQuestion =
    questionObject?.length > 0 ? questionObject[counter] : undefined;
  const [currentQuestion, setCurrentQuestion] = useState<any>(
    initialCurrentQuestion
  );

  const onAnswerSelect = (selectedIndex: number) => {
    console.log("number: ", selectedIndex);
    if (selectedIndex === currentQuestion.correctAnswer) {
      setAnimation("RIGHT");
      setTimeout(() => {
        goToNextQuestion(true);
      }, 2000);
    } else {
      setAnimation("WRONG");
    }
  };

  const renderQuestion = () => {
    if (currentQuestion.type === "RADIO_QUESTION") {
      return (
        <div className="quiz-box">
          <h2 className="question">{currentQuestion.question}</h2>
          <div className="answers">
            {currentQuestion.answer.map((answer: string, index: number) => (
              <div key={index} onClick={() => onAnswerSelect(index)}>
                {" "}
                {answer}{" "}
              </div>
            ))}
          </div>
        </div>
      );
    } else if (currentQuestion.type === "DESCRIPTION_QUESTION") {
      return (
        <div className="quiz-box">
          <h2 className="question">{currentQuestion.question}</h2>
          <div className="answer">
            <div
              className={`blurred ${toggleAnswer ? "" : "blurred_text"} `}
              onClick={showTheAnswer}
            >
              {currentQuestion.answer}
            </div>
          </div>
        </div>
      );
    }
  };

  const showTheAnswer = () => {
    setToggleAnswer(!toggleAnswer);
  };

  const goToNextQuestion = (goToNext: boolean) => {
    let updatedCounterValue = counter;

    if (goToNext) {
      if (counter < questionObject.length - 1) {
        updatedCounterValue++;
      }
      console.log(counter, questionObject.length);
      if (counter === questionObject.length - 1) {
        setCounter(counter + 1);
        setAnimation("FINISH");
        return;
      }
    } else {
      if (counter > 0) updatedCounterValue--;
    }

    setToggleAnswer(false);
    setCounter(updatedCounterValue);
    setCurrentQuestion(questionObject[updatedCounterValue]);
  };

  if (!currentQuestion) return null;
  console.log("currentQuestion: ", currentQuestion);

  return (
    <div>
      <Celebrate animation={animation} setAnimation={setAnimation} />

      <div className="buttons-container">
        {counter > 0 && (
          <button
            className="quiz-button quiz-button-back"
            onClick={() => goToNextQuestion(false)}
          >
            Back
          </button>
        )}
        {counter < questionObject.length && (
          <button
            className="quiz-button quiz-button-next"
            onClick={() => goToNextQuestion(true)}
          >
            Next
          </button>
        )}
      </div>

      {renderQuestion()}
    </div>
  );
};

export default QuestionsSlide;
