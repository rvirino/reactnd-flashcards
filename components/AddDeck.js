import React from 'react'
import { TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { addDeck } from '../actions'
import { saveDeck } from '../utils/api'
import { connect } from 'react-redux'
import { black } from '../utils/colors'
import { generateUID } from '../utils/helpers'
import { Button, Label, TextButton } from './../styles'

SubmitDeckBtn = ({ onPress }) => {
    return (
        <Button correct={true}
            onPress={onPress}>
            <TextButton>Create Deck</TextButton>
        </Button>
    )
}

class AddDeck extends React.Component {
    state = {
        nameOfDeck: ''
    }

    submit = () => {
        const { nameOfDeck } = this.state
        if (nameOfDeck === '') {
            alert('Please, fill the deck name!')
            return
        }
        const deckId = generateUID()
        const title = nameOfDeck
        const newDeck = {
            title: nameOfDeck.trim(),
            questions: []
        }
        this.props.dispatch(addDeck(deckId, newDeck))
        this.setState({ nameOfDeck: '' })
        this.toDeck(deckId, title)
        saveDeck(deckId, newDeck)
    }

    toDeck = (id, title) => {
        this.props.navigation.navigate('Deck', { deckId: id, deckName: title })
    }

    render() {
        const { nameOfDeck } = this.state

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Label>Name of deck</Label>
                <TextInput
                    value={nameOfDeck}
                    style={styles.input}
                    onChangeText={(nameOfDeck) => this.setState({ nameOfDeck })}
                />
                <SubmitDeckBtn onPress={this.submit} />
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    question: {
        fontSize: 30,
        marginLeft: 20,
        marginRight: 20,
        color: black
    },
    input: {
        width: 250,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: black,
        margin: 20
    },
    submitBtn: {
        backgroundColor: black,
        padding: 10,
        borderRadius: 0,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 60
    }
})

export default connect()(AddDeck)