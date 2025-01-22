import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import SearchBox from "./Component/SearchBox";
import FoodBox from "./Component/FoodBox";
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaTop}>
        <StatusBar barStyle={"dark-content"} />
      </SafeAreaView>

      <SafeAreaView style={styles.safeAreaBottom}>
        <SearchBox />
        <FoodBox />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: "#AAB396",
  },
  safeAreaBottom: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
