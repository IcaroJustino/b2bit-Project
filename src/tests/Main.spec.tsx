import { render, screen } from "@testing-library/react";
import NotFoundPage from "../pages/404";

describe("NotFound", () => {
    test("Render 404 page", async () => {
        render(<NotFoundPage />);
        const text_element = screen.getAllByText(/Nothing here but chickens/)
        expect(text_element).toBe
    });

});