export const customFetch = (produc) => {
    return new Promise((res,rej)=> {
        setTimeout(()=>{
            res(produc)
        }, 2000)
    })
}