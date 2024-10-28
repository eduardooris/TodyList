import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useLogin } from "../Logic/Login.logic";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Design } from "../../../util/Design";

interface LoginProps {
  navigation: {
    navigate: (route: string) => void;
  };
}

export default function Login(props: LoginProps) {
  const { form, loading, setForm, signIn } = useLogin();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View>
        <View style={styles.containerHeader}>
          <Text style={styles.title} allowFontScaling={false}>
            Bem vindo de volta!
          </Text>
          <Text style={styles.subtitle} allowFontScaling={false}>
            Trabalhe mais rápido com o Todyapp
          </Text>
        </View>
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
      </View>
      <View style={{ gap: 10 }}>
        <Button type="solid" size="large" onPress={signIn} loading={loading}>
          Entrar
        </Button>
        <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
          <Text style={styles.register} allowFontScaling={false}>
            Registrar-se
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
    marginVertical: 20,
  },
  register: {
    textAlign: "center",
    color: Design.Brand.Dark,
    textDecorationLine: "underline",
    fontSize: 15,
    fontWeight: "600",
  },
});
