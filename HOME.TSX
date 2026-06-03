import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Link } from 'expo-router';

const CATEGORIES = [
  { id: 1, name: 'Solar', emoji: '☀️' },
  { id: 2, name: 'Eólica', emoji: '🌬️' },
  { id: 3, name: 'Hidrelétrica', emoji: '💧' },
  { id: 4, name: 'Biomassa', emoji: '🌱' },
  { id: 5, name: 'Consumo', emoji: '⚡' },
];

const DATA = [
  {
    id: 1,
    name: 'Energia Solar Gerada',
    description: 'Seu sistema produziu 120 kWh hoje.',
    info: 'Economia: R$ 95,00',
    emoji: '☀️',
  },
  {
    id: 2,
    name: 'Energia Eólica',
    description: 'Velocidade média do vento: 18 km/h.',
    info: 'Alta eficiência',
    emoji: '🌬️',
  },
  {
    id: 3,
    name: 'Impacto Ambiental',
    description: 'Você evitou 32kg de CO₂ este mês.',
    info: 'Sustentável 🌱',
    emoji: '🌍',
  },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Olá, Usuário 👋</Text>
            <Text style={styles.address}>⚡ Energia limpa ativa</Text>
          </View>
          <View style={styles.profilePic}>
            <Text style={styles.profileEmoji}>🌱</Text>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput 
            style={styles.searchInput} 
            placeholder="Buscar energia, consumo ou dados..." 
            placeholderTextColor="#999" 
          />
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Energia Solar Ativa ☀️</Text>
          <Text style={styles.bannerSubtitle}>Seu sistema gerou 120 kWh hoje</Text>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fontes de Energia</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity key={cat.id} style={styles.categoryCard}>
                <View style={styles.categoryIconContainer}>
                  <Text style={styles.categoryEmoji}>{cat.emoji}</Text>
                </View>
                <Text style={styles.categoryText}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Data Cards */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resumo Energético</Text>
          {DATA.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <View style={styles.itemImageContainer}>
                <Text style={styles.itemImageEmoji}>{item.emoji}</Text>
              </View>

              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>

                <View style={styles.itemRow}>
                  <Text style={styles.itemInfoText}>{item.info}</Text>

<Link
  href={
    item.id === 1
      ? ("/energia-cotidiano" as any)
      : item.id === 2
      ? ("/sustentabilidade" as any)
      : ("/details" as any)
  }
  asChild
>
  <TouchableOpacity style={styles.actionButton}>
    <Text style={styles.actionButtonText}>
      Ver
    </Text>
  </TouchableOpacity>
</Link>
                </View>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F9F4',
  },
  container: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  greeting: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2E7D32',
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  profilePic: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileEmoji: {
    fontSize: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#333',
  },
  banner: {
    backgroundColor: '#2E7D32',
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 16,
    padding: 24,
  },
  bannerTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '800',
  },
  bannerSubtitle: {
    color: '#C8E6C9',
    marginTop: 6,
  },
  section: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  categoryScroll: {
    paddingLeft: 20,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 16,
  },
  categoryIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 3,
  },
  categoryEmoji: {
    fontSize: 30,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 16,
    padding: 12,
    elevation: 2,
  },
  itemImageContainer: {
    width: 90,
    height: 90,
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemImageEmoji: {
    fontSize: 40,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  itemDescription: {
    fontSize: 12,
    color: '#777',
    marginVertical: 6,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemInfoText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2E7D32',
  },
  actionButton: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  actionButtonText: {
    color: '#FFF',
    fontWeight: '600',
  },
});
