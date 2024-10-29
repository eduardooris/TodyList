import React from "react";
import { ScrollView, View } from "react-native";
import Button from "../../../components/Button";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";
import Input from "../../../components/Input";
import { useSettingsLogic } from "../Logic/Settings.logic";

// import { Container } from './styles';

const UserProfile: React.FC = () => {
  const dispatch = useDispatch();
  const { form, setForm } = useSettingsLogic();
  const logout = () => {
    AsyncStorage.removeItem("@TokenApi");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 100,
        alignSelf: "center",
      }}
    >
      <Image
        source={{
          uri: "https://img.freepik.com/vetores-premium/retrato-de-jovem-avatar-do-cara-para-redes-sociais-retrato-masculino-abstrato-rosto-cheio-ilustracao-isolada-em-estilo-simples_276162-44.jpg?w=740",
        }}
        style={{
          width: 150,
          height: 150,
          borderRadius: 100,
          alignSelf: "center",
        }}
      />

      <View>
        <Input
          label="Usuário"
          placeholder="Digite seu usuário"
          value={form.username}
          pointerEvents="none"
          onChangeText={(e) => setForm({ username: e })}
        />

        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          value={form.email}
          pointerEvents="none"
          onChangeText={(e) => setForm({ email: e })}
        />
      </View>
      <Button type="solid" size="large" onPress={logout}>
        Logout
      </Button>
    </ScrollView>
  );
};

export default UserProfile;
