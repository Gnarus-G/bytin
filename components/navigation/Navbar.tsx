import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Tooltip } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListIcon from '@material-ui/icons/List';
import HomeIcon from '@material-ui/icons/Home';
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
    return (
        <>
            <AppBar className={classes.root} position="fixed">
                <Toolbar>
                    <Box display={{ sm: "none" }}>
                        <IconButton edge="start" className={classes.menuButton} data-testid="nav-menu" aria-label="open menu" onClick={onMenuClick}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <div className={classes.brand}>
                        <IconButton edge="start" aria-label="brand logo" href="/">
                            <Image src="/img/logo192.png" width="24" height="24" alt="logo of teeth surrounded by angle brackets" />
                        </IconButton>
                        <Typography variant="h6">
                            {title || "no title"}
                        </Typography>
                    </div>
                    <Box className={classes.navLinks} display={{ xs: "none", sm: "flex" }} gridGap={30}>
                        {routeGroup.map(([route, Icon], index) => (
                            <Link key={index} href={route.path}>
                                <Tooltip title={route.desc} aria-label={`go to ${route.desc}`}>
                                    <IconButton color="inherit" >
                                        <Icon />
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        ))}
                    </Box>
                    {!isAuthenticated &&
                        <>
                            <Link href={Route.LOGIN.path}>
                                <Button color="inherit">Login</Button>
                            </Link>
                            <Link href={Route.REGISTER.path}>
                                <Button color="inherit">Register</Button>
                            </Link>
                        </>}
                    {isAuthenticated && <Tooltip title="Logout" aria-label="log out of the app">
                        <Link href={Route.LOGOUT.path}>
                            <IconButton color="inherit">
                                <ExitToAppIcon />
                            </IconButton>
                        </Link>
                    </Tooltip>}
                </Toolbar>
                {children}
            </AppBar>
            <Toolbar />{/**a second toolbar to offset content that would be hidden due to appbar position fixed */}
        </>
    )
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

