import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "./context/user";
import { ThemeProvider } from "../context/Theme";


function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      <UserProvider>
        <ThemeProvider>
          <Header />
          <Profile />
        </ThemeProvider>
      </UserProvider>
    </main>
  );
}

export default App;
