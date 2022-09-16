/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';
import { saveAs } from 'file-saver';
import { useState } from 'react';

const mainDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const memeContainer = css`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const memeImg = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const imgStyle = css`
  width: 400px;
`;
const bodyContainer = css`
  display: flex;
  justify-content: center;
  padding: 10px;
  height: 350px;
`;
const textContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  width: 450px;
  background-color: #f2f2f2;
`;

const buttonStyle = css`
  width: 100%;
  background-color: #0066cc;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #64748b;
  }
`;

const btnContainer = css`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

const inputContainer = css`
  width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
const inputBlock = css`
  display: flex;
  flex-direction: column;
`;
const memeForm = css`
  display: flex;
  flex-direction: column;
`;
const header = css`
  display: flex;
`;
const headingStyle = css`
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');
  const [url, setUrl] = useState('https://api.memegen.link/images/success.png');
  const saveFile = () => {
    saveAs(
      `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`,
    );
  };

  return (
    <div css={mainDiv}>
      <div css={memeContainer}>
        <div css={header}>
          <div css={headingStyle}>
            <h1>Create Your Own Meme</h1>
          </div>
        </div>
        <div css={memeImg}>
          <img css={imgStyle} src={url} alt="Meme" data-test-id="meme-image" />
        </div>
      </div>
      <div css={bodyContainer}>
        <div css={textContainer}>
          <div css={inputBlock}>
            <label htmlFor="top-text">Top Text</label>
            <input
              id="top-text"
              css={inputContainer}
              value={topText}
              onChange={(event) => setTopText(event.target.value)}
            />

            <label htmlFor="bottom-text">Bottom Text</label>
            <input
              id="bottom-text"
              css={inputContainer}
              value={bottomText}
              onChange={(event) => setBottomText(event.target.value)}
            />

            <form
              css={memeForm}
              onSubmit={(event) => {
                event.preventDefault();
                setUrl(`
          https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`);
              }}
            >
              <label htmlFor="meme-template">Meme Template</label>
              <input
                id="meme-template"
                css={inputContainer}
                value={memeTemplate}
                onChange={(event) => setMemeTemplate(event.target.value)}
              />
            </form>
          </div>
          <div css={btnContainer}>
            <button
              css={buttonStyle}
              onClick={() => {
                setUrl(
                  `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`,
                );
              }}
            >
              Generate
            </button>
            <button css={buttonStyle} onClick={saveFile}>
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
