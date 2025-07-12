import React from 'react'

const QueryInput = () => {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your legal query..."
        className="w-full border rounded p-2 mb-4 resize-none"
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
  )
}

export default QueryInput
