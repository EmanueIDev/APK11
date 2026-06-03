import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

const USOS = [
  {
    id: 1,
    emoji: "🏠",
    title: "Casas Sustentáveis",
    description:
      "Painéis solares ajudam residências a gerar energia limpa e reduzir gastos com eletricidade.",
  },
  {
    id: 2,
    emoji: "💡",
    title: "Iluminação Pública",
    description:
      "Muitas cidades já utilizam postes alimentados por energia solar para reduzir custos.",
  },
  {
    id: 3,
    emoji: "🚜",
    title: "Agricultura",
    description:
      "Fazendas utilizam energia renovável para irrigação, bombas d'água e máquinas agrícolas.",
  },
];

const CURIOSIDADES = [
  {
    id: 1,
    emoji: "☀️",
    text: "Um painel solar pode continuar gerando energia mesmo em dias nublados.",
  },
  {
    id: 2,
    emoji: "🌬️",
    text: "Uma turbina eólica pode abastecer centenas de residências dependendo do tamanho.",
  },
];

export default function EnergiaCotidiano() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>
              Energia no Cotidiano ⚡
            </Text>
            <Text style={styles.subtitle}>
              Onde usamos energia renovável?
            </Text>
          </View>

          <View style={styles.profilePic}>
            <Text style={styles.profileEmoji}>🌱</Text>
          </View>
        </View>

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>
            Renováveis no dia a dia 🌍
          </Text>

          <Text style={styles.bannerSubtitle}>
            Pequenas tecnologias sustentáveis já fazem parte da vida moderna.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Onde encontramos isso?
          </Text>

          {USOS.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>
                  {item.emoji}
                </Text>
              </View>

              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>
                  {item.title}
                </Text>

                <Text style={styles.cardDescription}>
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Você sabia?
          </Text>

          {CURIOSIDADES.map((item) => (
            <View key={item.id} style={styles.tipCard}>
              <Text style={styles.tipEmoji}>
                {item.emoji}
              </Text>

              <Text style={styles.tipText}>
                {item.text}
              </Text>
            </View>
          ))}
        </View>

        <Link href={"/sustentabilidade" as any} asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Próxima Página →
            </Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F9F4",
  },

  container: {
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },

  greeting: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2E7D32",
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },

  profilePic: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
  },

  profileEmoji: {
    fontSize: 24,
  },

  banner: {
    backgroundColor: "#2E7D32",
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 18,
    padding: 24,
  },

  bannerTitle: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "800",
  },

  bannerSubtitle: {
    color: "#C8E6C9",
    marginTop: 6,
    lineHeight: 22,
  },

  section: {
    marginTop: 30,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    paddingHorizontal: 20,
    marginBottom: 16,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 18,
    padding: 16,
    elevation: 2,
  },

  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 14,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  icon: {
    fontSize: 36,
  },

  cardInfo: {
    flex: 1,
    justifyContent: "center",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },

  cardDescription: {
    fontSize: 13,
    color: "#666",
    marginTop: 8,
    lineHeight: 20,
  },

  tipCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
  },

  tipEmoji: {
    fontSize: 28,
    marginRight: 14,
  },

  tipText: {
    flex: 1,
    color: "#444",
    lineHeight: 20,
  },

  button: {
    backgroundColor: "#2E7D32",
    marginHorizontal: 20,
    marginTop: 30,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
  },
});

