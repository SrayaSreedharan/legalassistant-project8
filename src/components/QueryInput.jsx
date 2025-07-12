import React from 'react';

function QueryInput({ query, setQuery, onSubmit, loading }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask a legal question..."
        className="w-full border border-gray-300 rounded p-3 mb-4 resize-none"
        rows={4}
      ></textarea>
      <button
        onClick={onSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
}

export default QueryInput;
