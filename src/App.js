import './scss/style.scss';
import Ball from './components/Ball';
import { useState } from 'react';

const textArr = [
  'YES',
  'NO',
  "Don't count on it",
  'Try it tomorrow',
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Outlook good',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Most likely',
  'Outlook not so good',
  'Very doubtful',
];

const App = () => {
  const [text, setText] = useState('Ask me about something!');
  const [isActive, setIsActive] = useState(false);

  const handleChange = () => {
    setIsActive(true);
    setText(textArr[Math.floor(Math.random() * 6) + 1]);
    setTimeout(() => {
      setText('Ask one more time');
      setIsActive(false);
    }, '5000');
  };

  return (
    <div className='wrapper'>
      <div className='tv'>
        <Ball
          text={text}
          style={{
            animation: isActive ? 'text 5s linear 1s infinite ' : 'none',
          }}
        />
      </div>
      <button onClick={handleChange} disabled={isActive ? true : false}>
        {isActive ? "..." : "Click"}
      </button>
    </div>
  );
};
export default App;
