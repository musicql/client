import styled from "styled-components"
import { CustomerServiceOutlined } from '@ant-design/icons';
const SongCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;

    padding: 1rem;
    background: black;
    margin: 1rem 0;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover{
        background: #ffffff58;
    }
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    padding: 0 0.5rem;
    margin: 0;
    flex: 1;
`
const CardTitle = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    margin: 0;
    margin-bottom: 0.5rem;
`
const CardSubText = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 1rem;
    font-weight: normal;
    text-align: left;
    margin: 0;
`
const StyledSongIcon = styled(CustomerServiceOutlined)`
color: white;
font-size: 2rem;
margin-top: 0.25rem;
    
`
const Divider = styled.div`
display: flex;

width: 100%;
height: 0;
box-shadow: #ffffff6c 0px 0px 15px 1px;
margin: 0.5rem 0;

    
`
export {SongCardWrapper,CardTitle,CardSubText,StyledSongIcon,TextWrapper,Divider}