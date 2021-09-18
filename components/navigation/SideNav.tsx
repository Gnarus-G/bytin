import React from 'react'
import { Drawer, List, Divider, ListItem, ListItemText, Typography, ListItemIcon } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import { Route } from '../../constants';
import Link from 'components/utils/Link';
import { RouteAndIcon } from '.';

interface SideNavProps {
    appName: string
    isOpen: boolean
    onClose: () => void
    loggedIn: boolean
}

export default function SideNav({ appName, isOpen, onClose, loggedIn }: SideNavProps) {
    const classes = useStyles();

    const routeGroup: RouteAndIcon[] = [[Route.PUBLIC_SNIPPETS, ListIcon], [Route.PRIVATE_SNIPPETS, AssignmentIcon], [Route.ADD_SNIPPETS, PostAddIcon]];
    const protectedRouteGroup: RouteAndIcon[] = [[Route.LOGIN, LockOpenIcon]];
    return (
        <>
            <Drawer anchor="left" open={isOpen} onClose={onClose}>
                <div className={classes.toolbar}>
                    <Typography variant="h5" className={classes.navTitle}>
                        {appName}
                    </Typography>
                </div>
                <Divider />
                <List className={classes.list} data-testid="sidenav-links">
                    <Link href={Route.HOME.path}>
                        <ListItem button>
                            <ListItemIcon className={classes.itemIcon}>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={Route.HOME.desc} />
                        </ListItem>
                    </Link>
                    <Divider />
                    {(routeGroup).map(([route, Icon], index) => (
                        <Link key={index} href={route.path}>
                            <ListItem button className={classes.itemIcon}>
                                <ListItemIcon>
                                    <Icon />
                                </ListItemIcon>
                                <ListItemText primary={route.desc} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <List>
                    {!loggedIn && protectedRouteGroup.map(([route, Icon], index) => (
                        <Link key={index} href={route.path}>
                            <ListItem button >
                                <ListItemIcon className={classes.itemIcon}>
                                    <Icon />
                                </ListItemIcon>
                                <ListItemText primary={route.desc} />
                            </ListItem>
                        </Link>
                    ))}
                    {loggedIn && <Link href={Route.LOGOUT.path}>
                        <ListItem button >
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </Link>}
                </List>
            </Drawer>
        </>
    )
}

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    itemIcon: {
        color: "inherit"
    },
    navTitle: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2)
    },
    toolbar: theme.mixins.toolbar
}))

