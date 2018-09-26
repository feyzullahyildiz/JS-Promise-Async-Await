export const delay500 = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res()
        }, 500);
    })
}
export const delay500Value = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res({test: true, delay: 500})
        }, 500);
    })
}





export const getUser = (userid) => {
    if(!userid) throw new Error('userid not defined')
    return fetch('https://jsonplaceholder.typicode.com/users/' + userid)
    .then(response => response.json())
}



export const getUserPosts = (userid) => {
    if(!userid) throw new Error('userid not defined')
    return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userid)
    .then(response => response.json())
}

const _feyzonunPromisi = () => {
    return new Promise(res => {
        setTimeout(() => {
            res({success: true, message: 'feyzonun promisi bitti', data: 'test datasıydı zaten'})
        }, 1000)
    })
}
export const nestedPromise = () => {
    return new Promise(res => {
        setTimeout(() => {
            res({
                    success: true,
                    message: 'ilk data geldi',
                    feyzonunPromisi: _feyzonunPromisi
                })
        }, 1000)
    })
}





















// start timing

const time = document.querySelector('.ag-timing-value')
let date = new Date()
setInterval(() => {
    date = new Date()
    time.innerHTML = `${date.getHours()}: ${date.getMinutes()} : ${date.getSeconds()}`
}, 1000)