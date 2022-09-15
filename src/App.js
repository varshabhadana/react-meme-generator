/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';
import { saveAs } from 'file-saver';
import { useState } from 'react';

const memeContainer = css`
  position: relative;
  display: flex;
  justify-content: center;
`;
const textContainer = css`
  display: flex;
  justify-content: center;
  padding: 15px;
  gap: 10px;
`;
function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('Meme Template');
  const [url, setUrl] = useState('https://api.memegen.link/images/success.png');
  const saveFile = () => {
    saveAs(
      `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`,
    );
  };

  return (
    <div>
      <div css={memeContainer}>
        <img src={url} alt="Meme" data-test-id="meme-image" />
      </div>
      <div css={textContainer}>
        <label>
          Top Text
          <input
            value={topText}
            onChange={(event) => setTopText(event.target.value)}
          />
        </label>
        <label>
          Bottom Text
          <input
            value={bottomText}
            onChange={(event) => setBottomText(event.target.value)}
          />
        </label>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setUrl(`
          https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`);
          }}
        >
          <label>
            Meme Template
            <input
              value={memeTemplate}
              onChange={(event) => setMemeTemplate(event.target.value)}
            />
          </label>
        </form>
      </div>
      <button
        onClick={() => {
          setUrl(`
          https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`);
        }}
      >
        Generate
      </button>
      {/*  <label>
        Meme template
        <select value={memeTemplate}>
          <option value={memeTemplate}>Buzz</option>
          <option value={memeTemplate}>doge</option>
        </select>
      </label> */}
      <div>
        <button onClick={saveFile}>Download</button>
      </div>
    </div>
  );
}

export default App;
