import React from 'react'
import { TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { addCard } from '../actions'
import { saveCard } from '../utils/api'
import { connect } from 'react-redux'
import { white, black } from '../utils/colors'
import { Button, TextButton, Label } from './../styles'

SubmitBtn = ({ onPress }) => {
    return (
        <Button action={true}
            onPress={onPress}>
            <TextButton>Create Card</TextButton>
        </Button>
    )
}

class AddCard extends React.Component {
    state = {
        question: '',
        answer: ''
    }


    submit = () => {
        const { question, answer } = this.state
        const { deckId, dispatch } = this.props
        if (question === '' || answer === '') {
            alert('Filling in both fields is required')
            return
        }

        dispatch(addCard(deckId, question, answer))
        this.setState({
            question: '',
            answer: ''
        })
        saveCard(deckId, question, answer)
    }

    render() {
        const { question, answer } = this.state

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Label>Question</Label>
                <TextInput
                    value={question}
                    style={styles.input}
                    onChangeText={(question) => this.setState({ question })}
                    autoFocus={true}
                />
                <Label>Answer</Label>
                <TextInput
                    value={answer}
                    style={styles.input}
                    onChangeText={(answer) => this.setState({ answer })}
                />
                <SubmitBtn onPress={this.submit} />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40
    },
    
    input: {
        width: 250,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: black,
        marginBottom: 15
    },
    submitBtn: {
        backgroundColor: black,
        padding: 10,
        borderRadius: 0,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 100
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    }
})

function mapStateToProps(state, { navigation }) {
    const { deckId } = navigation.state.params
    return {
        deckId
    }
}

export default connect(mapStateToProps)(AddCard)