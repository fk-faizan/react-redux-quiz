import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

const quiz = () => {

    const state = useSelector(state => state);
    // console.log(state)

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }
    }

    const nextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < state.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            alert("You have reached the end of the quiz!");
            setShowScore(true);
        }
    }

    return (
        <>
            <div className="wrapper d-flex justify-content-center align-items-center">
                {showScore ? (
                    <div className="container d-flex justify-content-center align-items-center">
                        <div className=" bg-light p-5 text-dark shadow rounded d-flex flex-column justify-content-center align-items-center">
                            <h1 className="text-info">Your Score</h1>
                            <p className="fs-2">{score} out of {state.length}</p>
                            <p className="fs-4">Percentage</p>
                        </div>
                    </div>
                ) : (
                    <div className="quiz container d-flex flex-column bg-light shadow-lg col-7">
                        <div className="row py-2 px-3 bg-light text-dark shadow rounded align-items-start">
                            <div className="quiz-header">
                                <div className="col d-flex justify-content-between">
                                    <h2 className="m-0">Welcome!</h2>
                                    <p className="m-0 fs-4 fw-bold font-monospace">60</p>
                                </div>
                            </div>
                        </div>
                        <div className="quiz-body row px-3 mt-3 mb-auto text-dark">
                            <div className="question-count">
                                <p className="text-end fs-5 m-0 fw-bold font-monospace">{currentQuestion + 1} of {state.length} Questions</p>
                            </div>
                            <div className="question mt-4">
                                <h2>{state[currentQuestion].questionText}</h2>
                            </div>
                            <div className="question-option">
                                <div className="d-grid mt-4 col-6 gap-3">
                                    {
                                        state[currentQuestion].answerOptions.map((e, i) => <button className="btn btn-outline-primary btn-lg rounded-pill" onClick={() => handleAnswerButtonClick(e.isCorrect)} key={i} type="button">{e.answerText}</button>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="quiz-footer row mt-4 py-2">
                            <div className="col d-flex justify-content-end">
                                <button className="btn btn-outline-primary px-4" onClick={nextQuestion}>Next</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default quiz
