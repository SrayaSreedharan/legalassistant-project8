import React, { useState } from 'react';
import QueryInput from './components/QueryInput';
import AnswerCard from './components/AnswerCard';
import CitationPopup from './components/CitationPopup';
import { OpenRouter } from './util/openRouterApi';
import Footer from './components/Footer';
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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-2xl font-semibold">Legal Assistant</h1>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;