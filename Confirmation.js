import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Confirmation = () => {
    const navigation = useNavigation();

    // Dữ liệu mẫu cho giỏ hàng
    const [cartItems] = useState([
        { id: '1', name: 'Tulip', quantity: 7, price: 20500 },
        { id: '2', name: 'Daffodil', quantity: 10, price: 30000 },
    ]);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleOrder = () => {
        const newOrder = {
            items: cartItems, // Lưu toàn bộ dữ liệu giỏ hàng
            date: new Date().toLocaleDateString('vi-VN'),
            totalAmount: calculateTotal().toLocaleString('vi-VN') + 'đ',
            payment: 'Tiền mặt',
        };

        Alert.alert(
            "Đặt hàng thành công",
            "Bạn đã đặt hàng thành công!",
            [
                {
                    text: "OK",
                    onPress: () => {
                        // Điều hướng về Trangchu
                        // navigation.navigate('Trangchu'); // Bỏ đi vì giờ ta sẽ điều hướng tới Thongbao ngay

                        // Lưu thông tin đơn hàng và điều hướng tới màn hình Thongbao
                        navigation.navigate('Trangchu', { newOrder });
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Xác nhận đơn hàng</Text>
            {/* Tóm tắt đơn hàng */}
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemRow}>
                        <Text>{item.quantity}x {item.name}</Text>
                        <Text>{(item.price * item.quantity).toLocaleString('vi-VN')}đ</Text>
                    </View>
                )}
            />
            <View style={styles.totalSection}>
                <Text style={styles.totalText}>Tổng thanh toán</Text>
                <Text>{calculateTotal().toLocaleString('vi-VN')}đ</Text>
            </View>

            <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
                <Text style={styles.orderButtonText}>Tạo đơn hàng</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 30,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    totalSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        marginTop: 10,
    },
    totalText: {
        fontWeight: 'bold',
    },
    orderButton: {
        backgroundColor: '#e91e63',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    orderButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Confirmation;
