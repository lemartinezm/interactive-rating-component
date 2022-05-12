import { useState } from 'react';
import './App.css';
import ThankBox from './components/ThankBox';
import RatingBox from './components/RatingBox';

function App() {

  const [rating, setRating] = useState<number>(0);

  return (
    <div className='App'>
      {
        rating !== 0 ?
          <ThankBox rating={rating} />
          :
          <RatingBox setRating={setRating} />
      }
    </div>
  );
}

export default App;
