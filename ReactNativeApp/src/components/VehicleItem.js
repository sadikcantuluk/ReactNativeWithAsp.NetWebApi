import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, Paragraph, Title } from "react-native-paper";

export default function VehicleItem({ vehicles }) {
  console.log(vehicles);

  return (
    <Pressable>
      <Card style={styles.card}>
        <Card.Content>
          <Title>
            {vehicles.brand} {vehicles.model}
          </Title>
          <Paragraph>Açıklama : {vehicles.description}</Paragraph>
        </Card.Content>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    backgroundColor: "#7E8EF1",
  },
});
