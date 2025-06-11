import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styles from '../scr/styles/HomeScreenStyles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Notícias de Hoje no Mundo da Moda</Text>
      <FlatList
        data={newsData}
        renderItem={({ item }) => <NewsItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

// Simulação de dados de notícias
const newsData = [
  { id: '1', title: 'Últimas Notícias sobre o mundo da moda', description: ' Novidades nas pasarelas de milão.' },
  { id: '2', title: 'Moda Sustentável: Brechós Online e Upcycling Estão em Alta', description: 'A consciência ambiental segue ditando o ritmo da indústria da moda. Em 2025, o crescimento dos brechós online e das marcas que trabalham com upcycling (reutilização criativa de roupas antigas) reflete uma mudança de mentalidade nos consumidores. Plataformas como Enjoei, Repassa e Depop se tornam cada vez mais populares entre os jovens que buscam estilo com propósito. Além disso, designers independentes estão transformando jeans antigos, camisetas e jaquetas em peças exclusivas e cheias de personalidade. A sustentabilidade nunca esteve tão na moda..' },
  { id: '3', title: 'Coleção da grife Elena Vólari transforma lixo marinho em luxo nas passarelas de Milão', description: 'A estilista ítalo-brasileira Elena Vólari causou impacto na Fashion Week de Milão com sua nova coleção "Maré Alta", feita inteiramente com tecidos reciclados de resíduos marítimos, como redes de pesca e plásticos coletados nos oceanos. As peças misturam texturas rústicas com acabamentos de alta costura, criando um contraste ousado e elegante. A proposta da coleção vai além da estética: é um manifesto pela moda circular e pela preservação ambiental. O desfile terminou com aplausos de pé e já posiciona Elena como um dos nomes mais promissores da moda sustentável em 2025..' },
  { id: '4', title: 'Haus de Neón lança linha genderless inspirada na noite de Tóquio', description: 'A marca underground Haus de Neón, conhecida por seus looks ousados e estética futurista, lançou uma nova coleção inspirada na vida noturna de Tóquio. As peças trazem cortes assimétricos, cores neon e tecidos refletivos, tudo com modelagens sem gênero. A proposta é desafiar padrões tradicionais de vestuário e trazer mais liberdade de expressão ao vestir. A coleção foi apresentada em um desfile imersivo com realidade aumentada, que colocou o público "dentro" das ruas de Shibuya..' },
  { id: '5', title: 'Woman Secret é uma das marcas confirmadas no milão fashonweek 2025', description: 'A marca já tem 5 modelos que estão em alta na moda confirmadas.' },
];

const NewsItem = ({ item }) => (
  <View style={styles.newsItem}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);
