// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block > 42) {
      return block - 42;
    } else {
      return 42 - block;
    }
  }
  
  function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, end) {
    const blocks = Math.abs(end - start);
    return blocks * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
  
    return fare;
  }
  