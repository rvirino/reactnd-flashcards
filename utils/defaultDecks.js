import { AsyncStorage } from 'react-native'

export const DECKS_KEY = 'FlashCards'

let decks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is create-react-app?',
                answer: 'create-react-app is the official CLI (Command Line Interface) for React to create React apps with no build configuration.'
            },
            {
                question: 'What is Redux?',
                answer: 'The basic idea of Redux is that the entire application state is kept in a single store. The store is simply a javascript object. The only way to change the state is by firing actions from your application and then writing reducers for these actions that modify the state. The entire state transition is kept inside reducers and should not have any side-effects.'
            },
        ]
    },
    Javascript: {
        title: 'Javascript',
        questions: [
            {
                question: 'What is JavaScript?',
                answer: 'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language'
            },
            {
                question: 'Which company developed JavaScript?',
                answer: 'Netscape is the software company who developed JavaScript.'
            }
        ]
    }
}

function setData() {
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
    return decks
}

export function formatDecksResults(results) {
    return results === null ? setData() : JSON.parse(results)
}