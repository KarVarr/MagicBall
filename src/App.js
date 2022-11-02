import './scss/style.scss';
import Ball from './components/Ball';
import { useState } from 'react';

const textArr = [
  'YES',
  'NO',
  'Try it tomorrow',
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Outlook good',
  'Signs point to yes',
  'Ask again later',
  'Cannot predict now',
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
    setText(textArr[Math.floor(Math.random() * textArr.length) + 1]);
    setTimeout(() => {
      setText('Ask one more time');
      setIsActive(false);
    }, '5000');
  };
  console.log(text);

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
        {isActive ? '...' : 'Click'}
      </button>
    </div>
  );
};
export default App;
