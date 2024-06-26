export const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response);
      const data = await response.json();
      
      return data;
    } catch (error: any) {
      throw new Error(`${error.message}`);
    }
  };