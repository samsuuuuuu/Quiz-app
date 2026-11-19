import { useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import Questions from './components/Questions';
import Result from './components/Result';

function App() {
  const [score, setScore] = useState(0);
  const [isOver, setIsOver] = useState(false);

  const resetQuiz = () => {
    setScore(0);
    setIsOver(false);
  };

  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-md">
        <h1 className="mb-4 text-2xl font-bold">Quiz App</h1>

        {!isOver ? (
          <section>
            <Timer setIsOver={setIsOver} />
            <Questions setIsOver={setIsOver} setScore={setScore} />
          </section>
        ) : (
          <Result score={score} resetQuiz={resetQuiz} />
        )}
      </div>
    </main>
  );
}

export default App;
