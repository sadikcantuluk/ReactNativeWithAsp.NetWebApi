import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./storage/store";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Category from "./src/screens/Category";
import { NavigationContainer } from "@react-navigation/native";
import Product from "./src/screens/Product";
import HomePage from "./src/screens/HomePage";
import Vehicle from "./src/screens/Vehicle";
import VehicleOverview from "./src/screens/VehicleOverview";

export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const Bottom = createBottomTabNavigator();

  function CategoryOverView() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Ürünler" component={Product} />
        <Drawer.Screen name="Kategoriler" component={Category} />
      </Drawer.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="CategoryOverView"
            component={CategoryOverView}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Vehicle" component={Vehicle} />
          <Stack.Screen name="VehicleOverview" component={VehicleOverview} />
        </Stack.Navigator>
      </NavigationContainer>
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
