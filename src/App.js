import React, { useState } from 'react';
import QueryInput from './components/QueryInput';
import AnswerCard from './components/AnswerCard';
import CitationPopup from './components/CitationPopup';
import { OpenRouter } from './util/openRouterApi';

function App() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState('');
  const [citations, setCitations] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setAnswer('');
    setCitations([]);

    try {
      const { content, citationList } = await OpenRouter(query);
      setAnswer(content);
      setCitations(citationList);
    } catch (error) {
      console.error("Error fetching OpenRouter response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h>Legal Assistant</h>
        <QueryInput
          query={query}
          setQuery={setQuery}
          onSubmit={handleSubmit}
          loading={loading}
        />
        {answer && (
          <AnswerCard
            answer={answer}
            citations={citations}
            onCitationClick={() => setPopupOpen(true)}
          />
        )}
      </div>
      {popupOpen && (
        <CitationPopup
          citation={citations[0]}
          onClose={() => setPopupOpen(false)}
        />
      )}
    </div>
  );
}

export default App;