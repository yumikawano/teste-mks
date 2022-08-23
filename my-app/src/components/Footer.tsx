import styled from 'styled-components'

export default function FooterView() {
    return (
        <Footer>
        <P>
          MKS sistemas © Todos os direitos reservados
        </P>
      </Footer>
    )
}

const Footer = styled.footer`
  display: flex;
  flex: 1;
  height: 34px;
  padding: 2rem 0;
  background:  #EEEEEE;
  justify-content: center;
  align-items: center;
`;
const P = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`