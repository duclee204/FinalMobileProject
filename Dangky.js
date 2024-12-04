import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PhoneInput from 'react-native-phone-number-input'; // Import thư viện PhoneInput

// Thành phần checkbox tùy chỉnh
const CustomCheckBox = ({ isChecked, onPress }) => (
  <TouchableOpacity style={styles.checkbox} onPress={onPress}>
    {isChecked && (
      <MaterialCommunityIcons name="check" size={20} color="white" />
    )}
  </TouchableOpacity>
);

const Dangky = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleRegister = () => {
    // Kiểm tra tính hợp lệ của số điện thoại
    if (phoneInput.current?.isValidNumber(phoneNumber)) {
      // Điều hướng sang màn hình xác minh số điện thoại
      navigation.navigate('Xacminhsdt', { phoneNumber: formattedValue });
    } else {
      // Hiển thị thông báo lỗi
      Alert.alert('Số điện thoại không hợp lệ', 'Vui lòng nhập một số điện thoại hợp lệ.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Tiêu đề chào mừng */}
      <Text style={styles.subtitle}>
        Hãy đăng ký ngay để bắt đầu trải nghiệm mua sắm tuyệt vời cùng chúng tôi.
      </Text>

      {/* Form đăng ký */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Họ tên"
          placeholderTextColor="#c9a8a8"
        />

        {/* Thêm thành phần PhoneInput */}
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="VN"
          layout="first"
          placeholder="Nhập số điện thoại"
          onChangeText={(text) => {
            setPhoneNumber(text); // Sử dụng setPhoneNumber
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          withShadow
          autoFocus={false}
          containerStyle={styles.phoneInputContainer}
          textContainerStyle={styles.phoneInputTextContainer}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#c9a8a8"
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#c9a8a8"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="#c9a8a8"
          secureTextEntry
        />

        <View style={styles.termsContainer}>
          <CustomCheckBox 
            isChecked={isSelected} 
            onPress={() => setSelection(!isSelected)} 
          />
          <Text style={styles.termsText}>
            Tôi đồng ý với các{' '}
            <Text style={styles.link}>Điều khoản dịch vụ</Text> và{' '}
            <Text style={styles.link}>Chính sách bảo mật</Text>.
          </Text>
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Đăng ký</Text>
        </TouchableOpacity>

        {/* Đăng ký bằng phương tiện khác */}
        <Text style={styles.orText}>Hoặc đăng ký bằng</Text>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialCommunityIcons name="google" size={24} color="#DB4437" />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialCommunityIcons name="facebook" size={24} color="#4267B2" />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>

        {/* Đăng nhập */}
        <Text style={styles.loginText}>
          Bạn đã có tài khoản?{' '}
          <Text 
            style={styles.loginLink} 
            onPress={() => navigation.navigate('Dangnhap')}
          >
            Đăng nhập
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
  subtitle: {
    fontSize: 16,
    color: '#999',
    marginBottom: 30,
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 3,
  },
  input: {
    backgroundColor: '#fde8e8',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  phoneInputContainer: {
    backgroundColor: '#fde8e8',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  phoneInputTextContainer: {
    backgroundColor: '#fde8e8',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: '#ff8a80',
  },
  termsText: {
    color: '#999',
    fontSize: 14,
    marginLeft: 8,
  },
  link: {
    color: '#ff8a80',
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#ff8a80',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
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
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
    fontSize: 14,
  },
  loginLink: {
    color: '#ff8a80',
    fontWeight: 'bold',
  },
});

export default Dangky;
