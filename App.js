import { useState } from "react";
import { PostsScreen, RegistrationScreen, LoginScreen } from "./src/screens";
import { useFonts } from "expo-font";

export default function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  const [switcher, setSwitcher] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

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
