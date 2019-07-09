import React from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { ContainerDeck, Button, TextButton } from '../styles';

class DeckList extends React.Component {
    render() {
        const { id, title, count, navigation } = this.props

        return (
            <ContainerDeck>
                <Button action={true}
                    onPress={() => navigation.navigate('Deck', { deckId: id, deckName: title })}
                >
                    <TextButton>{title} ({count} {count === 1 ? `card` : `cards`})</TextButton>

                </Button>
            </ContainerDeck>
        )
    }
}


function mapStateToProps(decks, props) {
    const { id } = props
    return {
        id,
        title: decks[id].title,
        count: decks[id].questions.length
    }
}

export default withNavigation(connect(mapStateToProps)(DeckList))