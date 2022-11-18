import React from "react";
import "./Postview.css";
import Card from "./Card";
import { API_ADDRESS } from "../../App";

export default function Postview() {
    const [cardsData, setCardsData] = React.useState([]);

    React.useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        async function dataFetch() {
            try {
                const res = await fetch(API_ADDRESS, { signal });
                const data = await res.json();
                setCardsData(data.posts);
            } catch (err) {
                console.log("previous post fetch request was aborted");
            }
        }
        dataFetch();

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div className="postview">
            {cardsData.length === 0 && <div className="loader">Loading Posts...</div>}
            {cardsData.length !== 0 &&
                cardsData.map((card) => {
                    return <Card data={card} key={card._id} />;
                })}
        </div>
    );
}
