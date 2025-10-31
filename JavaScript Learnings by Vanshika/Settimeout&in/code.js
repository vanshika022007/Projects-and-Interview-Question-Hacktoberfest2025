function executeCallback(callback) {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        callback(i);
      }, 1000);
    }
  }
  
  console.log("Start");
  
  executeCallback((i) => {
    console.log("Callback executed with value:", i);
  });
  
  console.log("End");