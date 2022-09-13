import { render, screen } from "@testing-library/react"
import Header from "./Header"

test("Header should be rendered", () => {
  render(<Header />)

  const header = screen.getByText(/Emoji Search/i)
  expect(header).toBeInTheDocument()
})
