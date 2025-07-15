// import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
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
  const [textWidth, setTextWidth] = useState(0);

  const fontMap = {
    Regular: 'Karla-Regular',
    SemiBold: 'Karla-SemiBold',
    Bold: 'Karla-Bold',
  };

  return (
    // <MaskedView
    //   style={{ width: textWidth }}
    //   maskElement={
    //     <Text
    //       {...props}
    //       style={[
    //         styles.baseText,
    //         { fontSize, fontFamily: fontMap[fontWeight], color: 'black' },
    //         style,
    //       ]}
    //       onLayout={e => setTextWidth(e.nativeEvent.layout.width)}
    //     >
    //       {text}
    //     </Text>
    //   }
    // >
      <LinearGradient
        colors={['#D8125A', '#E88AB0', '#CB6190', '#D8125A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width: textWidth }}
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
    // </MaskedView> 
  );
}

const styles = StyleSheet.create({
  baseText: {
    backgroundColor: 'transparent',
  },
});
