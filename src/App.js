import React, { useState, useRef } from 'react';
import logo from './logo.svg'; // Import your logo
import * as htmlToImage from 'html-to-image';

function App() {
  const [note, setNote] = useState('');
  const noteRef = useRef();

  // Function to save the note as a PNG
  const handleSaveAsPng = () => {
    if (noteRef.current === null) {
      return;
    }

    htmlToImage.toPng(noteRef.current)
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'death_note.png';
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error('Could not generate image', error);
      });
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6">
      <div className='absolute top-5 text-xs md:text-base'>CA: updating...</div>

      {/* Input area for the user */}
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your death note..."
        rows="5"
        className="w-full max-w-lg bg-white border text-gray-900 p-4 mb-6"
      />

      {/* Render the note with the logo */}
      <div
        ref={noteRef}
        className="w-full max-w-lg bg-white border p-6 mb-6 flex flex-col items-center"
      >
        <img src={logo} alt="Logo" className="h-16 mb-4" />
        <p className="whitespace-pre-wrap break-words text-lg text-center text-gray-900 w-full">{note}</p>
      </div>

      {/* Button to save the note as PNG */}
      <button
        onClick={handleSaveAsPng}
        className="bg-white md:hover:scale-[103%] text-black font-bold py-2 px-6 transition-all"
      >
        SAVE
      </button>
    </div>
  );
}

export default App;