import React from 'react';
import styled from 'styled-components'
import GlobalStyle from './theme/GlobalStyle'
import ThemeProvider from './theme/ThemeProvider'

// temp for testing
import ProgressBar from './components/ProgressBar'
import TimeDisplay from './components/TimeDisplay'

const ExampleText = styled.div`
  color: ${p => p.theme.colors.text}
`

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <ExampleText>Live website.</ExampleText>
        <TimeDisplay days={1} hours={23} minutes={0} seconds={40}></TimeDisplay>
        <ProgressBar percent={33}></ProgressBar>
      </ThemeProvider>
    </>
  );
}

export default App;
