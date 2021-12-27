import React from 'react'
import styled from 'styled-components'
import Albums from '../../Albums'
import Artists from '../../Artists'
import Layout from '../../Layout'
import Songs from '../../Songs'
const HomeContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    height: 100%;
    overflow:hidden;
`
export default function Home() {
    return (
        <Layout>
            <HomeContentWrapper>
            <Artists />
            <Albums/>

            <Songs/>

            </HomeContentWrapper>
        </Layout>
    )
}
