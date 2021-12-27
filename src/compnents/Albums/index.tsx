import React from 'react'
import { useAlbums } from '../../service/album';
import GeneralCard from '../GeneralCard';
import { HomeSection, HomeSectionWrapper } from '../sharedStyled/styled';
import { AlbumData } from './type';


 function Albums() {
        const {data:artistsData} = useAlbums()
    return (
        <HomeSectionWrapper>
        <HomeSection>
            {artistsData?.map((album:AlbumData)=><GeneralCard {...album} key={album.id}/>)}
        </HomeSection>
        </HomeSectionWrapper>
    )
}
export default React.memo(Albums)