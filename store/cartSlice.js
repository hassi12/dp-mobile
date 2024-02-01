
const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        totalItems: 0,
        totalAmount: 0,
        deliveryCharge: 0
    },
    reducers: {
        add(state, action) {
            const tempItem = state.data.find((item) => item.id === action.payload.id);
            if (tempItem) {
              const tempCart = state.data.map((item) => {
                if (item.id === action.payload.id) {
                  let newQty = item.quantity + action.payload.quantity;
                  const stockItem = item.stock && item.stock.length > 0 ? item.stock[0] : null;
                  const pricePerItem = stockItem ? parseFloat(stockItem.discount_price) : item.price;
                  let newTotalPrice = newQty * pricePerItem;
                  return { ...item, quantity: newQty, totalPrice: newTotalPrice };
                } else {
                  return item;
                }
              });
              state.data = tempCart;
            } else {
              state.data.push(action.payload);
            }
          }, 
        remove(state, action) {
            const tempCart = state.data.filter(item => item.id !== action.payload);
            state.data = tempCart;
        },
        clearCart(state) {
            state.data = [];
        },
        toggleCartQty(state, action) {
            const tempCart = state.data.map((item) => {
              if (item.id === action.payload.id) {
                let tempQty = item.quantity;
                let tempTotalPrice = item.totalPrice;
                if (action.payload.type === "INC" || action.payload.type === "DEC") {
                  tempQty = action.payload.type === "INC" ? tempQty + 1 : tempQty - 1;
                  if (tempQty < 1) tempQty = 1;
                  const stockItem = item.stock && item.stock.length > 0 ? item.stock[0] : null;
                  const pricePerItem = stockItem ? parseFloat(stockItem.discount_price) : item.price;
                  tempTotalPrice = tempQty * pricePerItem;
                }
                return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
              } else {
                return item;
              }
            });
            state.data = tempCart;
        },
        getCartTotal(state) {
            let { totalAmount, totalItems } = state.data.reduce(
              (cartTotal, cartItem) => {
                const { quantity, price, stock } = cartItem;
                let itemTotal;
                if (stock && stock.length > 0) {
                  // Assuming there's only one stock item for simplicity
                  const { discount_price } = stock[0];
                  console.log('discount_price', discount_price);
                  itemTotal = discount_price !== undefined ? discount_price : price;
                } else {
                  itemTotal = price;
                }
                cartTotal.totalAmount += itemTotal * quantity;
                cartTotal.totalItems += quantity;
                return cartTotal;
              },
              {
                totalAmount: 0,
                totalItems: 0,
              }
            );
            // Check if totalAmount is a number before calling toFixed
            if (typeof totalAmount === 'number') {
              state.totalAmount = parseFloat(totalAmount.toFixed(2));
            } else {
              // Handle the case where totalAmount is not a number
              state.totalAmount = 0;
            }
            state.totalItems = totalItems;
          }
    },
});

export const { add, remove, toggleCartQty, getCartTotal, clearCart } = cartSlice.actions;
export default cartSlice.reducer;