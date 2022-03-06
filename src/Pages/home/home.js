import React, { useState } from 'react';
import WeightIndicator from '../../components/weight-indicator/weight-indicator.component';
import TextField from '@mui/material/TextField';
import './home.style.css';

const Home = () => {
  const [weight, setWeight] = useState(0);

  const handleChange = (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) {
      setWeight(0);
    } else if (val >= 0 && val < 120) {
      setWeight(val);
    }
  };

  const weightValue =
    weight < 30 ? 'under weight' : weight > 90 ? 'over weight' : 'Perfect';

  return (
    <div className='home'>
      <h1>Weight Indicator Component</h1>
      <div className='center'>
        <div className='weight-input'>
          <TextField
            value={isNaN(weight) ? 0 : weight}
            placeholder='Enter your pet`s weight'
            type='text'
            helperText={
              weight >= 120
                ? 'Weight is out Range'
                : weight <= 0
                ? 'Weight is out Range'
                : ' Weight in range'
            }
            onChange={handleChange}
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
