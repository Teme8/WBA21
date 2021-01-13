import React from "react";
import { SafeAreaView} from "react-native";
import List from "./components/List";
import GlobalStyles from './utils/GlobalStyles';

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <List />
    </SafeAreaView>
  );
};


export default App;
