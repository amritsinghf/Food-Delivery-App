import { CDN_URL, STAR_IMG } from "../../src/utils/constants"
export const RestaurantCard = ({ cardDetails }) => {
     const { name, cloudinaryImageId, avgRating, cuisines, areaName } = cardDetails?.info
     const { deliveryTime } = cardDetails?.info.sla
     return (
          <div className="card">
               <li className="res-card">
                    <img src={CDN_URL + cloudinaryImageId} className="card-img" />
                    <div>{name}</div>
                    <div className="card-details">
                         <img src={STAR_IMG} className="star-img" />
                         {avgRating} . {deliveryTime} mins
                    </div>
                    <div>
                         <p>{cuisines.join(", ")}</p>
                         <p>{areaName}</p>
                    </div>
               </li>
          </div>
     )
}