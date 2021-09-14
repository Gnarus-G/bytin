import React from 'react'
import { render, RenderResult } from "@testing-library/react"
import SideNav from "../../components/navigation/SideNav"
import { mocked } from 'ts-jest/utils'
import { useRouter } from 'next/router'
import { Route } from '../../constants'

jest.mock("next/router")

mocked(useRouter).mockReturnValue({} as any);
const closeMock = jest.fn();

let screen: RenderResult;

describe("when no auth", () => {

    beforeEach(() => {
        screen = render(<SideNav appName={"APP"} isOpen loggedIn={false} onClose={closeMock} />)
    })

    it("shows app name", () => {
        const { getByText } = screen;
        const name = getByText("APP");
        expect(name).toBeVisible();
    })

    it("shows route links when open", () => {
        const { getByText } = screen;

        const loginBtn = getByText("Login");

        expect(loginBtn).toBeVisible();
    })

    it("shows login and register", () => {
        const { getByText } = screen;
        const loginBtn = getByText("Login");
        const regiterBtn = getByText("Register");

        [loginBtn, regiterBtn].forEach(btn => expect(btn).toBeVisible());
    })

    it("shows navlinks", () => {
        const { getByText, getByTestId } = screen;

        const list = getByTestId("sidenav-links");
        const links = list.querySelectorAll("a");
        const routes = [Route.HOME, Route.PUBLIC_SNIPPETS, Route.PRIVATE_SNIPPETS, Route.ADD_SNIPPETS];
        expect(links).toHaveLength(routes.length);

        links.forEach((link, index) => {
            const route = routes[index];
            expect(link).toBeVisible();
            expect(link).toHaveAttribute("href", route.path)
            expect(getByText(route.desc)).toBeVisible()
            link.getAttribute("href")
        })
    })
})

describe("with auth", () => {

    beforeEach(() => {
        screen = render(<SideNav appName={""} isOpen loggedIn onClose={closeMock} />)
    })

    test("logout iconbutton shows and works", () => {
        const { getByText } = screen;

        const logoutBtn = getByText("Logout");
        expect(logoutBtn).toBeVisible();
    })

})