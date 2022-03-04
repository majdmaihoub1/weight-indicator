import React, { useState } from 'react';
import WeightIndicator from '../../components/weight-indicator/weight-indicator.component';
import TextField from '@mui/material/TextField';
import './home.style.css';

const Home = () => {
  const [weight, setWeight] = useState('');

  const handleChange = (e) => {
    e.target.value <= 120 ? setWeight(e.target.value) : setWeight(120);
  };

  const weightValue =
    weight < 30 ? 'under weight' : weight > 90 ? 'over weight' : 'Perfect';

  return (
    <div className='home'>
      <h1>Weight Indicator Component</h1>
      <div className='center'>
        <div className='weight-input'>
          <TextField
            placeholder='Enter your pet`s weight'
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            type='number'
            helperText={
              weight < 120 ? 'Weight is in Range' : 'Weight is out of range'
            }
            onChange={handleChange}
            max='120'
            min='1'
          />
          <h3> Mr Nash's PMI is {weight}</h3>
          <h3> Mr Nash's is {weightValue}</h3>
        </div>
        <div className='indicator'>
          <WeightIndicator
            steps={[0, 30, 90, 120]}
            width={300}
            value={weight}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
