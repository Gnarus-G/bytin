import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import makeStyles from '@mui/styles/makeStyles';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
import { Route } from '../../constants';
import Link from 'components/utils/Link';
import Image from "next/image"
import { RouteAndIcon } from '.';

interface NavBarProps {
    appName: string
    isAuthenticated: boolean
    children?: JSX.Element
    onMenuClick: (event: any) => void
}

export default function Navbar({ appName: title, isAuthenticated, children, onMenuClick }: NavBarProps) {
    const classes = useStyles();
    const routeGroup: RouteAndIcon[] = [[Route.HOME, HomeIcon], [Route.PUBLIC_SNIPPETS, ListIcon], [Route.PRIVATE_SNIPPETS, AssignmentIcon], [Route.ADD_SNIPPETS, PostAddIcon]];
    return <>
        <AppBar className={classes.root} position="fixed">
            <Toolbar>
                <Box display={{ sm: "none" }}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        data-testid="nav-menu"
                        aria-label="open menu"
                        onClick={onMenuClick}
                        size="large">
                        <MenuIcon />
                    </IconButton>
                </Box>
                <div className={classes.brand}>
                    <IconButton edge="start" aria-label="brand logo" href="/" size="large">
                        <Image src="/img/logo192.png" width="24" height="24" alt="logo of teeth surrounded by angle brackets" />
                    </IconButton>
                    <Typography variant="h6">
                        {title || "no title"}
                    </Typography>
                </div>
                <Box className={classes.navLinks} display={{ xs: "none", sm: "flex" }} gap={5}>
                    {routeGroup.map(([route, Icon], index) => (
                        <Link key={index} href={route.path}>
                            <Tooltip title={route.desc} aria-label={`go to ${route.desc}`}>
                                <IconButton color="inherit" size="large">
                                    <Icon />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    ))}
                </Box>
                {!isAuthenticated &&
                        <Link href={Route.LOGIN.path}>
                            <Button color="inherit">Login</Button>
                        </Link>
                    }
                {isAuthenticated && <Tooltip title="Logout" aria-label="log out of the app">
                    <Link href={Route.LOGOUT.path}>
                        <IconButton color="inherit" size="large">
                            <ExitToAppIcon />
                        </IconButton>
                    </Link>
                </Tooltip>}
            </Toolbar>
            {children}
        </AppBar>
        <Toolbar />{/**a second toolbar to offset content that would be hidden due to appbar position fixed */}
    </>;
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.getContrastText(theme.palette.background.paper)
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    brand: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexGrow: 1
    },
    navLinks: {
        flexGrow: .9,
    }
}));

