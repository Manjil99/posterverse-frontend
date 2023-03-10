import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../constants/cartConstants";
import axios from "../axios";


//Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/books/${id}`);
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.book._id,
        name: data.book.name,
        price: data.book.price,
        image: data.book.images[0].url,
        stock: data.book.Stock,
        quantity,
      },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

//Remove from Cart
export const removeItemsFromCart = (id) => async (dispatch,getState) => {
    dispatch(
        {
            type:REMOVE_CART_ITEM,
            payload: id,
        }
    );
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch(
    {
      type:SAVE_SHIPPING_INFO,
      payload:data
    }
  );
  localStorage.setItem("shippingInfo", JSON.stringify(data));
}