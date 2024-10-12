import React from "react";
import { Text, View, StyleSheet, useColorScheme } from "react-native";

const AppPro = (): JSX.Element => {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <View  style={styles.container}>
            <Text style={isDarkMode ? styles.textWhite : styles.darkText}>App Pro!</Text>
        </View>
    );
};

export default AppPro;

const styles = StyleSheet.create({
    container: {
        color: "salmon",
        backgroundColor: "gray"
    },
    darkText: {color: "white"},
    textWhite: {color: "black"}
})