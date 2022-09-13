import { render, screen } from "@testing-library/react"
import App from "./App"

test("Emoji Copy should be rendered", () => {
  render(<App />)

  const clicks = screen.getAllByTestId("row")
  expect(clicks[0]).toHaveAttribute("data-clipboard-text")
})
