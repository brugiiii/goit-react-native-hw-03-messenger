import { useState } from "react";
import { PostsScreen, RegistrationScreen, LoginScreen } from "./src/screens";

export default function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  const [switcher, setSwitcher] = useState(false);

  const toggle = () => {
    setSwitcher(!switcher);
  };

  return isLogIn ? (
    <PostsScreen />
  ) : switcher ? (
    <RegistrationScreen toggle={toggle} />
  ) : (
    <LoginScreen toggle={toggle} />
  );
}
