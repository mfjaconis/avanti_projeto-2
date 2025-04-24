import React from "react";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import { Content, GlobalCss } from "./globaStyle";
import { useGetUserQuery } from "./services/api";
import { Provider } from "react-redux";
import { store } from "./store";
import UserProfile from "./components/UserProfile";

export type User = {
  name: string;
  avatar_url: string;
  bio: string;
};

function App() {
  const [username, setUsername] = React.useState<string>("");

  const { data, isLoading, error } = useGetUserQuery(username);

  return (
    <Provider store={store}>
      <GlobalCss />
      <Content className="container">
        <Header />
        <InputSearch onSearch={(user) => setUsername(user)} />
        
        {isLoading && <p>Carregando...</p>}
        {error && (
          <UserProfile error="Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente." name={""} avatar_url={""} bio={""} />
        )}
        {data && (
          <UserProfile name={data.name} avatar_url={data.avatar_url} bio={data.bio} />
        )}
      </Content>
    </Provider>
  );
}

export default App;
