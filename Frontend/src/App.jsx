import { useState, useEffect } from 'react';
import Question from './components/Question';


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const fetchQuestion = () => {
    fetch('http://localhost:8000/questions')
      .then(response => response.json())
      .then(data => setCurrentQuestion(data))
      .catch(error => console.error('Error fetching questions:', error));
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const handleNext = () => {
    fetchQuestion();
  };

  return (
    <>
      {currentQuestion && (
        <Question
          questionDetails={currentQuestion}
          onNext={handleNext}
        />
      )}
    </>
  );
}

export default App;
