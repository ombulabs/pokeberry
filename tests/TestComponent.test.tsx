import { render } from "@testing-library/react"
import { TestComponent } from "../lib/components/TestComponent/index"

test("", async() => {
    const { getByText } = render(<TestComponent foo="bruh"/>)

    expect(getByText("Hello, world!")).toBeTruthy();
})