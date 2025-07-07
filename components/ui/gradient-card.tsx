// components/GradientCard.tsx
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface GradientCardProps {
  children?: React.ReactNode; // The content of the card, can be a string, number, element or an array of elements.
  borderRadius?: number; // The border radius of the card

}

export default function GradientCard({
  children, //The content of the card, can be a string, number, element or an array of elements.
  borderRadius = 16, // The border radius of the card, is defined here so that it can be overridden if needed
  
}: GradientCardProps) { // The component accepts children and an optional borderRadius prop
  return (
    <LinearGradient // Using LinearGradient from expo-linear-gradient to create a gradient background
      colors={['#F4BBD0', '#F2EAED']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.card, { borderRadius }]}
    > 
      {/* The card is styled with a gradient background and a border radius */}
      <View style={styles.content}>  //The content of the card is wrapped in a View to allow for flex properties
        {children}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 20, // Padding inside the card
    marginBottom: 23, // Margin at the bottom to separate from other elements
    flexShrink: 1, // allow the height to grow
    alignSelf: 'stretch', // important for full width in flex parents
    
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    // Android Shadow, need elavation
    elevation: 3,

    // Background and borderRadius (kasi needed para makita 'yung shadow)
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  content: {
    justifyContent: 'flex-start',
    // flexShrink: 1, // allow inner content to grow
  },
});
