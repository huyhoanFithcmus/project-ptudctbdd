import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

// import { useSelector, useDispatch } from "react-redux";

// import { removeFromCart } from "../redux/actions";

const Cart = () => {
    // const cart = useSelector((state) => state.cart);
    // const dispatch = useDispatch();
    
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Cart</Text>
        {/* {cart.map((item) => (
            <View style={styles.cartItem} key={item.id}>
            <Text style={styles.cartItemText}>{item.title}</Text>
            <Button
                title="Remove"
                onPress={() => dispatch(removeFromCart(item.id))}
            />
            </View>
        ))} */}
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "stretch",
        justifyContent: "center",
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    cartItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    cartItemText: {
        fontSize: 18,
    },
});

export default Cart;