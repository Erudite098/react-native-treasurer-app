import { LinearGradient } from "expo-linear-gradient";
import { FilePlus2, Plus, X } from "lucide-react-native";
import { useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface GradientFabProps {
    icon?: React.ReactNode;
    onPress: () => void;
}

interface SpeedDialButtonProps {
    label: string;
    icon: React.ReactNode;
    onPress: () => void;
}

function SpeedDialButton({ label, icon, onPress }: SpeedDialButtonProps) {
    return (
        <View style={styles.speedDialItem}>
            <Text style={styles.speedDialLabel}>{label}</Text>
            <TouchableOpacity style={styles.speedDialButton} onPress={onPress}>
                {icon}
            </TouchableOpacity>
        </View>
    );
}

export default function GradientFab({ 
    icon,
    onPress 
}: GradientFabProps) {
    const [isOpen, setIsOpen] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;

    const toggleSpeedDial = () => {
        const toValue = isOpen ? 0 : 1;
        setIsOpen(!isOpen);
        
        Animated.spring(animation, {
            toValue,
            useNativeDriver: false,
        }).start();
    };

    return (
        <View style={styles.speedDialContainer}>
            {/* Speed dial buttons */}
            <Animated.View style={[
                styles.speedDialButtons,
                {
                    opacity: animation,
                    transform: [{
                        translateY: animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [20, 0],
                        })
                    }]
                }
            ]}>
                <SpeedDialButton
                    label="Import from file"
                    icon={<FilePlus2 size={20} color="black" />}
                    onPress={() => {
                        console.log('Import from file pressed');
                        setIsOpen(false);
                    }}
                />
                <SpeedDialButton
                    label="Import manually"
                    icon={<Plus size={20} color="black" />}
                    onPress={() => {
                        console.log('Import manually pressed');
                        setIsOpen(false);
                    }}
                />
            </Animated.View>

            {/* Main FAB */}
            <TouchableOpacity style={styles.fabContainer} onPress={toggleSpeedDial}>
                <LinearGradient 
                    colors={['#D8125A', '#CC5B8F']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }} 
                    style={styles.gradient}
                >
                    {isOpen ? <X size={24} color="white" /> : <Plus size={24} color="white" />}
                </LinearGradient> 
            </TouchableOpacity> 
        </View>
    );
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    speedDialContainer: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        alignItems: 'flex-end',
    },
    speedDialButtons: {
        marginBottom: 15,
        alignItems: 'flex-end',
    },
    speedDialItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    speedDialLabel: {
        color: '#000',
        fontSize: 14,
        marginRight: 10,
        backgroundColor: 'white',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    speedDialButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    speedDialIcon: {
        fontSize: 16,
        color: '#000',
    },
    fabContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
        zIndex: 1000,
    },
    gradient: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
});