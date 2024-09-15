import './App.css';
import Form from './Form';
import styled from 'styled-components';


const StyledPage = styled.div `
h1{
margin: 15px;
font-size: 100px;
color: blue;


}

`

function App() {
  return (
    <StyledPage>
<h1> Enroll in Fight Club</h1>
<Form/>

    </StyledPage>
  );
}

export default App;
