import Link from "next/link";
import styles from "../../styles/Orders/Items.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { updateProductCart, makeHeaders, updateCart } from "../../store/reducer";
import { Router, useRouter } from "next/router";

export default function Catalog(props) {
  const categoryName = props.categoryName;
  const data = props.data;
  const product_cart = useSelector((state) => state.jamboree.product_cart);
  const dispatch = useDispatch();
  const headers = useSelector((state) => state.jamboree.headers);
  const is_login = useSelector((state) => state.jamboree.is_login);
  const router = useRouter();

  const addCartApi = async (prod_id) => {
    if (!is_login) {
      router.push("/login");
    } else {
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
            dispatch(updateCart(resp.count))
          });
        }
      });
    }
  };

  const removeCartApi = async (prod_id) => {
    if (!is_login) {
      router.push("/login");
    } else {
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
            dispatch(updateCart(resp.count))
          });
        }
      });
    }
  };

  // const removeCartApi = async (prod_id) => {
  //   const response = await fetch("https://data.jamboreefashions.com/api/v1/product/cart", {
  //     method: "DELETE",
  //     body: JSON.stringify({
  //       prod_id,
  //     }),
  //     headers,
  //   }).then((res) => {
  //     if (res.ok) {
  //       res.json().then((resp) => {
  //         dispatch(
  //           updateProductCart({
  //             prod_id: prod_id,
  //             quantity: resp.quantity,
  //           })
  //         );
  //       });
  //     }
  //   });
  // };

  return (
    <div>
      <div className="container row cards mx-auto px-0">
        <h3 className="col-12 mb-3 mt-5">{categoryName}</h3>

        {data.map((product, idx) => (
          <div
            className={
              "row col-lg-3 col-md-4 col-6 d-flex mx-auto " + styles.items
            }
            key={idx}
          >
            <div className="mt-4 pt-3 rounded align-self-stretch">
              <div className="img-fluid p-2">
                <Image
                  src={"/" + product.prod_image}
                  alt={product.prod_name}
                  objectFit="contain"
                  width={300}
                  height={200}
                />
              </div>
              <p className="px-2 mb-0">
                <b>{product.prod_name}</b>
              </p>
              <span
                className=" float-right d-none d-md-block px-2 mr-2 rounded"
                id={styles.span}
              >
                {product.prod_rating}⭐
              </span>
              <p
                className="montserrat px-2 d-none d-md-block py-1 mb-0"
                id={styles.p}
              >
                {product.prod_detail}
              </p>
              <p className={"montserrat px-2 " + styles.pa}>
                Available in {product.prod_styles} styles
              </p>
            </div>
            {product_cart[product.prod_id] ? (
              <>
                <button
                  className={"py-2 col-4 btn-dark-jm " + styles.left}
                  onClick={() => removeCartApi(product.prod_id)}
                >
                  -
                </button>
                <button className={"py-2 col-4 " + styles.middle}>
                  {product_cart[product.prod_id]}
                </button>
                <button
                  className={"py-2 col-4 btn-dark-jm " + styles.right}
                  onClick={() => addCartApi(product.prod_id)}
                >
                  +
                </button>
              </>
            ) : (
              <button
                className={"py-2 btn-dark-jm " + styles.addToCart}
                onClick={() => addCartApi(product.prod_id)}
              >
                Add to cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
