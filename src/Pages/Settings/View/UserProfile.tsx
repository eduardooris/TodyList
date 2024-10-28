import React from "react";
import { ScrollView, View } from "react-native";
import Button from "../../../components/Button";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { Container } from './styles';

const UserProfile: React.FC = () => {
  const dispatch = useDispatch();

  const logout = () => {
    AsyncStorage.removeItem("@TokenApi");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 100,
      }}
    >
      <Button type="solid" size="large" onPress={logout}>
        Logout
      </Button>
    </ScrollView>
  );
};

export default UserProfile;
