import React from "react"

import { SongCardType } from "./type"
import {SongCardWrapper,CardTitle,CardSubText,StyledSongIcon,TextWrapper} from './styled' 
const GeneralCard = ({ name, artist:{name:artistName}, ...props }: SongCardType) => {

    return (
        <SongCardWrapper>
            <StyledSongIcon/>
            <TextWrapper>
            <CardTitle>
                {name}
            </CardTitle>
            <CardSubText>
                {artistName}
            </CardSubText>

            </TextWrapper>
        </SongCardWrapper>
    )
}
export default React.memo(GeneralCard)