import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styles from '../src/style/HomeScreenStyles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Notícias de Hoje</Text>
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
 
    { id: '1', title: 'Últimas Notícias sobre Lana Del Rey', description: 'Lançamentos, colaborações e novidades da carreira de Lana Del Rey.' },
    { id: '2', title: 'Lana Del Rey Conquista Paradas Musicais', description: 'Novo álbum da cantora estreia entre os mais ouvidos do mundo.' },
    { id: '3', title: 'Locais Icônicos que Inspiraram Lana Del Rey', description: 'Descubra destinos que serviram de cenário para músicas e videoclipes da artista.' },
    { id: '4', title: 'Lana Del Rey Lança Nova Versão de Clássico', description: 'Cantora surpreende fãs com releitura emocionante de uma de suas músicas mais queridas.' },
    { id: '5', title: 'Playlist de Fim de Semana com Lana Del Rey', description: 'Seleção especial com os maiores sucessos para você relaxar e curtir o clima nostálgico.' }
  
  
];

const NewsItem = ({ item }) => (
  <View style={styles.newsItem}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);




