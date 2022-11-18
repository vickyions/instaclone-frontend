import React from "react";
import "./Postview.css";
import Card from "./Card";
const API_ADDRESS = "https://instaclone-backer.herokuapp.com/posts";

export default function Postview() {
    const [cardsData, setCardsData] = React.useState([]);

    React.useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        async function dataFetch() {
            const res = await fetch(API_ADDRESS, { signal });
            const data = await res.json();
            setCardsData(data.posts);
        }
        dataFetch();

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div className="postview">
            {cardsData.length !== 0 &&
                cardsData.map((card) => {
                    return <Card data={card} key={card._id} />;
                })}
        </div>
    );
}
