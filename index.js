const element = (
  <div className="container">
    <div className="league-container">
      <h1 className="heading">Super Over League</h1>
      <div className="image-container">
        <img
          className="sport_image"
          src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        />
        <img
          className="sport_image"
          src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
