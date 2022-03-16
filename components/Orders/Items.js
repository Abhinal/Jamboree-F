import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Orders/Items.module.css";
import Catalog from "./Catalog";
import { updateProductCart } from "../../store/reducer";

export default function Items({ data }) {
  const dispatch = useDispatch();
  const headers = useSelector((state) => state.jamboree.headers);
  const is_login = useSelector((state) => state.jamboree.is_login);

  let [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    if (is_login) {
      let mounted = true;
      const res = fetch(`http://jamboree-b-clone.cloudjiffy.net/api/v1/product/cart`, {
        method: "GET",
        headers,
      }).then((resp) => {
        if (resp.ok) {
          resp.json().then((data) => {
            setCartItem(data);
          });
        }
      });
      return () => (mounted = false);
    }
  }, [headers, is_login]);

  for (const [key, value] of Object.entries(cartItem)) {
    dispatch(
      updateProductCart({
        prod_id: value["prod_id"],
        quantity: value["quantity"],
      })
    );
  }

  return (
    <div id={styles.product_div} className="mt-5">
      <div className="defaultColor cinzel py-5 ">
        <h3 className="text-center">What Would you like to get stitched?</h3>
        {Object.keys(data).map((cat_name, idx) => (
          <div key={idx}>
            <Catalog categoryName={cat_name} data={data[cat_name]} />
          </div>
        ))}
      </div>
    </div>
  );
}
