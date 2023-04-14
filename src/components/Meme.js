import React from 'react';
import memesdata from '../memesdata';

const Meme = () => {

    const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/26jxvz.jpg",
    });

    // const [allMemeImages, setAllMemeImages] = React.useState(memesdata)

    function getMemeImage() {
        const memesArray = memesdata.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length)
        // console.log(randomNum);
        const url = memesArray[randomNum].url;
        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
        }));
    }

    function handleChange(event) {
      const {name, value} = event.target;
      setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value,
      }));
    }

    return (
      <main>
        <div className="form">
          <input
            type="text"
            className="form--input"
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form--input"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button className="form--button" onClick={getMemeImage}>
            Generate Meme
          </button>
        </div>
        <div className="meme">
          <img src={meme.randomImage} alt="Meme" className="meme-image" />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    );
};

export default Meme;