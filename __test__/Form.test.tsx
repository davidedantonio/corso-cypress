import { jest } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect } from "@jest/globals"

interface FormProps {
  handleSubmit: () => void;
}

const Form = ({ handleSubmit }: FormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type={"sumbmit"}>SUBMIT</input>
    </form>
  )
}

describe("<Form />", () => {
  it("should render the form", () => {
    const handleSubmit = jest.fn();
    render(<Form handleSubmit={handleSubmit} />);
    
    screen.getByText("SUBMIT");
  });
})