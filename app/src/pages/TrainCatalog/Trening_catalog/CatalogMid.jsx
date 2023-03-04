import React, { useEffect, useState } from "react";
import classes from "./css/catalog.module.css";
import Star from "./Star";
import zamok from './img/zamok.svg';
import {Link} from "react-router-dom";

export default function CatalogMid() {
    const [cardArray, setCardArray] = useState([]);
    const [open, setOpen] = useState({ pageIndex: [], isOpen: false }); // изменяем состояние open
    const handleOpen = (pageIndex) => () => {
        setOpen((prevState) => ({
            pageIndex:[...prevState.pageIndex,pageIndex],
            isOpen: !prevState.isOpen || prevState.pageIndex !== pageIndex, // обновляем только для текущей страницы
        }));
    };

    function createCardHtml(cards) {
        console.log(cards)
        return cards.map((card, index) => (
            <React.Fragment key={card.id}>
                <div className={classes.CatalogCards} style={{background:`linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${card?.image}) no-repeat center/cover`}}>
                    <Star />
                    <h4 className={classes.CatalogH4}>{card?.title}</h4>
                    <p className={classes.CatalogP}>{card?.description}</p>
                    <Link to={"/youtube"}>
                        <div className={classes.start}>Cтарт</div>
                    </Link>
                </div>
                {(index + 1) % 6 === 0 && <div className={classes.horizanalLine}></div>}
            </React.Fragment>
        ));
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${process.env.PUBLIC_URL}/normal.json`);
            const data = await response.json();
            setCardArray(data);
        }
        fetchData();
    }, []);

    function render() {
        const cardsPerPage = 6;
        const numOfPages = Math.ceil(cardArray.length / cardsPerPage);

        let pages = [];
        for (let i = 0; i < numOfPages; i++) {
            const startIndex = i * cardsPerPage;
            const endIndex = startIndex + cardsPerPage;
            const pageCards = cardArray.slice(startIndex, endIndex);
            const cardHtml = createCardHtml(pageCards);
            const isPageOpen = open.pageIndex.includes(i) && open.isOpen; // проверяем, открыта ли страница
            pages.push(
                <div className={classes.wrapper} key={i}>
                    {isPageOpen ? null : (
                        <div className={classes.hiden}>
                            <div className={classes.CatalogBlock}>
                                <img src={zamok} alt="something" />
                                <Link to={"/payment"}>
                                    <button
                                        onClick={handleOpen(i)}
                                        className={classes.buy}
                                    >
                                        Получить доступ
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                    <div className={classes.CatalogContainer}>{cardHtml}</div>
                </div>
            );
        }
        return pages;
    }

    return <div className="card-container">
        <div className={classes.CatalogContainer}>
            <div className={classes.levels}>
                <h2>Тренировки</h2>
                <span>Уровень: Продолжающий</span>
            </div>
            <div className={classes.horizanalLine}></div>
        </div>
        {render()}</div>;
}