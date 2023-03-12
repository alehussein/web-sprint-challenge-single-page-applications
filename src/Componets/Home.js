import React from "react";
import "../App.css"
import { Link } from "react-router-dom";





const Home = () => {
    return (
      <>
        <div id="image">
         {/* <img src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Pizza" /> */}
         <h1>Your favorite food, delivery while coding</h1>
         <Link to="pizza"><button id="order-pizza">Pizza?</button></Link>
        </div>
        <div id="boddy">
          <h2 id="menuh2">Food Delivery in Gothan City</h2>
          <div id="menu">
           <div id="burguer">
             <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Burger"></img>
             <h2>McDonald's</h2>
             <p>$ - American - Fast Food - Burgers</p>
             <button>20-30 min</button>
             <button>$5.99 Delivery Fee</button>
            </div>
           
            <div id="sweetgreen">
             <img src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg" alt="salads"></img>
             <h2>Sweetgreen</h2>
             <p>$ - American - Fast Food - Burgers</p>
             <button>20-30 min</button>
             <button>$5.99 Delivery Fee</button>
            </div>
  
            <div id="starbucks">
              <img src="https://images.pexels.com/photos/15813480/pexels-photo-15813480.jpeg" alt="coffe"></img>
              <h2>Starbucks</h2>
              <p>$ - American - Fast Food - Burgers</p>
              <button>20-30 min</button>
              <button>$5.99 Delivery Fee</button>
            </div>
            
          </div>
         </div>
         <div id="linea"></div>
         <div id="menu">
           <div id="burguer">
             <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Burger"></img>
             <h2>McDonald's</h2>
             <p>$ - American - Fast Food - Burgers</p>
             <button>20-30 min</button>
             <button>$5.99 Delivery Fee</button>
            </div>
           
            <div id="sweetgreen">
             <img src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg" alt="salads"></img>
             <h2>Sweetgreen</h2>
             <p>$ - American - Fast Food - Burgers</p>
             <button>20-30 min</button>
             <button>$5.99 Delivery Fee</button>
            </div>
  
            <div id="starbucks">
              <img src="https://images.pexels.com/photos/15813480/pexels-photo-15813480.jpeg" alt="coffe"></img>
              <h2>Starbucks</h2>
              <p>$ - American - Fast Food - Burgers</p>
              <button>20-30 min</button>
              <button>$5.99 Delivery Fee</button>
            </div>
            
          </div>
  
         
      </>
    );
  };
  export default Home;