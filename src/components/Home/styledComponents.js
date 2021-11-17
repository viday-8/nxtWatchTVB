import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
  overflow-y: auto;
  background-color: ${props => (props.dark ? '#22241E' : 'white')};
`

export const HomeMain = styled.div`
  height: 100vh;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
`

export const SAnsCon = styled.div`
  height: 93%;
  display: flex;
`
export const HomeCon = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
`

export const SearchInput = styled.input`
  background-color: ${props => (props.dark ? 'black' : 'white')};
  color: ${props => (props.dark ? 'white' : 'black')};
  padding: 15px;
  height: 10px;
  width: 300px;
  border: solid 1px #909090;
`
export const SearchBtn = styled.button`
  width: 80px;
  height: 32px;
  display: flex;
  background-color: ${props => (props.dark ? '#22241E' : '#ebebeb')};
  justify-content: center;
  border: solid 1px #909090;
  align-items: center;
  cursor: pointer;
`
export const Search = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ChannelCon = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
`
export const VideoCon = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const VideoItem = styled.li`
  width: 320px;
  margin-right: 20px;
  margin-bottom: 0px;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    background: ${props => (props.dark ? '#161711' : '#ebebeb')};
  }
`

export const Logo = styled.img`
  margin-top: 20px;
  margin-right: 10px;
`
export const Title = styled.p`
  font-size: 15px;
  color: ${props => (props.dark ? 'white' : '#383838')};
`
export const VideoListCon = styled.div`
  overflow-y: scroll;
  height: 100%;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
`
export const Lines = styled.p`
  font-size: 12px;
  margin-top: 0;
  color: ${props => (props.dark ? '#d7dfe9' : '#909090')};
`
export const VandT = styled.div`
  display: flex;
`
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 93%;
`
export const FailureMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 93%;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
`
export const SideHCon = styled.div`
  width: 20%;
  height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`
