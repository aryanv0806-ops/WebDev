document.addEventListener('DOMContentLoaded', () => {
    const brent_price = document.getElementById('brent-price');
    const wti_price = document.getElementById('wti-price');
    const bpchange = document.getElementById('brent-change');
    const wtchange = document.getElementById('wti-change');

    const FRED_KEY = "bf7d1a37d9af34ac3061748a9b42bd08";

    async function fetchOilPrices(seriesId, priceElement, changeElement) {
        const proxy = "https://api.allorigins.win/raw?url=";
        const fredUrl = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&api_key=${FRED_KEY}&file_type=json&sort_order=desc&limit=2`;

        // Encode karna zaruri hai taaki URL ke special characters proxy ko confuse na karein
        const url = proxy + encodeURIComponent(fredUrl);

        try {
            const response = await fetch(url);

            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();

            if (data.observations && data.observations.length >= 2) {
                const latest = data.observations[0].value;
                const previous = data.observations[1].value;

                // Market Closed check (FRED sends "" on holidays/weekends)
                if (latest === "" || previous === "") {
                    priceElement.textContent = "Market Closed";
                    return;
                }

                const priceNum = parseFloat(latest).toFixed(2);
                const prevNum = parseFloat(previous);

                // UI Update: Price
                priceElement.textContent = `$${priceNum}`;

                // UI Update: Percentage Change calculation
                const diff = (((priceNum - prevNum) / prevNum) * 100).toFixed(2);
                changeElement.textContent = diff > 0 ? `▲ ${diff}%` : `▼ ${diff}%`;
                changeElement.style.color = diff > 0 ? "#22c55e" : "#ef4444";

                console.log(`${seriesId} Success: $${priceNum}`);
            }
        } catch (error) {
            console.error(`Error fetching ${seriesId}:`, error);
            priceElement.textContent = "Server Err";
        }
    }

    async function fetchAllData() {
        await fetchOilPrices("DCOILBRENTEU", brent_price, bpchange);
        await fetchOilPrices("DCOILWTICO", wti_price, wtchange);
    }

    fetchAllData();
});