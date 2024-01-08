// import { useEffect, useState } from "react";
import "./App.css";
import { useQuery } from "@tanstack/react-query";

export const App = () => {
  // const [error, setError] = useState<string>();


  const getRandomNumber = async (): Promise<number> => {
    const data = await fetch(
      "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
    );
    const resp = await data.json();
    return resp;
  };


  const query = useQuery({
    queryKey: ['randomNumber'], 
    queryFn: getRandomNumber,
  });

  console.log(query);
  

  return (
    <>
      {query.isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Vite + React</h1>
          <p>Numero aleatorio: {query.data}</p>
        </div>
      )}
    </>
  );
};
