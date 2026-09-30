import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        )
            .then((res) => res.json())
            .then((res) => {
                console.log("API DATA:", res);
                console.log("CURRENCY DATA:", res[currency]);
                setData(res[currency]);
            })
            .catch((error) => {
                console.log("Currency API Error:", error);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;