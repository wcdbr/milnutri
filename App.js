// imports
import styled from 'styled-components/native';
import AppHeader from './components/molecules/AppHeader';

// component function
export default function App() {
  return (
    <AppWrapper>
      <CustomText>
        alow
      </CustomText>
      <AppHeader/>
    </AppWrapper>
  );
}

// component styles
const AppWrapper = styled.View`
  margin-top: 41px;
  
  flex: 1;
`
const CustomText = styled.Text`
  width: 100%;
  align-items: center;
  background-color: red;
`