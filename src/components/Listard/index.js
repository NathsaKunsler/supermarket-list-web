import "./index.css";

export const ListCard = (props) =>  {
    return <div className="list_card_container">
        <span> {props.item.name} </span>
    </div>;
};
