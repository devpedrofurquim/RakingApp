import { useState } from "react";
import RankItems from './RankItems';

const RankItemsContainer = ({dataType, imgArr}) => {
    const frameworkLocalStorageKey = "framework";
    const languageLocalStorageKey = "language";

    let localStorageKey = "";

    const [frameworkItems, setFrameworkItems] = useState(JSON.parse(localStorage.getItem(frameworkLocalStorageKey)));
    const [languageItems, setLanguageItems] = useState(JSON.parse(localStorage.getItem(languageLocalStorageKey)));

    console.log("frameworkItems:", frameworkItems);
    console.log("languageItems:", languageItems);

    let data = [];
    let setFunc = null;

    if (dataType === 1) {
        data = languageItems;
        setFunc = setLanguageItems;
        localStorageKey = languageLocalStorageKey;
    }
    else if (dataType === 2) {
        data = frameworkItems;
        setFunc = setFrameworkItems;
        localStorageKey = frameworkLocalStorageKey;
    }

    return (
        <RankItems items={data} setItems={setFunc} dataType={dataType} imgArr={imgArr} localStorageKey={localStorageKey} />
    )
}

export default RankItemsContainer;