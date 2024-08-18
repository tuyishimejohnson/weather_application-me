/* Create a custom reusable hook That can be used to fetch data on API Which will help in cleaning up this component or any that looks like it. */


/* import React, { useState, useEffect } from 'react';

export function useFetch(url) {
    const [obtainedData, setObtainedData] = useState(null)
    
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setObtainedData(data))
        .catch(error => console.log("Error " + error))

        return () => {
            useFetch()
        }

    }, [])
    
}

useFetch('https://jsonplaceholder.typicode.com/todos') */











/* 
function Employees(){
  const [   ~|##~, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); */

  /* useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');
        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error); 
        setLoading(false);
      }
    };

    fetchData();
  }, []); */


/*     useFetch()

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error.....{error.message}</p>; 
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data && data.map((ele) => (
        <p>{ele.employee_name}</p>
      ))}
    </div>
  );
} */

export default Employees;