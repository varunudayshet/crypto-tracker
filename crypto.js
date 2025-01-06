const cryptoSelect = document.getElementById("crypto");
const updateButton = document.getElementById("update");
const priceChartCanvas = document.getElementById("priceChart");
const predictionElement = document.getElementById("prediction");

let priceChart;
async function fetchCryptoData(crypto) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=7&interval=daily`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch cryptocurrency data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    alert("Error fetching cryptocurrency data. Please try again later.");
  }
}
function updateChart(data) {
  const labels = data.prices.map((price) => {
    const date = new Date(price[0]);
    return `${date.getDate()}/${date.getMonth() + 1}`;
  });

  const prices = data.prices.map((price) => price[1].toFixed(2));

  if (priceChart) {
    priceChart.destroy();
  }

  priceChart = new Chart(priceChartCanvas, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Price (USD)",
          data: prices,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 1,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
}
function updatePrediction(crypto, data) {
  const latestPrice = data.prices[data.prices.length - 1][1];
  const randomFactor = Math.random() * 5 - 2.5;
  const predictedPrice = (
    latestPrice +
    latestPrice * (randomFactor / 100)
  ).toFixed(2);

  predictionElement.textContent = `The predicted price for ${crypto.toUpperCase()} in the near future is: $${predictedPrice}`;
}
async function updateDashboard() {
  const selectedCrypto = cryptoSelect.value;
  const data = await fetchCryptoData(selectedCrypto);

  if (data) {
    updateChart(data);
    updatePrediction(selectedCrypto, data);
  }
}
updateButton.addEventListener("click", updateDashboard);
updateDashboard();
