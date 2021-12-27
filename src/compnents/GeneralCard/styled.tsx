import styled from "styled-components"
const GeneralCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    background: black;
    margin: 1rem 0;
    border-radius: 1.5rem;
    cursor: pointer;
    &:hover{
        background: #ffffff58;
    }
`
const StyledImg = styled.img`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    position: absolute;
    top: 0;
    left: 0;
`
const StyledImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height:0;
    padding-top: 100%;
    border-radius: 1rem;
    position: relative;
    box-shadow: #ffffff7a 0px 0px 12px 1px;
`
const CardTitle = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`
export {GeneralCardWrapper,StyledImg,StyledImgWrapper,CardTitle}