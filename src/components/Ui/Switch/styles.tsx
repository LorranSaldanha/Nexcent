import styled from 'styled-components'

export const WrapperToggleSwitch = styled.div`
  width: 3.8rem;
  height: 3.8rem;
  padding: 0.9rem;
  border-radius: 100%;
  background: ${(props) => props.theme.background.Bg1St};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease;

  svg {
    font-size: 3.4rem;
    color: ${(props) => props.theme.background.Tx1St};
  }
`
