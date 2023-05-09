import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Arcasa-Alimentando-la-Vida.jpg')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
});

export default SplashScreen;
