import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: 1rem;
  text-align: center;
  color: #666;
  font-size: 12px;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    Copyright 2021 John Doe. All rights reserved.
    <br />
    Blog template by Seung hyun Hwang.
  </FooterContainer>
);

export default Footer;
