import Navbar from 'components/navigation/Navbar';
import SideNav from 'components/navigation/SideNav';
import React from 'react';
import useSideNav from '../navigation/useSideNav';

interface HeaderProps {
    appName: string
}

export default function Header({ appName }: HeaderProps) {
    const isAuthenticated = false;
    const [sideOpen, openSide, closeSide] = useSideNav();
    return (
        <header>
            <Navbar appName={appName} isAuthenticated={isAuthenticated} onMenuClick={openSide}>
                <SideNav appName={appName} isOpen={sideOpen} loggedIn={isAuthenticated} onClose={closeSide as any} />
            </Navbar>
        </header>
    )
}
