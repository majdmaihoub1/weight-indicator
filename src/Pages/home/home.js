import React, { useState } from 'react';
import WeightIndicator from '../../components/weight-indicator/weight-indicator.component';
import TextField from '@mui/material/TextField';
import './home.style.css';

const Home = () => {
  const [weight, setWeight] = useState();

  const handleChange = (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) {
      setWeight('');
    } else val = val >= 0 ? val : val > 120 ? 120 : 0;
    setWeight(val);
  };

  const weightValue =
    weight < 30 ? 'under weight' : weight > 90 ? 'over weight' : 'Perfect';

  return (
    <div className='home'>
      <h1>Weight Indicator Component</h1>
      <div className='center'>
        <div className='weight-input'>
          <TextField
            value={weight}
            placeholder='Enter your pet`s weight'
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            type='number'
            helperText={
              weight >= 120
                ? 'Weight is out Range'
                : weight <= 0
                ? 'Weight is out Range'
                : ' Weight in range'
            }
            onChange={handleChange}
            max='120'
            min='1'
          />
        </div>
        <div className='weight-info'>
          <h3> Mr Nash is {weightValue}</h3>
          <h2>Mr Nash's PMI is {weight ? weight : 'Not A valid Value'}</h2>
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
