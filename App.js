import CategoryScreen from "@/Screens/CategoryScreen";
import HomeScreen from "@/Screens/HomeScreen";
import ProductScreen from "@/Screens/ProductScreen";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { Store } from "./store";

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: { backgroundColor: 'white' }
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Cart Home'
      }
    },
    categories: HomeScreen,
    Category: CategoryScreen,
    Product: ProductScreen,
  }
})
const Navigation = createStaticNavigation(RootStack)

export default function Index() {
  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}

