/* eslint-disable @typescript-eslint/no-unused-vars *//* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, useColorScheme, SafeAreaView, Button, Alert } from 'react-native';

const AppPro = (): JSX.Element => {
    const [state, setState] = useState('dark');
    const isDarkMode = useColorScheme() === state;
    return (
        <View style={isDarkMode ? styles.darkBackground : styles.whiteBackground}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>hello world</Text>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>hello world</Text>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>hello world</Text>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>hello world</Text>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>hello world</Text>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>hello world</Text>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>hello world</Text>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>hello world</Text>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>hello world</Text>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>hello world</Text>
            <Button title="Click Me" onPress={() => {
                if (state === 'dark') {
                    setState('light');
                } else {
                    setState('dark');
                }
                console.log(state);
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        color: 'white',
    },
    whiteText: {
        color: 'white',
    },
    darkText: {
        color: 'black',
    },
    whiteBackground: {
        backgroundColor: 'white',
    },
    darkBackground: {
        backgroundColor: 'black',
    },
});
export default AppPro;