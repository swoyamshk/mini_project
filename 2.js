function createCounter() {
    let count = 0;
  
    function increment() {
      count += 1;
    }
  
    function getCount() {
      return count;
    }
  
    return { increment, getCount };
  }
  
  const counter = createCounter();
  counter.increment();
  console.log(counter.getCount()); 
  counter.increment();
  console.log(counter.getCount()); 
  