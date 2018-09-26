console.warn('Script BAŞLADI')
const veri = document.querySelector('.ag-value')
const button = document.querySelector('.ag-button')




// KONU 1 START


// import {delay500} from './functions'
// console.log('delay500', delay500())
// debugger
// button.addEventListener('click', () => {
//     console.log('Promise Öncesi')
//     delay500().then(() => {
//         console.log('500 milisaniye geçikme')
//         veri.innerHTML = '500 milisaniye geçikme'
//     })
//     console.log('Promise Sonrası')
// })
    
        
//AYNI FONKSİYONLAR


// import {delay500} from './functions'   
// console.log('delay500', delay500())
// debugger
// button.addEventListener('click', function(){
//     console.log('Promise Öncesi')
//     delay500().then(function(){
//         console.log('500 milisaniye geçikme')
//         veri.innerHTML = '500 milisaniye geçikme'
//     })
//     console.log('Promise Sonrası')
// })

// KONU 1 END








// KONU 2 START


// import {delay500Value} from './functions'

// console.log('delay500Value', delay500Value())

// button.addEventListener('click', () => {
//     console.log('Promise Öncesi')
//     delay500Value().then(data=> {
//         console.log('GELEN VERİ', data)
//         veri.innerHTML = JSON.stringify(data)
//     })
//     console.log('Promise Sonrası')
// })


// KONU 2 END







// KONU 3 START

// import {nestedPromise} from './functions'

// console.log('nestedPromise', nestedPromise())

// button.addEventListener('click', () => {
//     let mData ={}
//     nestedPromise().then(data=> {
//         mData.ilkMesaj = data.message
//         console.log('ilk Promise', data)
//         return data.feyzonunPromisi()
//     }).then(ikinciData => {
//         mData.ikinciMesaj = ikinciData.message
//         console.log('ikinci data', ikinciData)

//         veri.innerHTML = JSON.stringify(mData)
//     })
// })


// KONU 3 END






// KONU 4 START

const asyncFunction = async () => {
    return 'patates'
}

console.log(asyncFunction())

debugger







// KONU 4 END


















































console.warn('Script BİTTİ')
console.log('--')
console.log('--')