<<<<<<< HEAD
import React, { useState } from 'react';
import Timer from './timer';
import Slider from './Slider';
import ShareButton from './ShareButton';
import RandomQuotes from './RandomQuotes';
import './timerpage.css';
import './RandomQuotes.css';

const TimerPage = () => {
  const [speed, setSpeed] = useState(1);

  return (
    <div className="timer-page">
      <div className="app-container">
        <Timer speed={speed} />
        <Slider speed={speed} setSpeed={setSpeed} />
        <ShareButton />
        <RandomQuotes />
      </div>
    </div>
  );
};

export default TimerPage;
=======
import React, { useState } from 'react';
import Timer from './timer';
import Slider from './Slider';
import ShareButton from './ShareButton';
import RandomQuotes from './RandomQuotes';
import './timerpage.css';
import './RandomQuotes.css';

const TimerPage = () => {
  const [speed, setSpeed] = useState(1);

  return (
    <div className="timer-page">
      <div className="app-container">
        <Timer speed={speed} />
        <Slider speed={speed} setSpeed={setSpeed} />
        <ShareButton />
        <RandomQuotes />
      </div>
    </div>
  );
};

export default TimerPage;
>>>>>>> a22ba8e105576088539db90eed3c976d19666723
