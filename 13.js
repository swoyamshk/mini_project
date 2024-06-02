const fetchData = async () => {
    try {
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
    } catch (error) {
      throw error;
    }
  };
  
  (async () => {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  })();
  