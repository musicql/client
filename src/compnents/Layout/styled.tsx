import styled from "styled-components";

interface HeaderContainerProps {
    justify?: string;
}
const HeaderContainer = styled.div<HeaderContainerProps>`
    width: 90%;
    display: flex;
    justify-content: ${({ justify }) => justify ? justify : 'end'};
    margin: auto;
    flex-direction: row;
    justify-content: start;
    align-items:center;
    padding: 1rem;
      max-width: 75rem;
    
  `;
const Header = styled.header`
    width: 100%;
    background-color: #000000b3;
    display: flex;
    position: sticky;
    flex-direction:column;
    top: 0;
    right: 0;
    z-index: 1000;
    padding-bottom:1rem;
    box-shadow: #000000f5 0px 20px 20px 20px;
  `;
const HeaderMain = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
  
    line-height: 4rem;
    text-align: center;
    color: #fafbfc;
    margin:0;
    margin-left: 1rem;

      font-size: 1.875rem;
    
  `;

const LayoutWrapper = styled.div`
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 100vh;
      background:black;
  `;
const Main = styled.main`
      flex: 1;
      padding: 0rem 1.5rem 0rem 1.5rem;
      display: flex;
      flex-direction: column;
      max-height: calc(100vh - 112px);
      max-width: 75rem;
      margin: auto;
  `;

export { HeaderContainer,Header,HeaderMain,LayoutWrapper,Main}