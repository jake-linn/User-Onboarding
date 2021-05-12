import './App.css';
import Form from './Form';
import styled from 'styled-components';


const StyledApp = styled.div `




h1{
margin: 15px;
font-size: 100px;
color: #e01f9f;

}


`



function App() {
  return (
    <StyledApp>

    <h1> Enroll in Fight Club </h1>
    <Form/>



    </StyledApp>
   
  );
}

export default App;
