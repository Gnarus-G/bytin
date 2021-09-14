import React from 'react'
import { render, RenderResult } from "@testing-library/react"
import { mocked } from "ts-jest/utils"
import Navbar from "../../components/navigation/component/Navbar"
import { Route } from '../../constants';
import { useRouter } from 'next/router';

jest.mock("next/router")

const onMenuMock = jest.fn();

let screen: RenderResult;
mocked(useRouter).mockReturnValue({} as any);

describe("no auth", () => {
    beforeEach(() => {
        screen = render(<Navbar isAuthenticated={false} appName="Title" onMenuClick={onMenuMock} />)
    })

    it("shows brand logo", () => {
        const {container, getByText } = screen;
        expect(container.querySelector("img[src*=logo]")).toBeVisible();
        expect(getByText("Title")).toBeVisible();
    })

    it("shows login and register", () => {
        const { getByText } = screen;
        const loginBtn = getByText("Login");
        const regiterBtn = getByText("Register");

        [loginBtn, regiterBtn].forEach(btn => expect(btn).toBeVisible());
    })

    it("shows navlinks", () => {
        const { container } = screen;
        const links = container.querySelectorAll("div[class*=navLinks] > a");
        const routes = [Route.HOME, Route.PUBLIC_SNIPPETS, Route.PRIVATE_SNIPPETS, Route.ADD_SNIPPETS];

        expect(links).toHaveLength(routes.length);

        links.forEach((link, index) => {
            const route = routes[index];
            expect(link).toBeVisible();
            expect(link).toHaveAttribute("href", route.path)
            expect(link.firstChild).toHaveAttribute("title", route.desc);
            link.getAttribute("href")
        })
    })
})

describe("with auth", () => {
    beforeEach(() => {
        screen = render(<Navbar isAuthenticated appName="Title" onMenuClick={onMenuMock} />)
    })

    test("logout iconbutton shows", () => {
        const { getByTitle } = screen;

        const logoutBtn = getByTitle("Logout");
        expect(logoutBtn).toBeVisible();
    })

})
