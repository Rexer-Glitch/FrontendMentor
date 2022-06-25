import chartData from "../data.json";

const BALANCE = 921.48;
const TOTAL_PERCENT_CHANGE = 2.4;
const TOTAL = 478.33;
const CHART_HEIGHT = 200;

const getHighestAmount = ()=> {
    if(!chartData) return;

    let highestAmount = chartData[0].amount;
    chartData.forEach(bar => {
        if(highestAmount < bar.amount){
            highestAmount = bar.amount;
        }
    })
    return highestAmount;
}

const generateBarElement = (amount, day, isToday, height)=> {
    return `
    <div class="chart-data">
        <div class="bar ${isToday ? "h-bar":""}" style="height: ${height}px">
            <div class="bar-price">$${amount}</div>
        </div>
        <label class="bar-label">${day}</label>
    </div>
    `;
}

const calculateBarHeight = (amount) => {
    const highestAmount = getHighestAmount();
    return (amount / highestAmount) * CHART_HEIGHT;
}

const renderChart = ()=> {
    const chartWrapper = document.querySelector(".chart");
    chartWrapper.innerHTML = "";
    
    chartData.forEach(({amount, day}, index) => {
        const isToday = new Date().toDateString().toLowerCase().includes(day.toLowerCase());
        const height = calculateBarHeight(amount);
        chartWrapper.innerHTML += generateBarElement(amount, day, isToday, height);
    });
}

document.querySelector(".amount").innerHTML = `$${BALANCE}`;
document.querySelector(".total-change").innerHTML = `+${TOTAL_PERCENT_CHANGE}%`;
document.querySelector(".total").innerHTML = `$${TOTAL}`;
renderChart();

