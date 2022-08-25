import {Item} from "../../Item";
import {render} from "@testing-library/react";
import Gallery from "../../components/Gallery";

jest.mock("../../components/ItemCard", () => {
    return (props: any) => {
        return <div {...props}></div>
    }
})

describe("Gallery test", () => {

    test("Gallery Snapshot test", () => {
        //GIVEN
        const testItems: Item[] = [{id: "testId", name: "testName"}, {id: "testId2", name: "testName2"}];

        //WHEN
        const view = render(<Gallery items={testItems}/>)

        //THEN
        expect(view.asFragment()).toMatchSnapshot();
    })
})
