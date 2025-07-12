import React from 'react';

function CitationPopup({ link, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Judgment PDF</h2>
          <button onClick={onClose} className="text-red-600 font-bold">Close</button>
        </div>
        <iframe
          src={link}
          title="Citation PDF"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );
}

export default CitationPopup;