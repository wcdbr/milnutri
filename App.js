// imports:
import styled from 'styled-components/native';
import Home from './components/pages/Home.js';

// component function:
export default function App() {
  return (
    <AppWrapper>

      <Home/>
      
    </AppWrapper>
  );
}

// component styles:
const AppWrapper = styled.View`
  box-sizing: border-box;
`