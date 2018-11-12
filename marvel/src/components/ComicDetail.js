import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const ComicDetail = ({comic}) => {
    const { name, resourceURI, thumbnail, items, description } = comic;
    console.log(thumbnail)
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbnailCountainerStyle,
        headerTextStyle,
        albumStyle,
    } = styles;

    return (
        <Card>
            <CardSection>
                <View styles={headerContentStyle}>
                    <Text style={headerTextStyle}>{name}</Text>
                    <Text>{description}</Text>
                </ View>
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
        fontWeight: 'bold'
    },
    albumStyle: {
        height: 300,
        flex: 1,
        width: null
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

export default ComicDetail;
