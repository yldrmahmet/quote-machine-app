import React, { useState } from 'react'
import quotesFile from"../quotes.json"
import { FaSquareXTwitter } from "react-icons/fa6";


const App = () => {
  const [quote, setQuote] = useState("butona tıklayarak başlayın");
  const [author, setAuthor] = useState("ahmet yıldırım");
  const [animation, setAnimation] = useState(false);

  const getNewQuote = () => {
    setAnimation(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotesFile.length);
      const selectedQuote = quotesFile[randomIndex];
      setQuote(selectedQuote.quote);
      setAuthor(selectedQuote.author);
      setAnimation(false);
    }, 500); 
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-500">
      <div id="quote-box" className={`bg-white p-8 rounded-lg shadow-lg text-center max-w-md transition-opacity duration-500 ${
          animation ? "opacity-0" : "opacity-100"
        }`}>
        <p id='text' className="text-xl font-semibold mb-4">"{quote}"</p>
        <p id='author' className="text-gray-500 mb-6">{author}</p>
        <div className='flex gap-10 justify-center items-center'>
          <button 
            id="new-quote" 
            onClick={getNewQuote} 
            className="bg-black p-2 text-white px-2 rounded hover:bg-blue-600"
            >
            yeni söz getir
          </button>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}
            id="tweet-quote"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter className='text-5xl' />
          </a>
        </div>
      </div>
      <p className='text-xs'>prepared for freecodecamp</p>
    </div>
  )
}

export default App