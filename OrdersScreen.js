import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const orders = [
  {
    id: '1',
    image: 'https://flowerfarm.vn/wp-content/uploads/2021/09/bo-hoa-dep-nhat-the-gioi-1.jpg',
    date: '17/04/2024',
    time: '14:30 - Nhận tại cửa hàng',
    price: '88.000đ',
    payment: 'Tiền mặt',
    section: 'Tuần này',
  },
  {
    id: '2',
    image: 'https://tramhoa.com/wp-content/uploads/2020/03/bo-hoa-hong-kem-tang-sinh-nhat-dep-819x1024.jpg',
    date: '19/04/2024',
    time: '20:00 - Giao hàng tận nhà',
    price: '52.000đ',
    payment: 'Chuyển khoản',
    section: 'Tuần này',
  },
  {
    id: '3',
    image: 'https://toanthaydinh.com/wp-content/uploads/2020/04/hinh-anh-hoa-chuc-mung-sinh-nhat-dep-nhat-y-nghia-11-4.jpg',
    date: '20/04/2024',
    time: '08:00 - Nhận tại cửa hàng',
    price: '23.000đ',
    payment: 'Tiền mặt',
    section: 'Tháng này',
  },
  {
    id: '4',
    image: 'https://hoatuoi9x.com/wp-content/uploads/2022/04/0000203_bo-hoa-huong-duong-hb22.jpeg',
    date: '28/04/2024',
    time: '17:00 - Điểm hẹn',
    price: '55.000đ',
    payment: 'Chuyển khoản',
    section: 'Tháng này',
  },
];

const OrderItem = ({ item }) => (
  <View style={styles.orderItem}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
    <View style={styles.priceDetails}>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.payment}>{item.payment}</Text>
    </View>
  </View>
);

const OrdersScreen = () => {
    const navigation = useNavigation();
    const sections = [...new Set(orders.map((item) => item.section))];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image
            source={require('../Appbanhoa/Image/v.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Lịch sử mua hàng</Text>
        </View>
        {sections.map((section) => (
          <View key={section}>
            <Text style={styles.sectionHeader}>{section}</Text>
            {orders
              .filter((order) => order.section === section)
              .map((order) => (
                <OrderItem key={order.id} item={order} />
              ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',  
    alignItems: 'center',  
    backgroundColor: '#FFF',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  backButton: {
    position: 'relative',
    top: 0,
    left: 10,
    zIndex: 1,
    padding: 10,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#F5F5F5',
  },
  orderItem: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    paddingRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  details: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  time: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  priceDetails: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  payment: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  navItem: {
    fontSize: 14,
    color: '#333',
  },
});

export default OrdersScreen;
