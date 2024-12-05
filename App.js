// imports:
import styled from 'styled-components/native';
import AppHeader from './components/molecules/AppHeader';

// component function:
export default function App() {
  return (
    <AppWrapper>
      <AppHeader/>
    </AppWrapper>
  );
}

// component styles:
const AppWrapper = styled.View`
  box-sizing: border-box;
`