import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TextProps, View } from 'react-native';

interface GradientTextProps extends TextProps {
  text: string;
  fontSize?: number;
  fontWeight?: 'Regular' | 'SemiBold' | 'Bold';
}

export default function GradientText({
  text,
  fontSize = 24,
  fontWeight = 'Regular',
  style,
  ...props
}: GradientTextProps) {
  const fontMap = {
    Regular: 'Karla-Regular',
    SemiBold: 'Karla-SemiBold',
    Bold: 'Karla-Bold',
  };

  return (
    <View style={styles.wrapper}>
      <MaskedView
        style={styles.maskedContainer}
        maskElement={
          <Text
            {...props}
            style={[
              styles.maskedText,
              style,
              {
                fontSize,
                fontFamily: fontMap[fontWeight],
              },
            ]}
          >
            {text}
          </Text>
        }
      >
        <LinearGradient
          colors={['#D8125A', '#E88AB0', '#CB6190', '#D8125A']}
          locations={[0, 0.46, 0.64, 0.95]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 5 }}
          style={styles.gradientFill}
        >
          <Text style={[style, { opacity: 0 }]}>{text}</Text>
        </LinearGradient>
      </MaskedView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { 
    minHeight: 29, // avoids clipping tall characters
  },
  maskedContainer: {
    flex: 1,
  },
  gradientFill: {
    flex: 1,
  },
  maskedText: {
    backgroundColor: 'transparent',
  },
});
