import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Card from "../components/Card"
import "@testing-library/jest-dom"


test('should render product correctly along with the buttons', () => {
    const mockProduct = {
        name: "Air Tag",
        image: "AirTag.jpg", 
        Price: "25"
    }

    const mockOnClick = jest.fn();
    const mockRemove = jest.fn();

    render(<Card product={mockProduct} onClick={mockOnClick} remove={mockRemove} />)

    expect(screen.getByText("Air Tag")).toBeInTheDocument()
    expect(screen.getByAltText("Image coming soon")).toHaveAttribute("src")
    expect(screen.getByText("$25")).toBeInTheDocument();

    fireEvent.click(screen.getByText("View More"))
    expect(mockOnClick).toHaveBeenCalled()

    fireEvent.click(screen.getByText("Delete Product"))
    expect(mockRemove).toHaveBeenCalled();
  
})
