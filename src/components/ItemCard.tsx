import {Item} from "../Item";

type ItemCardProps = {
    item: Item
}

export default function ItemCard(props: ItemCardProps) {

    return (
        <>
            <p>
                {props.item.name}
            </p>
        </>
    )
}
