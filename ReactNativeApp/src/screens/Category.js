import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGetAllCategoryQuery } from "../../apis/categoryApi";
import Loading from "../components/Loading";
import CategoryItem from "../components/CategoryItem";
import { useGetAllVehicleQuery } from "../../apis/vehicleApi";

export default function Category() {
  const { data, isLoading, error } = useGetAllCategoryQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.error("Error fetching categories:", error);
    return <Text>Error fetching categories</Text>;
  }

  const renderItems = ({ item }) => {
    return <CategoryItem categories={item} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItems}
    />
  );
}

const styles = StyleSheet.create({});
