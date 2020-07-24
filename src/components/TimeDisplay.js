import React from 'react';
import styled from 'styled-components'

const TimeDiv = styled.div`
  padding: 2em 0;
  text-align: center;
  margin: 1em;
  border-radius: 3px;
  font-weight: 600;
  background-color: ${p => p.theme.colors.primary};
`

const TimeText = styled.span`
  color: ${p => p.theme.colors.text};
  width: 6vw;
  font-size: 4em;
`

const TimeUnitText = styled(TimeText)`
  font-size: 1em;
  margin: 0 10px;
`

const Seperator = styled.span`
  width: 20px;
  font-size: 4em;
`

const TimeFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TimeDisplay = ({ days, hours, minutes, seconds }) => {
    // formats to 2-digit num with prepended 0
    function fmt(time) {return ("0" + time).slice(-2)}

    return (
        <TimeDiv>
            <TimeFlex>
                <TimeText>{fmt(days)}</TimeText>
                <Seperator>:</Seperator>
                <TimeText>{fmt(hours)}</TimeText>
                <Seperator>:</Seperator>
                <TimeText>{fmt(minutes)}</TimeText>
                <Seperator>:</Seperator>
                <TimeText>{fmt(seconds)}</TimeText>
            </TimeFlex>
            <TimeFlex>
                <TimeUnitText>day</TimeUnitText>
                <TimeUnitText>hr</TimeUnitText>
                <TimeUnitText>min</TimeUnitText>
                <TimeUnitText>sec</TimeUnitText>
            </TimeFlex>
        </TimeDiv>
    );
}

export default TimeDisplay