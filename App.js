import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import SplashScreen from "./src/components/SplashScreen";
import ClockInScreen from "./src/screens/ClockInScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <ClockInScreen />;
};

export default App;
