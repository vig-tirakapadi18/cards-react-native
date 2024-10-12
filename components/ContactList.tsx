import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const ContactList = (): React.JSX.Element => {
    const contacts = [
    {
        uid: 1,
        name: 'VIG',
        status: 'Chilling in wonderland!',
        imgUrl: 'https://cdn.pixabay.com/photo/2019/10/30/14/51/fall-4589724_1280.jpg',
    },
    {
        uid: 2,
        name: 'VIS',
        status: 'In the Brookefield!',
        imgUrl: 'https://cdn.pixabay.com/photo/2019/10/30/14/51/fall-4589724_1280.jpg',
    },
    {
        uid: 3,
        name: 'Alpha',
        status: 'Alpha starts with A!',
        imgUrl: 'https://cdn.pixabay.com/photo/2019/10/30/14/51/fall-4589724_1280.jpg',
    },
    {
        uid: 4,
        name: 'Beta',
        status: 'Beta starts with B!',
        imgUrl: 'https://cdn.pixabay.com/photo/2019/10/30/14/51/fall-4589724_1280.jpg',
    },
    {
        uid: 5,
        name: 'Gamma',
        status: 'Gamma starts with G!',
        imgUrl: 'https://cdn.pixabay.com/photo/2019/10/30/14/51/fall-4589724_1280.jpg',
    },
];

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView  style={styles.container} scrollEnabled={true}>
                {contacts.map(({uid, name, status, imgUrl}) => (
                    <View key={uid} style={styles.contactContainer}>
                        <Image source={
                            {uri: imgUrl}
                        } style={styles.img} />
                        <View>
                            <Text style={styles.contactName}>{name}</Text>
                            <Text style={styles.contactStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default ContactList;

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    headingText: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'black',
    },
    img:{
        height: 60,
        width: 60,
        borderRadius: 100,
        zIndex: 2,
    },
    contactContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        padding: 10,
        marginBottom: 5,
        borderRadius: 5,
        zIndex: 1,
    },
    contactName: {
        color: 'lightgray',
        fontSize: 18,
        fontWeight: '700',
    },
    contactStatus: {
        color: 'gray',
        fontWeight: '300',
    },
});
