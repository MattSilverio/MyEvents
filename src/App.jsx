
import { Header } from "./Components/Header/Header"
import { Rts } from "./Routes/Routes"

import { useState } from "react";

function App() {

 /*  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    pokemonApi
      .get("pokemon")
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => console.warn(err));
  }, []); */

  return (
    <>
      <Header />

      
      <Rts />
    </>
  )
}

export default App
