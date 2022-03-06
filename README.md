# Description

This repo is to present a Weight indicator to help visualize the weight status and values

## Demo

Open [Live Demo](https://majdmaihoub1.github.io/weight-indicator/) to view it in your browser.


## How to run :
1. Open the project in your favorite IDE
2. Open terminal 
3. Run npm start

## Tests:
1. The used library to run the tests is Jest a JavaScript Testing Framework with a focus on simplicity
2. The conducted test is a snapshot testing.
4. I tried to enter three different weights
one underweight
one normal
one overweight
test snapshots for each one of them 
3. Type npm run test to run the tests

## Project features:
- Users can set his pet's weight.
- The App will tell him his pet's status based on the value.
- The value is between 0 - 120 and can be changed based on the passed props of the components.
- No negative value is allowed
- There's an input validation if the value is in range.
- We can set new range status by passing them as props.
- We can set indicator width as a prop
- We can set the indicator value as a prop

 ## How can we make it better :
- We can set the pet's type and the indicator will change based on every pet using props.
- Using Sass instead of Css so we can make more dynaminc styling

**Thank You for your time
