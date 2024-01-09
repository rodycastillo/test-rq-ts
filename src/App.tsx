import "./App.css";
import { useRandom } from "./hooks/useRandom";

export const App = () => {

  const query = useRandom()
  

  return (
    <>
      {query.isFetching ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Numero aleatorio: {query.data}</p>
        </div>
      )}
      {
        !query.isFetching && query.isError && (<p>{`${query.error}`}</p>)
      }

      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {
          query.isFetching ? 'Loading...' : 'Get Data'
        }
      </button>
    </>
  );
};
