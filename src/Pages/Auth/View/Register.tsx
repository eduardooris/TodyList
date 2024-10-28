import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Design } from "../../../util/Design";
import { useRegisterLogic } from "../Logic/Register.logic";

interface RegisterProps {
  navigation: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
}

export default function Register(props: RegisterProps) {
  const { form, loading, setForm, submit } = useRegisterLogic();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View>
        <View style={styles.containerHeader}>
          <Text style={styles.title} allowFontScaling={false}>
            Criar conta no Todyapp
          </Text>
          <Text style={styles.subtitle} allowFontScaling={false}>
            Trabalhe mais rápido com o Todyapp
          </Text>
        </View>
        <Input
          value={form.username}
          onChangeText={(text) => setForm({ username: text })}
          label="Usuário"
          placeholder="Digite um nome de usuário"
        />
        <Input
          value={form.email}
          onChangeText={(text) => setForm({ email: text })}
          label="E-mail"
          placeholder="Digite um e-mail válido"
        />
        <Input
          value={form.password}
          onChangeText={(text) => setForm({ password: text })}
          label="Senha"
          secureTextEntry={true}
          placeholder="Digite sua senha"
        />
        <Input
          value={form.confirmPassword}
          onChangeText={(text) => setForm({ confirmPassword: text })}
          label="Confirme sua senha"
          secureTextEntry={true}
          placeholder="Digite sua senha novamente"
        />
      </View>
      <View style={{ gap: 10 }}>
        <Button type="solid" size="large" onPress={submit} loading={loading}>
          Registrar-se
        </Button>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.register} allowFontScaling={false}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    justifyContent: "space-between",
    marginBottom: 20,
    alignSelf: "center",
    paddingVertical: 30,
    marginTop: 20,
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: Design.Brand.Dark,
    fontWeight: "600",
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "gray",
    fontWeight: "600",
    alignSelf: "center",
    width: 290,
    textAlign: "center",
  },
  containerHeader: {
    marginVertical: 50,
  },
  register: {
    textAlign: "center",
    color: Design.Brand.Dark,
    textDecorationLine: "underline",
    fontSize: 15,
    fontWeight: "600",
  },
});
