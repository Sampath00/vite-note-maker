import {describe, test, expect, beforeEach} from "vitest"
import Header from "../Components/Header"
import { render, screen} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

describe("Testing on Header Component", () => {

    beforeEach(() => {
        render(<MemoryRouter><Header/></MemoryRouter>)
    })

    test("Header component text", () => {
        expect(screen.getByText(/note maker/i)).toBeDefined();
    })

    test("Header snapshot test",()=>{
        const wrapper = render(<MemoryRouter><Header/></MemoryRouter>);
        expect(wrapper).toMatchSnapshot()
    })
})