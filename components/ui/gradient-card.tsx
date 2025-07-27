import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface GradientCardProps {
  children?: React.ReactNode; // The content of the card, can be a string, number, element or an array of elements.
  borderRadius?: number;
}

export default function GradientCard({
  children, 
  borderRadius = 16, 
  
}: GradientCardProps) { 
  return (
    <LinearGradient 
      colors={['#F4BBD0', '#F2EAED']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.card, { borderRadius }]}
    > 
      {/* The card is styled with a gradient background and a border radius */}
      <View style={styles.content}>  
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
    // alignSelf: 'stretch', // important for full width in flex parents
    
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
    // justifyContent: 'flex-start',
    // flexShrink: 1, // allow inner content to grow
  },
});
