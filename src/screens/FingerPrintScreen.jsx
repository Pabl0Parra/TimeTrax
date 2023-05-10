import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import FingerprintAuthScreen from './FingerprintAuthScreen';

const ClockInScreen = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [location, setLocation] = useState(null);

    const handleClockIn = () => {
        Geolocation.getCurrentPosition(
            position => {
                setLocation(position);
                if (
                    position.coords.accuracy <= 5 &&
                    position.coords.latitude === CLOCK_IN_LATITUDE &&
                    position.coords.longitude === CLOCK_IN_LONGITUDE
                ) {
                    setAuthenticated(true);
                }
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };

    const handleAuthenticate = () => {
        // TODO: Save clock in time and navigate to clock out screen
    };

    if (!authenticated && location) {
        return <Text>Not in range to clock in</Text>;
    }

    if (!authenticated) {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={handleClockIn}>
                    <Text style={styles.buttonText}>Clock In</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return <FingerprintAuthScreen onAuthenticate={handleAuthenticate} />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 20,
        borderRadius: 10
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20
    }
});

export default ClockInScreen;
