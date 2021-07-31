import React from "react";
import styled from "styled-components/native"
import {Text, StyleSheet} from 'react-native';
import { Card } from "react-native-paper";

const Title = styled.Text`
    padding: 16px;
    color: red;
`;
 
export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "https://images-na.ssl-images-amazon.com/images/G/01/books/editorial/ABR/celebrity_picks/2021-4/cg_celeb_picks_apr2021_440x344.jpg"
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;

    return(
        <Card elevation={5} style = {styles.card}>
            <Card.Cover key={name} style={styles.card} source={{ uri: photos[0] }}/>
            
            <Title>{name}</Title>
        </Card>
        
    )
}

const styles = StyleSheet.create({
    card: {backgroundColor: "white"},
    cover: {padding: 20, backgroundColor: "white"},
   
})
