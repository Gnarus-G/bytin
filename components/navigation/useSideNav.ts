import { useState } from "react";

type Handler = ((event: any) => void);
type Result = [boolean, Handler, Handler];

export default function useSideNav(initial?: boolean): Result {

    const [isOpen, setOpenSideNav] = useState<boolean>(initial as boolean);

    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event instanceof KeyboardEvent && (event.key === "Tab" || event.key === "Shift"))
            return;
        setOpenSideNav(open);
    };

    const open = toggleDrawer(true);
    const close = toggleDrawer(false);

    return [isOpen, open, close];
}
