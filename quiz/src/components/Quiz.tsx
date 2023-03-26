import React, { useState, useEffect } from 'react';
import './Quiz.scss';
import question from './questions.json';
import QuestionsSlide from './QuestionsSlide';
import ProgressBar from './ProgressBar';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState<any>(undefined);
    let [counter, setCounter] = useState<number>(0);
    const questionObject: any[] = question.questions;

    useEffect(() => {
        setCurrentQuestion(questionObject);
    }, []);

    if (!currentQuestion) return null;

    return (
        <div className="quiz">
            <ProgressBar currentProgress={counter} totalQuestions={questionObject.length} />
            <QuestionsSlide questionObject={questionObject} counter={counter} setCounter={setCounter} />
        </div>
    );
};

export default Quiz;