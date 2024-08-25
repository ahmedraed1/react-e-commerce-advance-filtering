import { BsFillBagFill } from "react-icons/bs";

const Card = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  status,
  color,
  category,
  company,
}) => {
  return (
    <>
      <section className="card position">
        <img src={img} alt={title} className="card-img" />
        <span
          className="status"
          style={
            status ? { backgroundColor: "green" } : { backgroundColor: "red" }
          }
        ></span>
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
          <div style={{ padding: "10px 0px" }}>
            <span className="block">Color : {color}</span>
            <span className="block">Category :{category}</span>
            <span className="block">Company :{company}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
