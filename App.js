import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import SplashScreen from "./src/components/SplashScreen";

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

  return (
    <View>
      <Text>TimeTrax</Text>
    </View>
  );
};

export default App;
