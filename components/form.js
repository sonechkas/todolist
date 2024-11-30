import React from 'react';
import { StyleSheet, TextInput, Text, Button, View} from 'react-native';
import { useState } from "react";

export default function Form({addHandler}) {
    const [text, setValue] = useState("")
    const onChange = (text) => {
        setValue(text);
    };
    return (
        <View>
            <TextInput
            style={styles.TextInput} 
            onChangeText={onChange}
            placeholder='Запишите задачу...' />

            <Button 
            color={"#9B2D30"}
            style={styles.btn}
            onPress={() => addHandler(text)}
            title="Добавить задачу" />
        </View>
    );
}

const styles = StyleSheet.create({
    TextInput:{
        color: "#000000",
        textAlign: "center",
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: "center",
        padding: '15px'
    },
    btn:{
        color: "#9B2D30",
    }


});