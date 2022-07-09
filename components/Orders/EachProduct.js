import React, { useState } from 'react'
import styles from "../../styles/Orders/OrderedItems.module.css";
import Image from 'next/image';
import { updateCart, updateProductCart } from '../../store/reducer';
import { useDispatch, useSelector } from 'react-redux';

export default function EachProduct({ product, idx, fabricSelection }) {
    const [quantity, setQuantity] = useState(product?.quantity)
    const headers = useSelector((state) => state.jamboree.headers);
    const dispatch = useDispatch();

    const addCartApi = async (prod_id) => {
        const response = await fetch(
            "https://data.jamboreefashions.com/api/v1/product/cart",
            {
                method: "POST",
                body: JSON.stringify({
                    prod_id,
                }),
                headers,
            }
        ).then((res) => {
            if (res.ok) {
                res.json().then((resp) => {
                    dispatch(
                        updateProductCart({
                            prod_id: prod_id,
                            quantity: resp.quantity,
                        })
                    );
                    setQuantity(resp.quantity)
                    dispatch(updateCart(resp.count))
                });
            }
        });

    };

    const removeCartApi = async (prod_id) => {
        const response = await fetch(
            "https://data.jamboreefashions.com/api/v1/product/cart",
            {
                method: "DELETE",
                body: JSON.stringify({
                    prod_id,
                }),
                headers,
            }
        ).then((res) => {
            if (res.ok) {
                res.json().then((resp) => {
                    dispatch(
                        updateProductCart({
                            prod_id: prod_id,
                            quantity: resp.quantity,
                        })
                    );
                    setQuantity(resp.quantity)
                    dispatch(updateCart(resp.count))
                });
            }
        });
    };



    return (
        <>
            {<>
                <div className="container row">
                    <div className="col-4 border bg-white">
                        <div className="d-flex h-100 align-items-center justify-content-center">
                            <Image
                                src={"/" + product.prod_image}
                                alt={product.prod_name}
                                width={100}
                                height={120}
                            />
                        </div>
                    </div>
                    <div className="col-8">
                        <h3 className="cinzel defaultColor">{product.prod_name}</h3>
                        <p className="montserrat mb-2" id="p">
                            {product.prod_detail}
                        </p>
                        <p className="montserrat defaultColor">
                            <form className="form-check pl-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="flexRadioDefault"
                                    id={styles.flexRadioDefault1}
                                    onClick={() => fabricSelection(idx)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault1"
                                >
                                    I have all/some the fabric for the item
                                </label>
                            </form>
                        </p>
                        <p className="montserrat" id="p">
                            Qty{" "}
                            <button className="btn btn-sm btn-dark" onClick={() => { removeCartApi(product.prod_id) }}>-</button>
                            <button id={styles.quantity}>{quantity}</button>
                            <button className="btn btn-sm btn-dark" onClick={() => { addCartApi(product.prod_id) }}>+</button>
                        </p>
                    </div>
                </div>
                <hr className="border" />
            </>}
        </>
    )
}
