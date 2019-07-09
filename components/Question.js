import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { black } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { connect } from 'react-redux'
import Card from './Card'
import Score from './Score'
import { ContainerDeck } from '../styles';

class Question extends React.Component {
    state = {
        index: 0,
        correct: 0,
        incorrect: 0
    }


    componentDidMount() {
        clearLocalNotification()
            .then(setLocalNotification)
    }

    restart = () => {
        this.setState({
            index: 0,
            correct: 0,
            incorrect: 0,
        })
    }

    handleAnswer = (result) => {
        this.setState((state) => ({
            index: state.index + 1,
            correct: result === 'correct' ? state.correct + 1 : state.correct,
            incorrect: result === 'incorrect' ? state.incorrect + 1 : state.incorrect,
        }))
    }


    render() {
        const { index, correct, incorrect } = this.state
        const { deckId, deck } = this.props
        const showCard = index < deck.questions.length ? true : false

        return (
            <ContainerDeck style={styles.center}>
                <Text style={styles.count}>{showCard ? index + 1 : index}/{deck.questions.length}</Text>
                {showCard ?
                    <Card
                        deck={deck}
                        index={index}
                        answer={this.handleAnswer}
                    />
                    :
                    <Score
                        deck={deck}
                        deckId={deckId}
                        restart={this.restart}
                        correct={correct}
                        incorrect={incorrect}
                    />
                }
            </ContainerDeck>
        )

    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    count: {
        alignSelf: 'flex-start',
        marginTop: 10,
        marginLeft: 10,
        color: black,
        fontWeight: 'bold',
        fontSize: 18
    }
})

function mapStateToProps(state, { navigation }) {
    const { deckId } = navigation.state.params
    return {
        deckId,
        deck: state[deckId]
    }
}

export default connect(mapStateToProps)(Question)