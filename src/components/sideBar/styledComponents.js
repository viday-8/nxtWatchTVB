import styled from 'styled-components'

export const SideMain = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.dark ? '#22241E' : 'white')};
`

export const LinkCon = styled.div`
  width: 100%;
  display: flex;
  padding-left: 20px;
  height: 40px;
  justify-content: flex-start;
  color: ${props => (props.dark ? 'White' : props.active)};
  background-color: ${props =>
    props.dark ? props.activeDark : props.activeLight};
  align-items: center;
`

export const Name = styled.p`
  margin-left: 20px;
`

export const Info = styled.div`
  color: ${props => (props.dark ? 'white' : '#0f0f0f')};
  padding: 20px;
`
export const Contact = styled.p`
  font-weight: bolder;
  font-size: 15px;
`
export const Sm = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
`
