import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface GradientButtonProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    onPress: () => void;
}

export default function GradientButton({ 
    children,
    icon,
    onPress 
}: GradientButtonProps) {
    return (
        <TouchableOpacity 
          onPress={onPress} 
          style={styles.button}
        >
            <LinearGradient 
              colors={['#D8125A', '#720A3090']} 
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradient}>
                <View style={styles.contentRow}>
                  {children}
                  {icon && (
                      <View style={styles.iconSpacing}>
                          {icon}
                      </View>
                  )}
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}   

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        paddingTop: 12,

    },
    gradient: {
        borderRadius: 25,
        padding: 6,
        width: '55%',
        alignSelf: 'center',
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconSpacing: {
        marginLeft: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
});