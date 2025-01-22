import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState, useEffect } from "react";

import FoodBox from "./FoodBox";

export default function SearchBox({ mealList, setMealList }) {
  const [searchedFood, setSearchedFood] = useState("");

  const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedFood}`;

  const handleFetch = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setMealList(data.meals);
  };

  const handleReturnPress = () => {
    handleFetch();
  };
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <View style={styles.container}>
      {/* avatar, username and notification button */}
      <View style={styles.userInfo}>
        {/* avatar and username */}
        <View style={styles.avatarAndName}>
          {/* avatar */}
          <Image
            source={require("../assets/avatar.png")}
            style={styles.avatar}
          />
          {/* username */}
          <View style={styles.userName}>
            <Text style={styles.nameText}>Hello Tuong</Text>
            <Text style={styles.desText}>Finding Your Meal!</Text>
          </View>
        </View>

        {/* notification button */}
        <View style={styles.iconContainer}>
          <Fontisto name="bell" style={styles.bell} size={20} />
        </View>
      </View>

      <StatusBar style="auto" />

      <View style={styles.searchBarAndSort}>
        <View style={styles.searchBarContainer}>
          <View style={styles.magnifyingIconBox}>
            <Entypo
              name="magnifying-glass"
              size={20}
              style={styles.magnifyingGlass}
            />
          </View>

          <TextInput
            style={styles.searchBar}
            placeholder="Search any food"
            onChangeText={(text) => setSearchedFood(text)}
            onSubmitEditing={handleReturnPress}
            returnKeyType="done"
          />
        </View>

        <View style={styles.sortButton}>
          <MaterialIcons name="sort" size={35} style={styles.sortIcon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: "25%",
    width: "100%",
    backgroundColor: "#AAB396",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  userInfo: {
    width: "100%",
    height: "30%",
    //backgroundColor: "green",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  avatar: {
    width: "20%",
    height: "20",
    aspectRatio: 1,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#674636",
  },
  userName: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    //backgroundColor: "blue",
    height: 40,
    marginRight: 35,
  },
  nameText: {
    color: "#674636",
    fontSize: 15,
    fontWeight: "600",
  },
  desText: {
    color: "#674636",
    fontSize: 12,
  },
  avatarAndName: {
    flexDirection: "row",
    backgroundColor: "#F7EED3",
    borderRadius: 20,
    marginRight: 50,
    width: 200,
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconContainer: {
    backgroundColor: "#F7EED3",
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bell: {
    color: "#674636",
  },
  searchBarAndSort: {
    //backgroundColor: "purple",
    width: "100%",
    height: 70,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-around",
  },

  searchBarContainer: {
    backgroundColor: "#fff",
    width: "75%",
    height: 50,
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 0,
    borderColor: "#674636",
    marginLeft: 13,

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchBar: {
    //borderWidth: 1,
    width: "85%",
    fontSize: 20,
    backgroundColor: "#fff",
  },
  magnifyingIconBox: {
    height: 20,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    //borderWidth: 1,
  },
  magnifyingGlass: {
    color: "#674636",
  },

  sortButton: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sortIcon: {
    color: "#674636",
  },
});
