import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function DetailsScreen() {
  const router = useRouter();

  // Recolhe os parâmetros passados através da URL/href
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Configura as opções do cabeçalho de dentro do componente */}
      <Stack.Screen
        options={{
          title: params.name
            ? `Perfil de ${params.name}`
            : 'Detalhes',
          headerStyle: { backgroundColor: 'lightblue' }, // Sobrescreve o estilo global
          headerTintColor: '#000',
        }}
      />

      <Text style={styles.text}>
        Bem-vindo, {params.name || 'Visitante'}
      </Text>

      {/* Exemplo de como alterar parâmetros programaticamente */}
      <Pressable
        style={styles.button}
        onPress={() => {
          router.setParams({ name: 'Utilizador Atualizado' });
        }}
      >
        <Text style={styles.buttonText}>
          Atualizar Título do Cabeçalho
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#7b1ef4',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
