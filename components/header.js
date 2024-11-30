import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return(
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#9B2D30",
        minHeight: 50,
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
        alignItems: "center",
    }
});
