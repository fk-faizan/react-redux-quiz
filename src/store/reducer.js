const INITIAL_STATE = [
    {
        questionText: "HTML stands for?",
        answerOptions: [
            { answerText: 'Hypertext Markup Language', isCorrect: true },
            { answerText: 'Markup Language', isCorrect: false },
            { answerText: 'Programing Language', isCorrect: false },
        ]
    },
    {
        questionText: "HTML is a?",
        answerOptions: [
            { answerText: 'Graphics Designing', isCorrect: false },
            { answerText: 'Programing Language', isCorrect: true },
        ]
    },
    {
        questionText: "React JS is UI Framework?",
        answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false }
        ]
    },
    {
        questionText: "What is the full form of RAM ?",
        answerOptions: [
            { answerText: 'Random Access Memory', isCorrect: true },
            { answerText: 'Randomely Access Memory', isCorrect: false },
            { answerText: 'Run Aceapt Memory', isCorrect: false },
            { answerText: 'None of these', isCorrect: false }
        ]
    },
    {
        questionText: "What is the full form of CPU?",
        answerOptions: [
            { answerText: 'Central Program Unit', isCorrect: false },
            { answerText: 'Central Processing Unit', isCorrect: true },
            { answerText: 'Central Preload Unit', isCorrect: false },
            { answerText: 'None of these', isCorrect: false }
        ]
    },
    {
        questionText: "What is the full form of E-mail",
        answerOptions: [
            { answerText: 'Electric Mail', isCorrect: false },
            { answerText: 'Engine Mail', isCorrect: false },
            { answerText: 'Electronic Mail', isCorrect: true },
            { answerText: 'None of these', isCorrect: false }
        ]
    }
]


const reducer = (state = INITIAL_STATE) => {
    return state
}

export default reducer;