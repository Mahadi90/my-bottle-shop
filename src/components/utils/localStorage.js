const getProductfromLS = () => {
    const cart = []
    const cartSringified = localStorage.getItem('cart')
    if(cartSringified){
        return JSON.parse(cartSringified)
    }
    return cart;
}

const setProductsToLS = (id) => {
    const storedCart = getProductfromLS()
    storedCart.push(id)
    const cartStringified = JSON.stringify(storedCart)
    localStorage.setItem('cart', cartStringified)
}
const deleteFromLS = (id) => {
   localStorage.removeItem('cart')
}
export { getProductfromLS , setProductsToLS, deleteFromLS}

