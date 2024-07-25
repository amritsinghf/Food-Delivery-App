import { LOGO_URL, CART_IMG } from "../utils/constants"
export const Header = () => {
     return (
          <div className="header">
               <div className="logo-container">
                    <img className="logo" src={LOGO_URL} />
               </div>
               <div className="nav-items">
                    <ul>
                         <li>Home</li>
                         <li>About Us</li>
                         <li>Contact Us</li>
                         <li><img src={CART_IMG} className="cart" /></li>
                    </ul>
               </div>
          </div>
     )
}