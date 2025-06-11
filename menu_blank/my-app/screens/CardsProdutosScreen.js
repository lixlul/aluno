import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import styles from '../scr/styles/CardsProdutosScreenStyles';

const imagemProduto1 = require('../assets/produto1.jpg');
const imagemProduto2 = require('../assets/produto2.jpg');
const imagemProduto3 = require('../assets/produto3.jpg');
const imagemProduto4 = require('../assets/produto4.jpg');


const produtos = [
      { id: '1', nome: 'Produto 1', imagem: imagemProduto1, preco: 'R$ 3.000,00'},
      { id: '2', nome: 'Produto 2', imagem: imagemProduto2, preco: 'R$ 3.000,00'},
      { id: '3', nome: 'Produto 3', imagem: imagemProduto3, preco: 'R$ 3.000,00'},
      { id: '4', nome: 'Produto 4', imagem: imagemProduto3, preco: 'R$ 3.000,00'},
];

const CardsProdutosScreen = ({ navigation }) => {
    const renderProduto = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => alert(`Você selecionou: ${item.nome}`)}>
            <image source={ {uri: item.imagem}} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
             <Text style={styles.preco}>{item.preco}</Text>
        </TouchableOpacity>

    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>produtos</Text>
            <FlatList
            data={produtos}
            renderItem={renderProduto}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.lista}
            />
        </View>

    );
};
export default CardsProdutosScreen;
