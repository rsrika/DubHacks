// displays coupons
function CardGridView(props) {
    
   
    
    return(
      <div  key={props.card.competitorname} className="card">
        <img className="card-img-top" src={props.card.imglink} alt={props.card.competitorname}/>
        <div className="card-body">
            <p className="card-title h5">{props.card.competitorname}</p>
            {props.card.userAdded ? <span></span>: <Heart className="heart nobreak" isActive={heartStatus(props.card.candynum)} onClick={() => {setActive(!active); handleClickHeart()}}/>}
            <Link to="/indv" className="btn btn-primary" onClick={handleClickIndv}>More Info</Link>
        </div>
      </div>
    );
  }


