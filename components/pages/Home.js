// imports:
import styled from 'styled-components/native';
import AppHeader from '../molecules/AppHeader';

// component function:
export default function App() {
  return (
    <HomeWrapper>

      <AppHeader/>
      
    </HomeWrapper>
  );
}

// component styles:
const HomeWrapper = styled.View`
  box-sizing: border-box;
`