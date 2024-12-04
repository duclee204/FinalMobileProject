import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';

const Yeuthich = ({ navigation }) => {
  const flowers = [
    { id: 1, name: 'Bowl Flower', price: '75.000đ', description: 'Tặng quà kèm thẻ hội viên', image: require('../Appbanhoa/Image/Bowlflower.png') },
    { id: 2, name: 'Ele Bouquet', price: '100.000đ', description: 'Kích thước lớn kèm theo thiệp chúc mừng', image: require('../Appbanhoa/Image/eleBouquet.png') },
    { id: 3, name: 'Baby Bouquet', price: '90.000đ', description: 'Kích thước trung bình đến lớn, thiệp chúc mừng miễn phí', image: require('../Appbanhoa/Image/BabyBouquet.png') },
  ];

  const individualFlowers = [
    { id: 4, name: 'Hoa hồng đỏ', price: '5.000đ', image: require('../Appbanhoa/Image/Hoahongdo.png') },
    { id: 5, name: 'Hoa huệ trắng', price: '12.000đ', image: require('../Appbanhoa/Image/Hoahuetrang.png') },
  ];

  const accessories = [
    { id: 6, name: 'Sử dụng làm chỗ dựa cho hoa', image: require('../Appbanhoa/Image/choduahoa.png') },
  ];

  return (
    <View style={styles.container}>
  {/* Header */}
  <View style={styles.header}>
  <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Giohang')}>
            <MaterialCommunityIcons name="cart-outline" size={28} color="black" />
          </TouchableOpacity>
          </View>
  </View>
      {/* Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Bó hoa Section */}
        <Text style={styles.sectionTitle}>Bó hoa</Text>
        {flowers.map((flower) => (
          <View key={flower.id} style={styles.itemContainer}>
            <Image source={flower.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{flower.name}</Text>
              <Text style={styles.itemDescription}>{flower.description}</Text>
              <Text style={styles.itemPrice}>{flower.price}</Text>
            </View>
            <View style={styles.iconheart}>            
              <TouchableOpacity>
              <FontAwesome name="heart" size={24} color="pink" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Hoa Section */}
        <Text style={styles.sectionTitle}>Hoa</Text>
        {individualFlowers.map((flower) => (
          <View key={flower.id} style={styles.itemContainer}>
            <Image source={flower.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{flower.name}</Text>
              <Text style={styles.itemPrice}>{flower.price}</Text>
            </View>
            <View style={styles.iconheart}>            
              <TouchableOpacity>
              <FontAwesome name="heart" size={24} color="pink" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Phụ kiện Section */}
        <Text style={styles.sectionTitle}>Phụ kiện</Text>
        {accessories.map((accessory) => (
          <View key={accessory.id} style={styles.itemContainer}>
            <Image source={accessory.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{accessory.name}</Text>
            </View>
            <View style={styles.iconheart}>            
              <TouchableOpacity>
              <FontAwesome name="heart" size={24} color="pink" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
      alignItems: 'center',
      marginTop: 30,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,
      marginLeft: 20,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginHorizontal: 20,
      marginVertical: 5,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#ddd',
      width:'90%',
      height: 80,
    },
    itemImage: {
      width: 78,
      height: 80,
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
    },
    itemInfo: {
      flex: 1,
      paddingHorizontal: 10,
    },
    itemName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    itemDescription: {
      fontSize: 12,
      color: '#999',
    },
    itemPrice: {
      fontSize: 14,
      color: '#999',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderColor: '#f2f2f2',
    },
    footerText: {
      fontSize: 12,
      textAlign: 'center',
      color: '#555',
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: '93%',
      marginTop: 5,
    },
    iconheart: {
      marginRight: 5,
    }
  });
  

export default Yeuthich;
