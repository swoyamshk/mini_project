const fetchData = () => {
    return new Promise((resolve, reject) => {
      const data = [
        { id: 1, name: "Ram", age: 20 },
        { id: 2, name: "Sita", age: 22 },
      ];
      let result = Math.random() < 0.5; 
      if (result) {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      } else {
        reject("Failed to fetch data");
      }
    });
  };
  
  fetchData()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  