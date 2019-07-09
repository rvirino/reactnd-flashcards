import React from 'react'
import { ContainerDeck, Button, Line, Question, Answer, TextButton } from '../styles';

export default function Card(props) {
    const { index, deck, answer } = props
    const card = deck.questions[index]

    return (
        <ContainerDeck>
            <Question>{card.question}</Question>
            <Answer>{card.answer}</Answer>
            <Line>
                <Button correct={true}
                    onPress={() => answer('correct')}
                >
                    <TextButton>Correct</TextButton>
                </Button>
                <Button correct={false}
                    onPress={() => answer('incorrect')}
                >
                    <TextButton>Incorrect</TextButton>
                </Button>
            </Line>
        </ContainerDeck>
    )
}
