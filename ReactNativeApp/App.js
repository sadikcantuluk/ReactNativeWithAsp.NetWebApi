import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./storage/store";
import TryScreen from "./src/screens/TryScreen";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TryScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
