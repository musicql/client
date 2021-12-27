import React from 'react'
import { useArtists } from '../../service/artist';
import GeneralCard from '../GeneralCard';
import { HomeSection, HomeSectionWrapper } from '../sharedStyled/styled';
import { ArtistData } from './type';


 function Artists() {
        const {data:artistsData} = useArtists()
    return (
        <HomeSectionWrapper>
        <HomeSection>
            {artistsData?.map((artist:ArtistData)=><GeneralCard {...artist} key={artist.id}/>)}
        </HomeSection>
        </HomeSectionWrapper>
    )
}
export default React.memo(Artists)