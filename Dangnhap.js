import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Dangnhap = ({ navigation }) => {
  const handleLogin = () => {
    // Kiểm tra logic đăng nhập ở đây, ví dụ: kiểm tra email và mật khẩu
    // Nếu đăng nhập thành công thì chuyển hướng đến TrangChu
    navigation.navigate('MainTabs');
  };

  return (
    <View style={styles.container}>
      {/* Tiêu đề chào mừng */}
      <Text style={styles.title}>Xin chào</Text>
      <Text style={styles.subtitle}>Hãy đăng nhập để giúp bạn mua sắm dễ dàng hơn.</Text>

      {/* Form đăng nhập */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email hoặc số điện thoại"
          placeholderTextColor="#c9a8a8"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Mật khẩu"
            placeholderTextColor="#c9a8a8"
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Quenmatkhau')}>
            <Text style={styles.forgotPassword}>Quên mật khẩu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </TouchableOpacity>

        {/* Đăng nhập bằng phương tiện khác */}
        <Text style={styles.orText}>Hoặc đăng nhập bằng</Text>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialCommunityIcons name="google" size={24} color="#DB4437" />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialCommunityIcons name="facebook" size={24} color="#4267B2" />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>

        {/* Đăng ký */}
        <Text style={styles.registerText}>
          Bạn chưa có tài khoản?{' '}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate('Dangky')} // Điều hướng đến màn hình "Dangky"
          >
            Đăng ký
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    marginBottom: 30,
    textAlign: 'left',
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 3,
    width: '100%', // Giảm chiều rộng của form
    alignSelf: 'center', // Căn giữa form
  },
  input: {
    backgroundColor: '#fde8e8',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  passwordInput: {
    borderRadius: 30, // Làm cho nút bo tròn
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%', // Để nút rộng toàn phần trong form
  },
  forgotPassword: {
    color: '#ff8a80',
    fontSize: 14,
    textAlign: 'right'
  },
  loginButton: {
    backgroundColor: '#ff8a80',
    borderRadius: 50, // Làm cho nút bo tròn
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%', // Để nút rộng toàn phần trong form
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#999',
    marginVertical: 20,
    fontSize: 14,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fde8e8',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    marginBottom: 15,
    justifyContent: 'center',
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
    fontSize: 14,
  },
  registerLink: {
    color: '#ff8a80',
    fontWeight: 'bold',
  },
});

export default Dangnhap;
