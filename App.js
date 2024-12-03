// imports
import styled from 'styled-components/native';
import AppHeader from './components/molecules/Header';

// component function
export default function App() {
  return (
    <AppWrapper>
      <AppHeader/>
    </AppWrapper>
  );
}

// component styles
const AppWrapper = styled.View`
  flex: 1;
  background-color: #fff;
`