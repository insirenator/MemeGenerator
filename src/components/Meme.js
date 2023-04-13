import React from 'react';
import memesdata from '../memesdata';

const Meme = () => {

    function getMemeImage() {
        const memesArray = memesdata.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length)
        // console.log(randomNum);
        const url = memesArray[randomNum].url;
        console.log(url);
    }

    return (
      <main>
        <div className='form'>
          <input 
            type="text" 
            className="form--input"
            placeholder='Top Text'
          />
          <input 
            type="text" 
            className="form--input"
            placeholder='Bottom Text'
          />
          <button className='form--button' onClick={getMemeImage}>
            Generate Meme
          </button>
        </div>
      </main>
    );
};

export default Meme;