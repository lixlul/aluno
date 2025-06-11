import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    lista: {
        paddingBottom: 16,
    },
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: '0.1',
        shadowRadius: 4,
        elevation: 2,
    },
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    preco: {
        fontSize: 14,
        color: '#888',
    },
});

export default styles;