import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const ThongbaoScreen = ({ route }) => {
    // Dữ liệu mẫu ban đầu cho các giao dịch
    const initialTransactions = [
        {
            id: '1',
            image: require('../Appbanhoa/Image/flower11.png'),
            date: '17/04/2024',
            time: '14:30 - Nhận tại cửa hàng',
            amount: '88.000đ',
            payment: 'Tiền mặt',
        },
        
    ];

    const [transactions, setTransactions] = useState(initialTransactions);

    useEffect(() => {
        if (route.params?.newOrder) {
            // Thêm đơn hàng mới vào danh sách
            setTransactions((prevTransactions) => [route.params.newOrder, ...prevTransactions]);
        }
    }, [route.params?.newOrder]);

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.idText}>Mã đơn: {item.id}</Text>
                <Text style={styles.dateText}>Ngày: {item.date}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
                <View style={[styles.row, { flexDirection: 'column' }]}>
                    <Text style={styles.amountText}>Số tiền: {item.amount}</Text>
                    <Text style={styles.paymentText}>Thanh toán: {item.payment}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <FlatList
            data={transactions}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={() => (
                <Text style={styles.headerText}>This month</Text>
            )}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    image: {
        width: 100,
        height: '100%',
    },
    details: {
        flex: 1,
        padding: 10,
    },
    idText: {
        fontSize: 12,
        color: '#4CAF50',
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    timeText: {
        fontSize: 14,
        color: '#666',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    amountText: {
        fontSize: 16,
        color: '#FF5722',
    },
    paymentText: {
        fontSize: 14,
        color: '#999',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        color: '#333',
        marginTop: 30,
    },
});

export default ThongbaoScreen;
