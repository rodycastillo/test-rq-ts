import { useEffect, useState } from "react";
import "./App.css";

export const App = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [number, setNumber] = useState<number>(0);

  const getRandomNumber = async (): Promise<number> => {
    const data = await fetch(
      "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
    );
    const resp = await data.json();
    return resp;
  };

  useEffect(() => {
    getRandomNumber().then((resp) => setNumber(resp));
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [number])
  

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Vite + React</h1>
          <p>Numero aleatorio: {number}</p>
        </div>
      )}
    </>
  );
};
