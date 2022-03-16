import styles from "../../styles/Layout/Footer.module.css"
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="page-footer font-small indigo text-white montserrat"
      id={styles.footer}
    > 
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-4 d-flex mb-auto mt-3 mt-md-5 justify-content-center">
            <Image src="/../public/images/logo_white.png" alt="jamboree logo" objectFit="contain" width={185} height={57}/>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-4 mx-auto text-center">
            <h5 className="font-weight-bold mb-4 mt-5">Follow us on</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">
                  <i className="fab fa-facebook fa-lg mr-2"></i>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="fab fa-instagram fa-lg mr-2"></i>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="fab fa-whatsapp fa-lg mr-2"></i>
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-4 mx-auto">
            <h5 className="font-weight-bold mb-4 mt-5">Contact us</h5>
            <ul className="list-unstyled">
              <li>
                Jamboree, Lorem Ipsum is simply dummy text of the printing and
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © Copyright JamBoree 2021:
        <a href="https://jamboree.com/" className="text-white"> JamBoree.com</a>
      </div>
    </footer>
  );
}
