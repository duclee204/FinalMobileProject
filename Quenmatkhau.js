import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PhoneInput from 'react-native-phone-number-input'; // Import thư viện PhoneInput

const Quenmatkhau = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);

  const handleContinue = () => {
    // Kiểm tra xem số điện thoại có hợp lệ không
    const isValid = phoneInput.current?.isValidNumber(phoneNumber);
    
    if (isValid) {
      // Điều hướng đến màn hình xác minh số điện thoại (xacminhsdt.js)
      navigation.navigate('Nhapmaxacminh', { phoneNumber: formattedValue });
    } else {
      Alert.alert('Số điện thoại không hợp lệ', 'Vui lòng nhập một số điện thoại hợp lệ.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <MaterialCommunityIcons name="chevron-left" size={24} color="#ff8a80" />
        <Text style={styles.backButtonText}>Quên mật khẩu</Text>
      </TouchableOpacity>

      {/* Biểu tượng khóa tùy chỉnh */}
      <View style={styles.iconContainer}>
        <Image 
          source={require('../Appbanhoa/Image/Quenmatkhau.png')} // Đặt đường dẫn đúng đến ảnh khóa
          style={styles.iconImage}
        />
      </View>

      {/* Hướng dẫn */}
      <Text style={styles.instructionText}>
        Vui lòng nhập số điện thoại của bạn để nhận mã xác minh
      </Text>

      {/* Trường nhập liệu với PhoneInput */}
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="VN"
        layout="first"
        placeholder="Nhập số điện thoại"
        onChangeText={(text) => {
          setPhoneNumber(text); // Cập nhật state phoneNumber
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text); // Cập nhật state formattedValue
        }}
        withShadow
        autoFocus={false}
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.phoneInputTextContainer}
      />

      {/* Nút Tiếp tục */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f5',
    padding: 20,
    justifyContent: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backButtonText: {
    color: '#ff8a80',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  iconImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  instructionText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#999',
    marginBottom: 30,
  },
  phoneInputContainer: {
    backgroundColor: '#fde8e8',
    borderRadius: 30,
    marginBottom: 20,
    padding: 10,
    width: '100%'
  },
  phoneInputTextContainer: {
    backgroundColor: '#fde8e8',
  },
  continueButton: {
    backgroundColor: '#ff8a80',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Quenmatkhau;
