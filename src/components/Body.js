import { useEffect, useState } from "react"
import { cardDetails } from "../utils/cardDetails"
import { RestaurantCard } from "./RestaurantCard"
export const Body = () => {
     const [listOfRestaurants, setListOfRestaurants] = useState(cardDetails);

     useEffect(() => {
          console.log("useEffect called")
          fetchData()
     }, [])

     const fetchData = async () => {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
          const result = await data.json()
          console.log(result)
     }

     console.log("Body rendered")
     return (
          <div className="body">
               <div className="filter">
                    <button className="filter-btn" onClick={() => {
                         const filterList = listOfRestaurants.filter((item) => {
                              return item.info.avgRating > 4
                         })
                         setListOfRestaurants(filterList)
                    }}>Top Rated Restaurants</button>
               </div>
               <div className="res-container">
                    {
                         listOfRestaurants.map((restaurant) => (
                              <RestaurantCard key={restaurant.info.id} cardDetails={restaurant} />
                         ))
                    }
               </div>
          </div>
     )
}
