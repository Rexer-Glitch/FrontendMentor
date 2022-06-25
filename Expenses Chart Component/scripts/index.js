import chartData from "../data.json";

const BALANCE = 921.48;
const TOTAL_PERCENT_CHANGE = 2.4;
const TOTAL = 478.33;
const CHART_HEIGHT = 200;


const getHighestBar = ()=> {
    if(!chartData) return;

    let barIndex = 0;
    let bars = [];
    let currentAmount = chartData[0].amount;
    chartData.forEach(bar => {
        if(currentAmount < bar.amount){
            barIndex++;
            currentAmount = bar.amount;
        }
    });
    
    chartData.forEach((bar, i)=> {
        if(bar.amount === currentAmount){
            bars.push(i);
        }
    })
    console.log(bars);
    return bars;
}

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

const generateBarElement = (amount, day, isHighestBar, height)=> {
    return `
    <div class="chart-data">
        <div class="bar ${isHighestBar ? "h-bar":""}" style="height: ${height}px">
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
    
    const highestBars = getHighestBar();
    chartData.forEach(({amount, day}, barIndex) => {
        const isHighestBar = highestBars.includes(barIndex);
        const height = calculateBarHeight(amount);
        chartWrapper.innerHTML += generateBarElement(amount, day, isHighestBar, height);
    });
}

document.querySelector(".amount").innerHTML = `$${BALANCE}`;
document.querySelector(".total-change").innerHTML = `+${TOTAL_PERCENT_CHANGE}%`;
document.querySelector(".total").innerHTML = `$${TOTAL}`;
renderChart();

