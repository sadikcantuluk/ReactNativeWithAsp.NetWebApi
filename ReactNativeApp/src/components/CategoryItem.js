import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, Paragraph, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function CategoryItem({ categories }) {
  
  const navigation = useNavigation();

  function handleVehicleCategory() {
    navigation.navigate("Vehicle", { selectedCategoryId: categories.id });
  }

  return (
    <Pressable onPress={handleVehicleCategory}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{categories.categoryName}</Title>
          <Paragraph>Açiklama : {categories.categoryDescription}</Paragraph>
        </Card.Content>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    backgroundColor: "lightblue",
    margin: 10,
  },
  card: {
    margin: 8,
    backgroundColor: "#EEEDEB",
  },
});
