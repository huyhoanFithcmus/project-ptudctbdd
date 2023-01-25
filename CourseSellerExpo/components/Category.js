import React from "react";

import {Image, View, Text, StyleSheet } from "react-native";

export default function Category(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Image style={styles.image} source={require("../assets/icon.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f8f4f4",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginVertical: 10,
        marginBottom: 10,
    },
    text: {
        color: "#4c4c4c",
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    image: {
        width: 70,
        height: 70,
    },
});
