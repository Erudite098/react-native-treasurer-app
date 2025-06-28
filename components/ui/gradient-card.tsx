// components/GradientCard.tsx
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface GradientCardProps {
  children?: React.ReactNode;
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
     

      <View style={styles.content}>
        {children}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 20,
    flexShrink: 1, // allow the height to grow
    alignSelf: 'stretch', // important for full width in flex parents
  },
  content: {
    justifyContent: 'flex-start',
    // flexShrink: 1, // allow inner content to grow
  },
});
