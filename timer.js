// start timing
const time = document.querySelector('.ag-timing-value')
export const startTimer = () => {
    let date = new Date()
    setInterval(() => {
        date = new Date()
        time.innerHTML = `${date.getHours().toString().padStart(2, 0)}: ${date.getMinutes().toString().padStart(2, 0)} : ${date.getSeconds().toString().padStart(2, '0')}`
    }, 1000)
} 