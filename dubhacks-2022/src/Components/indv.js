
// importing the right modules
 
import {useParams} from 'react-router-dom';
import { getRecipes } from '../backend/recipes.js';


function Recipes(props) {
    let rec = getRecipes(props);
    console.log("rec" , rec);
    return rec.map((r) => {
        return (<p>{r.title}</p>);
    }

    );
}
// renders the actual component
export function Indv(props) {
    // the page will get the object from the url that the page goes to 
    let urlParams = useParams();
    let couponName = urlParams.coupon_name; // gets me the actual object name


    let coupon =  props.data.filter((coupon) => {
      return coupon.name_product.split(" ").join("") === couponName;
    }); 

    coupon = coupon[0];
    if(!coupon) return <h2>Coupon not specified</h2> 

    let aboutTitle = "Recipes using: " + coupon.name_product;
  
    // returns the actual components
    return (<div className="indv-info" key={coupon.name_product}>
      <div className="card indv-col">
        <div className="card-title">
          {aboutTitle}
        </div>
        <div className="card-img-top">
         
        </div>
        <div className="card-body candy-detail">
            <div>{Recipes(coupon.type)}</div>
        </div>
      </div>
      
    </div>);
  }

 




  