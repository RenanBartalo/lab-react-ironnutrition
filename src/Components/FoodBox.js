import React,{useState} from 'react';
import 'bulma/css/bulma.css';

const FoodBox = ({ foods, theOne, setCliked, cliked }) => {
  let theItem = foods.find((x) => x.name === theOne);
  const [atualQuantity, setQuantity] = useState(theItem.quantity);

  const addCart = () => {
    let theclicked = foods.find((x) => x.name === theOne);
    theclicked.quantity = atualQuantity;
    console.log(theclicked)
    setCliked([...cliked, theclicked]);
     };

  return (
    <div className="foodbox">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={theItem.image} alt="xyz" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{theItem.name}</strong> <br />
                <small>{theItem.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" onChange={(event) => setQuantity(event.target.value)}  />
              </div>
              <div className="control">
                <button onClick={addCart} className="button is-info" >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
export default FoodBox;
