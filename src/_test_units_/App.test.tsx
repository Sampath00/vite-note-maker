import { describe, expect, test} from "vitest";
import App from "../App"
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Testing the App Component", () =>{

    test("Testing the App snapshot",() =>{
        const wrapper = render(<MemoryRouter><App/></MemoryRouter>)
        expect(wrapper).toMatchSnapshot()
    })

})