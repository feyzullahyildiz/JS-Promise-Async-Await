import axios from 'axios'
export const delay500 = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res()
        }, 500);
    })
}
export const delay2000 = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res()
        }, 2000);
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
    // return fetch('https://jsonplaceholder.typicode.com/users/' + userid)
    // .then(response => response.json())
    return axios.get('https://jsonplaceholder.typicode.com/users/' + userid)
    .then(x => x.data)
}



export const getUserPosts = (userid) => {
    if(!userid) throw new Error('userid not defined')
    return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userid)
    .then(response => response.json())
}

export const getUserLastAlbumFromEmail = (email) => {
    return fetch('https://jsonplaceholder.typicode.com/albums?userId=1')
    .then(response => response.json())
    .then(albums => {
        //actualy this is not right way 
        return albums[albums.length -1]
    })
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
export const throwsAnError = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(new Error('Hata Geliyorum demez'))
        }, 500);
    })
}




















