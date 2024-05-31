import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Card, Paragraph, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function VehicleItem({ vehicles }) {
  const navigation = useNavigation();

  const handlePressVehicle = (id) => {
    navigation.navigate("VehicleOverview", { vehicleId: id });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handlePressVehicle(vehicles.id)}
    >
      <Image style={styles.image} source={{ uri: vehicles.imageUrl }} />
      <View style={styles.innerContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitleText}>
              {vehicles.brand} {vehicles.model}
            </Title>
            <View style={styles.paragraphContainer}>
              <Paragraph>Model : {vehicles.model}</Paragraph>
              <Paragraph>Fiyat : {vehicles.price.toLocaleString()} TL</Paragraph>
            </View>
          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 3,
    borderRadius: 4,
  },
  innerContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: "#7E8EF1",
  },
  cardTitleText: {
    fontSize: 21,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  paragraphContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
