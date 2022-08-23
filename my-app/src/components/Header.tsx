import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'


export default function HeaderView() {
    return (
        <Header>
        <Container>
        <Title>MKS</Title>
        <Text>Sistemas</Text>
        <Btn>
          <FontAwesomeIcon width={20} height={20} icon={faCartArrowDown} />
          <Span className="btn-cart-badge"></Span>
        </Btn>
        </Container>
      </Header>
    )
}

const Header = styled.header`
  display: flex;
  background: #0F52BA;
  width: 100%;
  padding: 0 2rem;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  text-align: center;
  align-items: center;
`;
const Title = styled.h1`
  position: absolute;
  left: 4.51%;
  right: 86.6%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;
`;
const Text = styled.p`
margin-left: 160px;
padding-top: 0.5rem;
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 19px;
`;
const Btn = styled.button`
  width: 90px;
  height: 45px;
  background: #FFFFFF;
  color: black;
  cursor: pointer;
  border-radius: 8px;
  text-align: center;
  margin-left: 1050px;
  margin-right: 50px;
`;
const Span = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: none;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0);
  color: #ffffff;
`;