import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const Deck = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ContainerDeck = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex: 1;
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: black;
`;

export const Counter = styled.Text`
    margin-top: 10px;
    font-size: 25px
    color: gray;
`;

export const Button = styled.TouchableHighlight`
    
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
    background: ${props => props.correct ? '#27ae60' : (props.action ? '#2980b9' : '#e74c3c')};
    border-radius: 10px;
`;

export const TextButton = styled.Text`
    font-size: 22px;
    color: rgba(255,255,255,0.8);
`;

export const ListDecks = styled.View`
    display: flex;
    align-self: stretch;
`;

export const CardQuestion = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScoreText = styled.Text`
    font-weight: bold;
    font-size: ${props => props.result ? '28px' : '22px'};
    color: ${props => props.correct ? '#27ae60' : (props.result ? '#000' : '#c0392b')};
`;

export const Label = styled.Text`
    color: #3498db;
    font-size: 18px;
`;

export const Line = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Question = styled.Text`
   font-size: 28px;
   text-align: center;
`;

export const Answer = styled.Text`
   font-size: 22px;
   text-align: justify;
`;