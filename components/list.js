import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={()=>deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text:{
        padding: 16,
        textAlign: "center",
        borderRadius: 20,
        backgroundColor: "#E6E6FA",
        borderWidth: 1,
        marginTop: 24, 
        width: "60%", 
        marginLeft: "20%",
        borderColor: "#9B2D30" 
    },
});