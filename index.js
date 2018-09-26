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
//     let mData = {}
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

// const asyncFunction = async () => {
//     return 'patates'
// }
// console.log(asyncFunction())
// debugger
// button.addEventListener('click', ()=>{
//     asyncFunction().then((data) => {
//         console.log('veri', data)
//         veri.innerHTML = data
//     })
// })


// AYNI KODLAR
// const asyncFunction = async function(){
//     return 'patates'
// }
// console.log(asyncFunction())
// debugger
// button.addEventListener('click', ()=>{
//     asyncFunction().then(function(data){
//         console.log('veri', data)
//         veri.innerHTML = data
//     })
// })


// AYNI KODLAR
// async function asyncFunction() {
//     return 'patates'
// }
// console.log(asyncFunction())
// debugger
// button.addEventListener('click', ()=>{
//     asyncFunction().then(function(data){
//         console.log('veri', data)
//         veri.innerHTML = data
//     })

// })



// KONU 4 END








// KONU 5 START

// import {getUser} from './functions'
// const asyncFunction = async function(){
//     const user = await getUser(1)
//     return {user, veri: 'patates'}
// }
// button.addEventListener('click', ()=>{
//     asyncFunction().then(data => {
//         console.log('data', data)
//     })
// })



// KONU 5 END


// KONU 6 START

// import {getUser, getUserPosts, delay2000} from './functions'
// const asyncFunction = async function(){
//     console.warn('BAŞLADI')
    
//     const user = await getUser(1)
//     console.log('Kullanıcı Geldi')
    
    
    
//     const posts = await getUserPosts(1)
//     console.log('Kullanıcı Postları GELDİ')
    
//     console.warn('Uyumaya Başladım')
//     await delay2000()
//     console.warn('2 saniye uyudum')
//     console.warn('BİTTİ')

//     return {user, posts, veri: 'patates'}
// }
// button.addEventListener('click', ()=>{
//     asyncFunction().then(data => {
//         console.log('data', data)
//     })
// })

// KONU 6 END






// KONU 7 START





// import {getUser, getUserPosts} from './functions'

// button.addEventListener('click', ()=>{
//     Promise.all([getUser(1), getUserPosts(1)])
//     .then(([user, posts])=> {
//         console.log('user', user)
//         console.log('posts', posts)
//     })
// })


// KONU 7 END










// KONU 8 START



// import {getUser, getUserPosts, getUserLastAlbumFromEmail} from './functions'
// const asyncFunction = async () => {

//     // const infoArray = Promise.all([getUser(1), getUserPosts(1)])
//     // const user = infoArray[0]
//     // const posts = infoArray[1]

//     const [user, posts] = await Promise.all([getUser(1), getUserPosts(1)])

//     const userLastAlbum = await getUserLastAlbumFromEmail(user.email)
//     return {user, posts, userLastAlbum}

// }
// button.addEventListener('click', ()=>{
//     asyncFunction()
//     .then((data)=> {
//         console.log('data', data)
//         veri.innerHTML = `${data.user.name} has ${data.posts.length} posts. Last album name is "${data.userLastAlbum.title}"`
//     })
// })






// KONU 8 END


// KONU 9 START


// import {getUser, getUserPosts} from './functions'
// const asyncFunction = async () => {

//     const [user, posts] = await Promise.all([getUser(1), getUserPosts(1)])
//     veri.innerHTML = user.name + ' has ' + posts.length + ' posts'
//     console.log('user', user)
//     console.log('posts', posts)
// }
// button.addEventListener('click', ()=>{
//     asyncFunction()
// })

// KONU 9 END





// KONU 10 START

// import {getUser, getUserPosts, throwsAnError} from './functions'
// const asyncFunction = async () => {

//     const [user, posts] = await Promise.all([getUser(1), getUserPosts(1)])
//     await throwsAnError()
//     veri.innerHTML = user.name + ' has ' + posts.length + ' posts'

// }
// button.addEventListener('click', ()=>{
//     asyncFunction().then( data => {
//         console.log('data', data)
//     }).catch(err => {
//         veri.innerHTML = 'HATA OLUŞTU'
//         console.error(err)
//     })
// })



// KONU 10 END



// KONU 11 START

// import {getUser, getUserPosts, throwsAnError} from './functions'
// const asyncFunction = async () => {

//     const [user, posts] = await Promise.all([getUser(1), getUserPosts(1)])
//     console.log('user', user)
//     await throwsAnError()
//     veri.innerHTML = user.name + ' has ' + posts.length + ' posts'

//     // try {
//     //     const [user, posts] = await Promise.all([getUser(1), getUserPosts(1)])
//     //     await throwsAnError()
//     //     veri.innerHTML = user.name + ' has ' + posts.length + ' posts'
//     // } catch (error) {
//     //     console.error(error)
//     // }
// }
// button.addEventListener('click', ()=>{
//     asyncFunction()
// })



// KONU 11 END


















































console.warn('Script BİTTİ')
console.log('--')
console.log('--')