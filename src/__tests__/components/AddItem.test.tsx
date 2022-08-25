import {fireEvent, render, screen} from "@testing-library/react";
import AddItem from "../../components/AddItem";


describe("AddItem Tests", () => {

    test("AddItem Snapshot", () => {
        //GIVEN
        const mockAddItem = jest.fn();

        //WHEN
        const view = render(<AddItem addItem={mockAddItem}/>)

        //THEN
        expect(view.asFragment()).toMatchSnapshot();
    })

    test("AddItem submit test", () => {
        //GIVEN
        const mockAddItem = jest.fn();

        //WHEN
        const view = render(<AddItem addItem={mockAddItem}/>)

        //THEN
        fireEvent.input(screen.getByPlaceholderText("Name"), {target: {value: "TestInput"}})
        expect(view.asFragment()).toMatchSnapshot();

        fireEvent.click(screen.getByText("Save"))

        expect(mockAddItem).toBeCalledWith("TestInput")

    })
})
