import { useState } from 'react'
import questions from './questions.json'

const Questions = ({ setIsOver, setScore }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const perScore=2
        const handleOptionClick = (selectedOption) => {
        if (selectedOption === questions[currentIndex].answer) {
            setScore(prev => prev + perScore);
        }

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1)
        } else {
            setIsOver(true);
        }
    }

    return (
        <div className="mt-4">
            <p className="text-sm">Question {currentIndex + 1} of {questions.length}</p>
            <h2 className="mb-3 mt-2 text-lg font-semibold">
                {questions[currentIndex].question}
            </h2>

            <div className="flex flex-col gap-2">
                {questions[currentIndex].options.map((option) => (
                    <button
                        type="button"
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className="border px-3 py-2 text-left"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Questions