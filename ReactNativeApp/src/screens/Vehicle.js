import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetVehiclesByCategoryIdQuery } from "../../apis/categoryApi";
import Loading from "../components/Loading";
import VehicleItem from "../components/VehicleItem";

export default function Vehicle({ route }) {
  const selectedCategoryId = route.params.selectedCategoryId;

  const { data, isLoading, error } =
    useGetVehiclesByCategoryIdQuery(selectedCategoryId);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.error("Error fetching categories:", error);
    return <Text>Error fetching categories</Text>;
  }

  const renderItems = ({ item }) => {
    return <VehicleItem vehicles={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.vehiclecs}
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
