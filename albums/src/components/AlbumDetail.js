import React from 'react';
import { View, Text, Image, Button, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbnailCountainerStyle,
        headerTextStyle,
        albumStyle,
        buttonStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View 
                    style={thumbnailCountainerStyle}>
                </View>
                <View styles={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
            </CardSection>
            <CardSection>
                <Image
                style={albumStyle}
                source={{ uri: image }} 
                />
            </CardSection>

        </Card>
    )
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
        fontWieght: 20
    },
    albumStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    buttonStyle: {
        backgroundColor: "rgba(92, 99,216, 1)",
        width: 300,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailCountainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail;
