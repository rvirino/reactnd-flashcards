import React from 'react'
import { FlatList } from 'react-native'
import { receiveDecks } from '../actions'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { AppLoading } from 'expo'
import DeckList from './DeckList'
import { ListDecks } from '../styles';

class DeckLists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        const { dispatch } = this.props
        getDecks()
            .then((decks) => dispatch(receiveDecks(decks)))
            .then(() => this.setState(() => ({ loading: false })))
    }

    render() {
        const { loading } = this.state
        const { decks } = this.props
        if (loading === true)
            return <AppLoading />

        return (
            <ListDecks>
                <FlatList
                    data={Object.keys(decks).map((id) => { return { key: id } })}
                    renderItem={({ item }) => (
                        <DeckList key={item.key} id={item.key} />
                    )}
                />
            </ListDecks>
        )
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckLists)