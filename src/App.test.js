import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the counter app", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /counter app/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
});
