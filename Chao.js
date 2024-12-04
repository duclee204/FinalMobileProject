import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Chao = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Gioithieu1'); // Tự động chuyển đến màn hình 'Gioithieu1' sau 3 giây
    }, 3000); // 3000 ms = 3 giây

    // Cleanup khi component bị unmount hoặc useEffect bị hủy
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Hiển thị logo */}
      <Image
        source={require('../Appbanhoa/Image/Chao.png')} // Đường dẫn đến logo bạn đã tải lên
        style={styles.logo}
      />
      <Text style={styles.title}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Màu nền trắng
  },
  logo: {
    width: 200, // Chiều rộng logo
    height: 200, // Chiều cao logo
    resizeMode: 'contain', // Đảm bảo hình ảnh giữ tỉ lệ khung hình
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000', // Màu chữ đen
    fontFamily: 'Cursive', // Kiểu chữ giống như hình
  },
});

export default Chao;
