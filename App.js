import React from 'react'
import { createStore } from 'redux'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import DeckLists from './components/DeckLists'
import Deck from './components/Deck'
import Question from './components/Question'
import { white, black } from './utils/colors'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { setLocalNotification } from './utils/helpers'
import { Container } from './styles'

const store = createStore(reducer)

const Tabs = createBottomTabNavigator({
    DeckLists: {
        screen: DeckLists,
        navigationOptions: {
            tabBarLabel: 'All Decks'
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add Deck'
        }
    }
}, {
        tabBarOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#2c3e50',
            labelStyle: {
                fontSize: 22,
                paddingBottom: 10,
                fontWeight: 'bold',
            }
        }
    })

const Stack = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    },
    AddDeck: {
        screen: AddDeck
    },
    AddCard: {
        screen: AddCard
    },
    Deck: {
        screen: Deck
    },
    Question: {
        screen: Question
    }
}, {
        navigationOptions: {
            headerTintColor: black,
            headerTitleStyle: {
                fontSize: 22,
            }
        },
        cardStyle: {
            backgroundColor: white
        }
    })

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification()
    }
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <Container>
                    <Stack />
                </Container>
            </Provider>
        )
    }
}


