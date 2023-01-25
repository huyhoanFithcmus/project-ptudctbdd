import React from "react";

import {Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Category_list(props) {
  const { category } = props
    // console.log(props)
    return (
        <TouchableOpacity
            activeOpacity={0.3}
            onPress={
                // showAlert
                props.onPress
            }
        >
            <View style={styles.container}>
                <Text style={props.title}>
                    {/* CategoryListItem */}
                    {category.name}
                </Text>
                <Image
                    source={'https://static.prod01.ue1.p.pcomm.net/legoedu/content/images/navigation-content/cb635265fefae762f685f8fca1382398-original-lego-education-tm_logo_with_padding.png'}
                    style={styles.CategoryImage}
                />
            </View>
        </TouchableOpacity>
    )
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
    CategoryImage: {
        width: 70,
        height: 70,
    },
});
