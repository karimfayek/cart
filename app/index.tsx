import Categories from "@/Components/Home/Categories";
import Hero from "@/Components/Home/Hero";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
  <SafeAreaView style={styles.container}>

      <Hero />
      <Categories />
  </SafeAreaView>

   
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container : {
    flex: 1
  }
})
