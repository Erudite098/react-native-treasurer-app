import { Dimensions, StyleSheet, Text, View } from 'react-native';

type Props = {
  text: string;
  fontWeight?: 'medium' | 'extrabold'; // now accepts only valid weights
  fontSize?: number;                   // optional fontSize prop
};

export default function Header({ text, fontWeight = 'extrabold', fontSize = 24 }: Props) {
  // Select the fontFamily based on your custom font weight
  const fontFamily = fontWeight === 'medium' ? 'Karla-Medium' : 'Karla_ExtraBold';

  return (
    <View style={styles.box}>
      <Text style={[styles.label, { fontFamily, fontSize }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: Dimensions.get('window').width,
    backgroundColor: '#E88AB0',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 16,
  },
  label: {
    color: '#fff',
    // fontSize and fontFamily will be dynamically added
  },
});
