import { Input as TextInput } from "react-native-elements";
import { Design } from "../../util/Design";
import { StyleSheet } from "react-native";
import { useState } from "react";
interface InputProps {
  label: string;
  placeholder: string;
  value?: string;
  errorMessage?: string;
  pointerEvents?: "none" | "auto";
  secureTextEntry?: boolean;
  rightIcon?: { type: string; name: string };
  ref?: any;
  onChangeText?: (text: string) => void;
}

export default function Input({
  value,
  onChangeText,
  label,
  errorMessage,
  secureTextEntry,
  rightIcon,
  pointerEvents,
  placeholder,
  ref,
}: InputProps) {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const rightIconPress = secureTextEntry
    ? {
        type: "font-awesome",
        name: isSecure ? "eye-slash" : "eye",
        onPress: () => setIsSecure(!isSecure),
      }
    : rightIcon;

  return (
    <TextInput
      value={value}
      ref={ref}
      autoCapitalize="none"
      onChangeText={onChangeText}
      placeholder={placeholder}
      labelStyle={styles.labelStyle}
      secureTextEntry={isSecure}
      style={styles.container}
      rightIcon={rightIconPress}
      errorStyle={styles.errorStyle}
      pointerEvents={pointerEvents}
      errorMessage={errorMessage}
      label={label}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 14,
  },
  labelStyle: {
    fontSize: 14,
    color: Design.Brand.Dark,
    fontWeight: "400",
  },
  errorStyle: {
    color: Design.Error.Default,
  },
});
