import React, { useState } from 'react';
import QueryInput from './components/QueryInput';
import AnswerCard from './components/AnswerCard';
import CitationPopup from './components/CitationPopup';
import { response } from './data/simulatedResponse';

function App() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setShowAnswer(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
         <h1 className="text-2xl font-bold mb-4">Legal Assistant</h1>
        <QueryInput
          query={query}
          setQuery={setQuery}
          onSubmit={handleSubmit}
          loading={loading}
        />
        {showAnswer && (
          <AnswerCard
            answer={response.answer}
            citations={response.citations}
            onCitationClick={() => setPopupOpen(true)}
          />
        )}
      </div>
      {popupOpen && (
        <CitationPopup
          citation={response.citations[0]}
          onClose={() => setPopupOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
