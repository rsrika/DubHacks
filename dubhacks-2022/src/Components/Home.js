import React from 'react'
import { useNavigate } from 'react-router';
import {Redirect} from 'react-router-dom';



// displays coupons
function Cards(props) {
  
    if(props.data.length < 1) {
      return <h1 className="no-favs">No coupons for this item available. Please try again at a later date!</h1>
    }
    else {
      // the props for this should be the state values, specifically the card object array, and the gridView
      // based on the listView/GridView thing, rerender the cards accordingly
    
        return props.data.map((currentCard) => {
          
          return(
          <div className="cardpoolGrid" key={currentCard.name_product}>
            <CardGridView key={currentCard.name_product} card={currentCard} />
          </div>);
        });
      
    }
  }



function CardGridView(props) {
    let navigate = useNavigate();
    let url = "/recipes/" + props.card.name_product.split(" ").join("").toString();  
   
    return(
      <div  className="card" onClick= {() => {navigate(url)}}>
        <img className="card-img-top" src={props.card.image} alt={props.card.name_product} />
        <div className="card-body">
            <p className="card-title h5">{props.card.name_product}</p>
        </div>
      </div>
    );
}

export function CouponsPage(props) {
    return (
        <div>
            <div>
                {/* search bar and title */}
            </div>
            <div>
                <Cards data={props.data} />
            </div>

        </div>

    );
}

