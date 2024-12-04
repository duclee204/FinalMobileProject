import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Gioithieu1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Hình ảnh hoa tròn */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../Appbanhoa/Image/Gioithieu1.png')} // Đường dẫn đến hình ảnh hoa
          style={styles.image}
        />
      </View>

      {/* Tiêu đề */}
      <Text style={styles.title}>Hoa tươi, chất lượng từ các nhà vườn uy tín</Text>

      {/* Phụ đề */}
      <Text style={styles.subtitle}>
        Chúng tôi cam kết chỉ mang đến cho bạn những bông hoa tươi đẹp nhất, được chăm sóc kỹ lưỡng từ các nhà vườn hàng đầu.
      </Text>

      {/* Chỉ báo phân trang (pagination) */}
      <View style={styles.pagination}>
        <View style={[styles.dot, { backgroundColor: '#4285F4'}]} />
        <View style={[styles.dot, { backgroundColor: '#f48fb1' }]} />
        <View style={[styles.dot, { backgroundColor: '#f48fb1' }]} />
      </View>

      {/* Nút điều hướng */}
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Gioithieu2')}>
        <MaterialIcons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e91e63',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    paddingHorizontal: 30,
    lineHeight: 20,
    marginBottom: 30,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  nextButton: {
    backgroundColor: '#e91e63',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});

export default Gioithieu1;
