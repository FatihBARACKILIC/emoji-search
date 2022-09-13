import { render, screen } from "@testing-library/react"
import App from "./App"

test("Is the emoji page filtering successfully", () => {
  render(<App />)
  const inputText = screen.getByText("Smile")
  expect(inputText).toBeInTheDocument("Smile")
})
