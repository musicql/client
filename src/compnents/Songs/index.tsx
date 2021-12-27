
import React from 'react'
import { useSongs } from '../../service/song';

import { HomeSection, HomeSectionWrapper } from '../sharedStyled/styled';
import SongCard from './SongCard';
import { Divider } from './SongCard/styled';
import { SongData } from './type';


function Songs() {
    const { data: songsData } = useSongs()
    return (
        <HomeSectionWrapper>
            <HomeSection>
                {songsData?.map((song: SongData) => 
                <React.Fragment key={song.id}>
                <SongCard {...song} />
                <Divider />
                </React.Fragment>)}
            </HomeSection>
        </HomeSectionWrapper>
    )
}
export default React.memo(Songs)