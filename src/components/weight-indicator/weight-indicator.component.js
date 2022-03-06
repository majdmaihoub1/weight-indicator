import React from 'react';
import './weight-indicator.style.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const WeightIndicator = ({
  status = ['UnderWeight', 'Perfect', 'OverWeight'],
  steps = [0, 10, 20, 30],
  width = 300,
  value = Math.min(steps ?? []) ?? 0,
}) => {
  const filledAmount = (index) => {
    return Math.max(
      Math.min(
        (100 * (value - steps[index])) / (steps[index + 1] - steps[index]),
        100
      ),
      0
    );
  };

  // set margin left value so you can slide it right
  const amountComplete = (100 * value) / (steps[steps.length - 1] - steps[0]);

  return (
    <div className='indicator-container' style={width ? { width } : {}}>
      <div className='indicator-top-row'>
        <p
          className='indicator-text'
          style={{
            marginLeft: `${amountComplete}%`,
            transform: 'translateX(-50%)',
          }}
        >
          <ArrowDropDownIcon color='#0f526d' fontSize='large' />
        </p>
      </div>
      <div className='indicator-middle-row' style={width ? { width } : {}}>
        {[...steps].slice(1).map((step, i) => (
          <div key={step} className='bar-slice'>
            <div
              className='filled-slice'
              style={{ width: `${filledAmount(i)}%` }}
            ></div>
          </div>
        ))}
      </div>
      <div className='indicator-bottom-row'>
        {steps.map((step) => (
          <div key={step} className='indicator-label'>
            <p>{step}</p>
          </div>
        ))}
      </div>
      <div className='indicator-bottom-label'>
        {status.map((state) => (
          <span>{state}</span>
        ))}
      </div>
    </div>
  );
};

export default WeightIndicator;
