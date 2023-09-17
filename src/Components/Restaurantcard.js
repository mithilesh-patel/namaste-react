const Restaurantcard = (props) => {
    const { resData } = props;
    const { name } = resData?.info;
    const { url } = resData?.info?.o2FeaturedImage;
    const { address } = resData?.info?.locality;
    const {rating} = resData?.info?.ratingNew?.ratings?.DELIVERY;
  
    return (
      <div className="res-card">
        <h2>{name}</h2>
        <img src={url} alt="" />
        <h3>Address : {address}</h3>
        <h3>Rating : {rating}</h3>
      </div>
    );
  };
  

  export default Restaurantcard;