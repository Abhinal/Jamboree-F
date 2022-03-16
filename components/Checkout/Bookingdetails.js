import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/Checkout/BookingDetails.module.css";

export default function Bookingdetails() {
  const name = useSelector((state) => state.jamboree.username)
  const phone_number = useSelector((state) => state.jamboree.phone_number)
  const email = useSelector((state) => state.jamboree.email)
  

  return (
    <div id={styles.bookedItems}>
      <table className="table mt-2">
        <tbody>
          <tr>
            <th scope="row">Name:</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th scope="row">Mobile:</th>
            <td>{phone_number}</td>
          </tr>
          <tr>
            <th scope="row">Email:</th>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
