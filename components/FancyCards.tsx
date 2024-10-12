import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const FancyCard = (): React.JSX.Element => {
    const img = 'https://cdn.pixabay.com/photo/2024/09/27/09/03/bird-9078403_1280.jpg';

    return (
        <View>
            <Text style={styles.headingText}>Fancy Card</Text>
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: img}} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>A BIRD</Text>
                    <Text style={styles.cardDesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla suscipit accusantium veniam fuga reiciendis natus cupiditate quam facilis, repudiandae adipisci voluptas quae sapiente qui tempora asperiores illo est ab necessitatibus nemo. Voluptas deserunt nesciunt ex odit a reprehenderit sint aliquid quae placeat ipsum, quo perferendis, porro consectetur, distinctio neque.</Text>
                </View>
                <Text style={styles.cardFooter}>This is Bird's Life!</Text>
            </View>
        </View>
    );
};

export default FancyCard;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'black',
    },
    container: {
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    card: {},
    cardElevated: {},
    img: {
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardBody: {
        padding: 10,
    },
    cardTitle: {
        textAlign: 'center',
        backgroundColor: 'salmon',
        color: 'white',
        fontSize: 20,
        borderRadius: 5,
        fontWeight: '700',
    },
    cardDesc: {
        color: 'black',
    },
    cardFooter: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 10,
        fontWeight: '700',
        color: 'salmon',
    },
});
// https://cdn.pixabay.com/photo/2024/09/27/09/03/bird-9078403_1280.jpg
