import React from "react"
import Header from "./components/Header"
import InputSearch from "./components/InputSearch"
import {GlobalCss} from "./globaStyle"
import { useGetUserQuery } from "./services/api"
import { Provider } from "react-redux"
import { store } from "./store"

export type User = {
	name: string,
	avatar_url: string,
	bio: string
}


function App() {
  const [username, setUsername] = React.useState<string>("");

  const { data, isLoading, error } = useGetUserQuery(username, { skip: !username });
  
  return (
    <>
    <Provider store={store}>
    <GlobalCss/>
    <Header/>
    <InputSearch onSearch={(user) => setUsername(user)}/>
    {isLoading && <p>Loading...</p>}
      {error && <p>Error: Não encontrado</p>}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <img src={data.avatar_url} alt="Avatar" />
          <p>{data.bio}</p>
        </div>
      )}
      </Provider>
    </>
  )
}

export default App
