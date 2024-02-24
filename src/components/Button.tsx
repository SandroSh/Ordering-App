import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { forwardRef } from 'react';

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable ref={ref} {...pressableProps} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a7a7a7",
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
    
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    fontFamily:'monospace'
  },
});

export default Button;