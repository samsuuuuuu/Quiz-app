import questions from './questions.json';

const Result = ({ score, resetQuiz }) => {
  const perScore = 2;
  const totalScore = questions.length * perScore;

  return (
    <div>
      <h2 className="text-xl font-bold">Quiz complete</h2>
      <p className="my-3">
        Your score: {score} / {totalScore}
      </p>
      <button
        type="button"
        onClick={resetQuiz}
        className="border px-4 py-2"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;