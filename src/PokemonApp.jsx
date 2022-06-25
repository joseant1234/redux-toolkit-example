import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {

  const dispatch = useDispatch();

  // solo carga al iniciar el componente
  useEffect(() => {
    dispatch(getPokemons());
  }, [])

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <ul>
            <li></li>
        </ul>
    </>
  )
}
