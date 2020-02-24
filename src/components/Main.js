import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";


export default class Main extends Component {

    state = {
        name: "hello",
    }

    render() {
        return (
            <Grid>
                <Row size={2}>
                    <Col>
                    <Image resizeMode='cover' style={[styles.image]} source={require('../assets/shoes_shop/shoe1.jpg')} />

                    </Col>

                </Row>
                <Row size={1}>
                    <Col>
                        <Image  style={[styles.image]} source={require('../assets/shoes_shop/shoe1.jpg')} />
                    </Col>
                    <Col>
                        <Image  style={[styles.image]} source={require('../assets/shoes_shop/shoe2.jpg')} />
                    </Col>

                </Row>
                <Row size={1}>
                    <Col>
                        <Image  style={[styles.image]} source={require('../assets/shoes_shop/shoe3.jpg')} />
                    </Col>
                    <Col>
                        <Image  style={[styles.image]} source={require('../assets/shoes_shop/shoe4.jpg')} />
                    </Col>

                </Row>
            </Grid>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 150,

    },

});