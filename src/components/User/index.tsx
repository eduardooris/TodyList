import { Image, StyleSheet, Text, View } from "react-native";
import { User } from "../../interface/User";
import { Design } from "../../util/Design";

export default function IUser({ username, email, id }: User) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/vetores-premium/retrato-de-jovem-avatar-do-cara-para-redes-sociais-retrato-masculino-abstrato-rosto-cheio-ilustracao-isolada-em-estilo-simples_276162-44.jpg?w=740",
        }}
        style={{ width: 50, height: 50, borderRadius: 100 }}
      />

      <View>
        <Text style={styles.desc}>Usuário: {username}</Text>
        <Text style={styles.desc}>E-mai: {email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 0,
    marginBottom: 20,
  },
  desc: {
    color: Design.Brand.Dark,
    fontWeight: "600",
  },
});
