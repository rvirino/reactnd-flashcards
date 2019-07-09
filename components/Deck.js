import React from 'react'
import { connect } from 'react-redux'
import { ContainerDeck, Counter, Button, TextButton } from './../styles'

class Deck extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { deckName } = navigation.state.params
        return {
            title: deckName
        }
    }

    render() {
        const { deckId } = this.props
        const { questions, title } = this.props.deck
        
        return (
            <ContainerDeck>
                <Counter>{questions.length} {questions.length === 1 ? `card` : `cards`}</Counter>
                <Button action={true}
                    onPress={() => this.props.navigation.navigate('AddCard', { deckId: deckId })}
                >
                    <TextButton>Add Card</TextButton>
                </Button>
                <Button action={true}
                    onPress={() => (questions.length === 0 ? alert('Get started by adding few cards!') : this.props.navigation.navigate('Question', { deckId: deckId }))}
                >
                    <TextButton>Start Quiz!</TextButton>
                </Button>
            </ContainerDeck>
        )
    }
}


function mapStateToProps(state, { navigation }) {
    const { deckId } = navigation.state.params
    return {
        deckId,
        deck: state[deckId],
    }
}

export default connect(mapStateToProps)(Deck)