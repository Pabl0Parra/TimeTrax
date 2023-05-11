import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../assets/Logo';
import * as Animatable from 'react-native-animatable';

const SplashScreen = () => {
    const [logoRef, setLogoRef] = useState(null);

    useEffect(() => {
        if (logoRef) {
            logoRef.animate({
                0: { scale: 0, translateY: 0 },
                1: { scale: 1, translateY: 0 },
            }, 1000);
        }
    }, [logoRef]);

    return (
        <View style={styles.container}>
            <Animatable.View
                ref={setLogoRef}
                style={styles.logoContainer}
            >
                <Logo style={styles.logo} />
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eb6909',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -100 }, { translateY: -100 }],
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
});

export default SplashScreen;
