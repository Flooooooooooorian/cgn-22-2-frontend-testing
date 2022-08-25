import {Item} from "../../Item";
import {render} from "@testing-library/react";
import ItemCard from "../../components/ItemCard";


test("ItemCard test", () => {
    //GIVEN
    const testItem: Item = {id: "testId", name: "testName"};

    //WHEN
    const view = render(<ItemCard item={testItem} />)

    //THEN
    expect(view.asFragment()).toMatchSnapshot();
})
