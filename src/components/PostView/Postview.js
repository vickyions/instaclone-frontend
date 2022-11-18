import React from "react";
import './Postview.css';
import Card from "./Card";

export default function Postview() {
    const [cardsData, setCardsData] = React.useState([]);

    React.useEffect(() => {
        async function dataFetch() {
            const res = await fetch("http://localhost:3004/user");
            const data = await res.json();
            setCardsData(data);
        }
        dataFetch();
    }, []);

    return (
        <div className="postview">
            {cardsData.length !== 0 && cardsData.map((card) => {
                return <Card data={card} key={`${card.name}+${card.location}+${card.date}`} />;
            })}
        </div>
    );
}
