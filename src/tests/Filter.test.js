import React from "react"
import { render, screen, fireEvent, getByText } from "@testing-library/react"
import Filter from "../components/Filter"
import "@testing-library/jest-dom"

test('should Display Filter Component Correctly', () => {

    const mockFilterChange = jest.fn();

    render(<Filter onFilterChange={mockFilterChange} />)

    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Phones")).toBeInTheDocument();
    expect(screen.getByText("Accessories")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Phones"))
    expect(mockFilterChange).toHaveBeenCalled();
})
