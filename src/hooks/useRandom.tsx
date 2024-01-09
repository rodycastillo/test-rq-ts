import { useQuery } from "@tanstack/react-query";

const getRandomNumber = async (): Promise<number> => {
  const data = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  const resp = await data.json();
  return resp;
};

export const useRandom = () => {

  const query = useQuery({
    queryKey: ['randomNumber'], 
    queryFn: getRandomNumber,
  });

  return query;
}