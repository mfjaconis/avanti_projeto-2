import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import UserProfile from "./components/UserProfile";
import { Content, GlobalCss } from "./globaStyle";
import { useGetUserQuery } from "./services/api";
import { store } from "./store";

export type User = {
  name?: string;
  avatar_url?: string;
  bio?: string;
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
        {(data || error) && (
          <UserProfile
            name={data?.name}
            avatar_url={data?.avatar_url}
            bio={data?.bio}
            error={error ? "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente." : undefined}
          />
        )}
      </Content>
    </Provider>
  );
}

export default App;
