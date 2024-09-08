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
      <div className='absolute top-5 text-xs md:text-base'>CA: DeRFYRZpqWrajQQaJsnU6ckwMbGma28sHvmwyEV3pump</div>

      <div className='absolute bottom-3 right-3 flex items-center z-[50]'>
          <a href="https://x.com/DEATHsol_" className='transition ease-in-out duration-150'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-10 h-10 md:w-12 md:h-12 md:hover:scale-105 transition ease-in-out duration-150 cursor-pointer' fill="#FFFFFF" viewBox="0 0 50 50">
              <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
            </svg>
          </a>
          <a href="https://t.me/DEATHsolportal" className='transition ease-in-out duration-150'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-10 h-10 md:w-12 md:h-12 md:hover:scale-105 transition ease-in-out duration-150 cursor-pointer' fill="#FFFFFF" viewBox="0 0 50 50">
              <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
            </svg>
          </a>
      </div>

      {/* Input area for the user */}
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your death note..."
        rows="5"
        className="w-full max-w-lg bg-white border text-gray-900 p-4 mb-6 z-10"
      />

      {/* Render the note with the logo */}
      <div
        ref={noteRef}
        className="w-full max-w-lg bg-white border p-6 mb-6 flex flex-col items-center z-10"
      >
        <img src={logo} alt="Logo" className="h-16 mb-4" />
        <p className="whitespace-pre-wrap break-words text-lg text-center text-gray-900 w-full">{note}</p>
      </div>

      {/* Button to save the note as PNG */}
      <button
        onClick={handleSaveAsPng}
        className="bg-white md:hover:scale-[103%] text-black font-bold py-2 px-6 transition-all z-10"
      >
        SAVE
      </button>
    </div>
  );
}

export default App;