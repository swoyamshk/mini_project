const fetchData = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = [
          { id: 1, name: "Ram", age: 20 },
          { id: 2, name: "Sita", age: 22 },
          { id: 3, name: "Lakshman", age: 18 }
        ];
        resolve(data);
      }, 2000);
    });
  };
