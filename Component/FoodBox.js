import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
} from "react-native";

import Feather from "@expo/vector-icons/Feather";

export default function FoodBox({ mealList }) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={mealList}
        keyExtractor={(meal) => meal.idMeal}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.mealBox}>
            <View style={styles.mealInfo}>
              <Image
                source={{ uri: item.strMealThumb }}
                style={styles.mealThumb}
              />
              <Text style={styles.mealTitle}>{item.strMeal}</Text>
              <View style={styles.priceAndAddButton}>
                <Text style={styles.price}>€10.99</Text>
                <Feather name="plus-circle" size={25} style={styles.addIcon} />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "##FFF8E8",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "red",
    width: "100%",
  },
  mealBox: {
    backgroundColor: "#F7EED3",
    margin: 5,
    height: 250,
    width: 170,
    padding: 10,
    borderColor: "#674636",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  mealInfo: {
    backgroundColor: "#AAB396",
    height: "100%",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#674636",
    padding: 5,
    alignItems: "center",
  },
  mealThumb: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    aspectRatio: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#674636",
  },
  mealTitle: {
    //backgroundColor: "green",
    width: "90%",
    height: 60,
    fontSize: 15,
    fontWeight: "600",
    marginTop: 10,
    color: "#674636",
  },
  priceAndAddButton: {
    //backgroundColor: "green",
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 19,
    fontWeight: "700",
    color: "#674636",
  },
  addIcon: {
    color: "#674636",
  },
  flatList: {
    //backgroundColor: "red",
    marginTop: 0.2,
  },
});
