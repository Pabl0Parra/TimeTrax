import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Biometrics from 'react-native-biometrics';

const FingerprintAuthScreen = () => {
    const [authStatus, setAuthStatus] = useState('');

    const handleBiometricAuth = async () => {
        try {
            const biometryType = await Biometrics.isSensorAvailable();
            if (!biometryType) {
                setAuthStatus('Biometric authentication is not supported on this device.');
                return;
            }

            const { success, error } = await Biometrics.simplePrompt({ promptMessage: 'Authenticate with biometrics' });

            if (success) {
                setAuthStatus('Biometric authentication success!');
            } else {
                setAuthStatus(error || 'Biometric authentication failed.');
            }
        } catch (error) {
            setAuthStatus(error.message);
        }
    };

    return (
        <View>
            <Text>{authStatus}</Text>
            <TouchableOpacity onPress={handleBiometricAuth}>
                <Text>Authenticate with biometrics</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FingerprintAuthScreen;
