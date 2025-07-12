// components/CitationPopup.jsx
import React from 'react';

function CitationPopup({ citation, onClose }) {
  if (!citation) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Citation Details</h2>
          <button onClick={onClose} className="text-red-600 font-bold">✖</button>
        </div>

        <div className="p-4 space-y-4 text-sm text-gray-800">
          <p><strong>📄 Case:</strong> Dani Vs Pritam (FAO No. 4353 of 2012)</p>
          <p><strong>Source:</strong> {citation.source}</p>
          <p><strong>Paragraph:</strong> 7</p>
          <blockquote className="bg-gray-100 border-l-4 border-gray-400 p-3 italic">
            “{citation.text}”
          </blockquote>

          <a
            href={citation.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 underline"
          >
            📥 View Full PDF
          </a>
        </div>
      </div>
    </div>
  );
}

export default CitationPopup;
