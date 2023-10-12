import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface ButtonText {
  text: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  image?: ImageSourcePropType;
  onPress?: () => void;
}

const Button = (props: ButtonText) => {
  return (
    <Pressable
      style={[styles.container, props.containerStyle]}
      onPress={() => props?.onPress?.()}>
      {props.image && <Image source={props.image} style={[{marginRight: 5}]} />}
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
    paddingVertical: 12,
    borderRadius: 8,
  },
  text: {
    color: 'white',
  },
});
