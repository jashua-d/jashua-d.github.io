// countdown

function countdown(number) {
    let timer = setInterval(() {
      console.log(number);
      number--;
  
      if (number === 0) {
        clearInterval(timer);
        console.log('DONE!');
      }
    }, 1000);
  };


// randomGame

function randomGame() {
    let counter = 0;
    const interval = setInterval(() {
      const randomNumber = Math.random();
      counter++;
  
      if (randomNumber > 0.75) {
        clearInterval(interval);
        console.log(`Number greater than 0.75 ${counter} tries.`);
      }
    }, 1000);
  }