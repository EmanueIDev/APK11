import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

const BENEFICIOS = [
  {
    id: 1,
    emoji: "🌍",
    title: "Menos Poluição",
    description:
      "A energia renovável reduz a emissão de gases poluentes e ajuda na preservação do planeta.",
  },
  {
    id: 2,
    emoji: "💰",
    title: "Economia",
    description:
      "O uso de energia limpa pode diminuir gastos energéticos ao longo do tempo.",
  },
  {
    id: 3,
    emoji: "⚡",
    title: "Eficiência",
    description:
      "Fontes renováveis oferecem soluções modernas para abastecimento energético sustentável.",
  },
];

const DADOS = [
  {
    id: 1,
    emoji: "🌱",
    value: "32kg",
    label: "CO₂ evitado este mês",
  },
  {
    id: 2,
    emoji: "☀️",
    value: "120kWh",
    label: "Energia gerada hoje",
  },
  {
    id: 3,
    emoji: "💧",
    value: "85%",
    label: "Eficiência sustentável",
  },
];

export default function Sustentabilidade() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>
              Sustentabilidade 🌱
            </Text>

            <Text style={styles.subtitle}>
              O impacto das energias renováveis
            </Text>
          </View>

          <View style={styles.profilePic}>
            <Text style={styles.profileEmoji}>
              🌍
            </Text>
          </View>
        </View>

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>
            Futuro Energético Sustentável
          </Text>

          <Text style={styles.bannerSubtitle}>
            Pequenas mudanças energéticas podem gerar grandes impactos ambientais.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Benefícios
          </Text>

          {BENEFICIOS.map((item) => (
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
            Indicadores Sustentáveis
          </Text>

          <View style={styles.statsContainer}>
            {DADOS.map((item) => (
              <View key={item.id} style={styles.statCard}>
                <Text style={styles.statEmoji}>
                  {item.emoji}
                </Text>

                <Text style={styles.statValue}>
                  {item.value}
                </Text>

                <Text style={styles.statLabel}>
                  {item.label}
                </Text>
              </View>
            ))}
          </View>
        </View>

      <Link href={"/home" as any} asChild>  
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Voltar para Home
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

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  statCard: {
    backgroundColor: "#FFFFFF",
    width: "31%",
    borderRadius: 18,
    padding: 16,
    alignItems: "center",
    elevation: 2,
  },

  statEmoji: {
    fontSize: 28,
  },

  statValue: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "800",
    color: "#2E7D32",
  },

  statLabel: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 12,
    color: "#666",
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
