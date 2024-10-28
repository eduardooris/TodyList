import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Design } from "../../util/Design";

interface ButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  size: "small" | "medium" | "large";
  type: "solid" | "outline" | "clean";
  color?: "primary" | "secondary" | "warning" | "sucess";
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  children: React.ReactNode;
}

export default function Button({
  onPress,
  disabled,
  size,
  children,
  color,
  type,
  style,
  loading,
}: ButtonProps) {
  const styleType = disabled
    ? styles.disabled[type]
    : styles[color || "primary"][type] || styles.primary;
  const styleSize = sizes[size] || sizeStyle.medium;
  return (
    <TouchableOpacity
      style={[{ ...styleType, ...styleSize }, style]}
      onPress={onPress}
      disabled={loading || disabled}
    >
      {loading ? (
        <ActivityIndicator
          color={Design.Brand.Focused}
          size={sizeStyle.small.width}
        />
      ) : (
        <Text
          allowFontScaling={false}
          style={{
            color: Design.Neutral.White,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const baseWrapper = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});

const sizeStyle = StyleSheet.create({
  small: {
    width: 100,
    height: 50,
  },
  medium: {
    width: 150,
    height: 50,
  },
  large: {
    width: 350,
    height: 55,
  },
});

const primary = StyleSheet.create({
  solid: {
    ...baseWrapper.button,
    borderColor: Design.Brand.Default,
    backgroundColor: Design.Brand.Default,
  },
  outline: {
    ...baseWrapper.button,
    borderColor: Design.Brand.Outline,
  },
  clean: {
    ...baseWrapper.button,
    backgroundColor: "transparent",
  },
});

const secondary = StyleSheet.create({
  solid: {
    ...baseWrapper.button,
    backgroundColor: Design.Brand.Dark,
  },
  outline: {
    ...baseWrapper.button,
    borderColor: Design.Brand.Dark,
    borderWidth: 1,
  },
  clean: {
    ...baseWrapper.button,
    backgroundColor: "transparent",
  },
});

const sucess = StyleSheet.create({
  solid: {
    ...baseWrapper.button,
    backgroundColor: Design.Success.Default,
  },
  outline: {
    ...baseWrapper.button,
    borderColor: Design.Success.Outline,
    borderWidth: 1,
  },
  clean: {
    ...baseWrapper.button,
    backgroundColor: "transparent",
  },
});

const warning = StyleSheet.create({
  solid: {
    ...baseWrapper.button,
    backgroundColor: Design.Error.Default,
  },
  outline: {
    ...baseWrapper.button,
    borderColor: Design.Error.Outline,
    borderWidth: 1,
  },
  clean: {
    ...baseWrapper.button,
    backgroundColor: "transparent",
  },
});

const disabled = StyleSheet.create({
  solid: {
    backgroundColor: Design.Neutral.Ghost,
    ...baseWrapper.button,
  },
  outline: {
    ...baseWrapper.button,
    borderColor: Design.Neutral.Ghost,
    borderWidth: 1,
  },
  clean: {
    ...baseWrapper.button,
    backgroundColor: "transparent",
  },
});

const styles = {
  primary,
  secondary,
  disabled,
  sucess,
  warning,
};

const sizes = {
  small: sizeStyle.small,
  medium: sizeStyle.medium,
  large: sizeStyle.large,
};
