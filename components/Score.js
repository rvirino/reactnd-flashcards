import React from 'react'
import { withNavigation } from 'react-navigation'
import { ContainerDeck, Button, TextButton, ScoreText } from '../styles';

function Score(props) {
    const { correct, incorrect, restart, deck, deckId, navigation } = props

    return (
        <ContainerDeck>
            <ScoreText correct={true}>Correct: {correct}</ScoreText>
            <ScoreText correct={false}>Incorrect: {incorrect}</ScoreText>
            <ScoreText result={true}>{Math.round((correct / deck.questions.length) * 100)}%</ScoreText>

            <Button action={true}
                onPress={restart}
            >
                <TextButton>Restart Quiz</TextButton>
            </Button>

            <Button action={true}
                onPress={() => navigation.navigate('Deck', { deckId: deckId, deckName: deck.title })}
            >
                <TextButton>Back to Deck</TextButton>
            </Button>
        </ContainerDeck>
    )
}

export default withNavigation(Score)