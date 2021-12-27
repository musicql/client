import React from "react"
import { CardTitle, GeneralCardWrapper, StyledImg, StyledImgWrapper } from "./styled"
import { GeneralCardType } from "./type"

const GeneralCard = ({name,imgUrl,...props}:GeneralCardType)=>{

    return(
        <GeneralCardWrapper>
            <StyledImgWrapper>
            <StyledImg src={imgUrl}/>
            </StyledImgWrapper>
            <CardTitle>
                {name}
            </CardTitle>
        </GeneralCardWrapper>
    )
}
export default React.memo(GeneralCard)