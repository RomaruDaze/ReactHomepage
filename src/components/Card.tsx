import images from "./images/images.png";

const Card = () => {
  return (
    <div>
      <div className="card1">
        <div className="card">
          <img src={images} className="card-img-top" alt="Purple Dragonite" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <img src={images}/>
      </div>
    </div>
  );
};

export default Card;
