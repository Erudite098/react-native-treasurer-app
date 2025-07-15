import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

type Props = ViewProps & {
  children: React.ReactNode;
};

export default function Container({ children, style, ...props }: Props) {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,  // ⬅️ uniform 23px left and right
    // width: '100%',          // fill parent width
  },
});
