// TODO: Make sure the width of the bg color 
// is the same as the text width
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

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
    <MaskedView
      style={{ width: '100%' }}
      maskElement={
        <Text
          {...props}
          style={[
            styles.baseText,
            { fontSize, fontFamily: fontMap[fontWeight], color: 'black' },
            style,
          ]}
         
        >
          {text}
        </Text>
      }
    >
      <LinearGradient
        colors={['#D8125A', '#E88AB0', '#CB6190', '#D8125A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width: '100%' }}
      >
        <Text
          {...props}
          style={[
            styles.baseText,
            { fontSize, fontFamily: fontMap[fontWeight], opacity: 0 },
            style
          ]}
        >
          {text}
        </Text>
      </LinearGradient>
    </MaskedView> 
  );
}

const styles = StyleSheet.create({
  baseText: {
    backgroundColor: 'transparent',
  },
});
