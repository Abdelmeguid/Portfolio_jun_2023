import myIMG from "./myIMG.jpg";
import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <div>
      <img className={classes.img2}  src={myIMG} alt="horse" />
    </div>
  );
};

export default Cart;

//all below accepted from react to work Good

// return <img src="https://i.stack.imgur.com/DWjfE.png" alt="car" />;

// };

// //

// return (
//   <div>
//     <img
//       className={classes.img1}
//       src="https://media.timeout.com/images/105303515/750/422/image.jpg"
//       alt="A table full of delicious food!"
//     />
//     <img className={classes.img2} src={myIMG} alt="horse" />
//   </div>
// );
// };

// ///////
// <div>
// <img
//   className={classes.img1}
//   src="https://media.timeout.com/images/105303515/750/422/image.jpg"
//   alt="A table full of delicious food!"
// />
// <img className={classes.img2} src={myIMG} alt="horse" />
// </div>
// );
// };
