import React from "react";
import { Header, HeaderContainer, HeaderMain, LayoutWrapper, Main } from "./styled";
import { CustomerServiceOutlined } from '@ant-design/icons';
type LayoutProps = {
  children: JSX.Element,
};
const Layout=({ children }:LayoutProps) =>{
  return (
    <LayoutWrapper>
      <Header>
        <HeaderContainer>
            <CustomerServiceOutlined style={{color:'white' ,fontSize:"3.25rem",}} />
            <HeaderMain>
              MusicQL
            </HeaderMain>
        </HeaderContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  );
}
export default React.memo(Layout)