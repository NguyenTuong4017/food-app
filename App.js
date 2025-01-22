import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { useState } from "react";
import SearchBox from "./Component/SearchBox";
import FoodBox from "./Component/FoodBox";
export default function App() {
  const [mealList, setMealList] = useState([]);
  return (
    <>
      <SafeAreaView style={styles.safeAreaTop}>
        <StatusBar barStyle={"dark-content"} />
      </SafeAreaView>

      <View style={styles.container}>
        <SearchBox
          mealList={mealList}
          setMealList={setMealList}
          style={styles.searchBox}
        />

        <FoodBox mealList={mealList} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: "#AAB396",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  searchBox: {},
});
