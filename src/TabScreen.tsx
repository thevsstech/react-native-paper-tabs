import * as React from 'react';
import type { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import type { TextStyle } from 'react-native';
import type { TextProps } from 'react-native';
import type  { Animated } from 'react-native';

export interface TabScreenProps extends TextProps{
  label: string;
  icon?: IconSource;
  children: any;
  preload?: () => any;
  labelStyle ?: TextStyle;
  labelProps ?: Animated.AnimatedProps<TextProps>
}

export default function TabScreen({ children }: TabScreenProps) {
  return React.Children.only(children);
}
