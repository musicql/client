import styled from "styled-components"

const HomeSectionWrapper = styled.div`
    display: block;

    height: 100%;
    max-height:  100%;
    overflow-y: auto;
    overflow-x: hidden;
`
const HomeSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    padding: 1rem;
    
`
export {HomeSectionWrapper,HomeSection}