﻿import {useEffect, useState } from 'react';
import RankingGrid from './RankingGrid';
import ItemCollection from './ItemCollection';

const RankItems = ({ items, setItems, dataType, imgArr, localStorageKey }) => {

    const [reload, setReload] = useState(false);

    function reloadItems() {
        setReload(true);
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    };

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drop(ev) {
        ev.preventDefault();
        const targetElement = ev.target;
        if (targetElement.nodeName === "IMG") {
            return false;
        }
        if (targetElement.childNodes.length === 0) {
            let data = parseInt(ev.dataTransfer.getData("text").substring(5));
            const transformedCollection = items.map((item) => (item.id === parseInt(data)) ?
            { ...item, ranking: parseInt(targetElement.id.substring(5)) } : { ...item, ranking: item.ranking });
            setItems(transformedCollection);
        }
    }

    useEffect(() => {
        if (items == null) {
            getDataFromApi();
        }
    }, [dataType]);

    function getDataFromApi() {
        fetch(`item/${dataType}`)
            .then(results => results.json())
            .then(data => {
                console.log(data);
                setItems(data);
            })
    };

    useEffect(() => {
        if (items != null) {
            localStorage.setItem(localStorageKey, JSON.stringify(items));
        }
        setReload(false);
    }, [items]);

    useEffect(() => {
        if (reload === true) {
            getDataFromApi();
        }
    }, [reload])

    return (
        (items != null)?
        <main>
            <RankingGrid items={items} imgArr={imgArr} drag={drag} allowDrop={allowDrop} drop={drop} />
            <ItemCollection items={items} imgArr={imgArr} drag={drag} />
                <button onClick={reloadItems} className="bg-violet-950 rounded-full text-white text-center font-semibold h-[50px] w-[200px] mt-[20px]">Reload</button>
            </main>               

        : <main>Loading...</main>
    )
}

export default RankItems;