import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';


const YOUR_LATITUDE = 0;
const YOUR_LONGITUDE = 0;

const ClockInScreen = () => {
    const [clockedIn, setClockedIn] = useState(false);

    const handleClockIn = () => {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                const clockinLocation = { latitude: YOUR_LATITUDE, longitude: YOUR_LONGITUDE };
                const userLocation = { latitude, longitude };
                const distance = calcDistance(clockinLocation, userLocation);
                if (distance <= 5) {
                    setClockedIn(true);
                } else {
                    alert('You must be within 5 meters of the clock in location to clock in.');
                }
            },
            error => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };

    const calcDistance = (loc1, loc2) => {
        const R = 6371e3; // metres
        const φ1 = (loc1.latitude * Math.PI) / 180;
        const φ2 = (loc2.latitude * Math.PI) / 180;
        const Δφ = ((loc2.latitude - loc1.latitude) * Math.PI) / 180;
        const Δλ = ((loc2.longitude - loc1.longitude) * Math.PI) / 180;

        const a =
            Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const d = R * c;
        return d;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Clock In</Text>
            {clockedIn ? (
                <Text style={styles.message}>You are clocked in!</Text>
            ) : (
                <Button title="Clock In" onPress={handleClockIn} style={styles.button} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    message: {
        fontSize: 24,
        color: 'green',
        marginBottom: 16,
    },
    button: {
        marginTop: 16,
        backgroundColor: "#eb6909",
    },

});

export default ClockInScreen;
