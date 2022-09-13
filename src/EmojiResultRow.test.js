import { render, screen } from "@testing-library/react"
import App from "./App"

test("Emoji list should be rendered", () => {
  render(<App />)
  const items = screen.getAllByText(/Click to copy emoji/i)
  const item = screen.getByText("Relaxed")
  expect(item).toBeInTheDocument()
  expect(items.length).toEqual(20)
})
