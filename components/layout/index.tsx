import { Paper, styled } from '@material-ui/core'
import React, { PropsWithChildren } from 'react'
import Header from './Header'

export default function Layout({ children }: PropsWithChildren<{}>) {
    return (
        <Container>
            <Header appName="Bytin'" />
            <Main>
                {children}
            </Main>
        </Container>
    )
}

const Container = styled(Paper)({
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    height: "100vh",
    flexDirection: "column"
})

const Main = styled("main")({
    padding: "2rem 0",
    flexGrow: 1
})
