import { MeuInput } from "@/app/components/input";
import { Image, ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.container}>

                <Image 
                    source={require("@/app/assets/planta.jpg")} 
                    style={styles.image} 
                />

                <Text style={styles.title}>Energia do Futuro ⚡</Text>

                <Text style={styles.subtitle}>
                    Acesse sua conta e acompanhe seu consumo sustentável
                </Text>

                <Text style={styles.description}>
                    Monitore sua energia, economize e ajude o planeta 🌱
                </Text>
 
                <View style={styles.inputContainer}>
                    <MeuInput 
                        placeholder="Email" 
                        keyboardType="email-address"
                    />
                    <MeuInput 
                        placeholder="Senha" 
                        secureTextEntry={true}
                    />
                </View>

                <Link href="/home" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </Pressable>
                </Link>

                <Text style={styles.footer}>
                    Energia limpa começa com pequenas ações 🌍
                </Text>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 32,
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: '900',
        color: '#2E7D32',
        marginTop: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#333',
        marginTop: 8,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 10,
        lineHeight: 20,
    },
    inputContainer: {
        marginTop: 30,
    },
    button: {
        backgroundColor: '#2E7D32',
        paddingVertical: 14,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
    footer: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 12,
        color: '#777',
    }
});
