import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Loading from "../components/Loading";
import { useGetVehicleQuery } from "../../apis/vehicleApi";

export default function VehicleOverview({ route }) {
  const { vehicleId } = route.params;

  const { data, isLoading, error } = useGetVehicleQuery(vehicleId);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.error("Error fetching categories:", error);
    return <Text>Error fetching categories</Text>;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.imageUrl }} />
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>Araç Detayları</Text>
        <Text style={styles.text}>Marka : {data.brand}</Text>
        <Text style={styles.text}>Model : {data.model}</Text>
        <Text style={styles.text}>Yıl : {data.modelYear}</Text>
        <Text style={styles.text}>Açıklama : {data.description}</Text>
        <Text style={styles.text}>Fiyat : {data.price.toLocaleString()} TL</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    marginBottom: 10,
    width: "100%",
    height: 200,
  },
  innerContainer: {
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  titleText: {
    color: "red",
    textAlign: "center",
    marginBottom: 8,
    fontSize: 23,
    fontWeight: "bold",
    marginVertical: 3,
  },
  text: {
    fontSize: 23,
    fontWeight: "bold",
    marginVertical: 3,
    borderBottomWidth: 1,
  },
});
