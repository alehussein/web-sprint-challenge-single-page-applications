import React, {useState, useEffect} from "react";
import * as yup from 'yup'
import "../App.css"
import { Link } from "react-router-dom";
import axios from 'axios'



const schema = yup.object().shape({
    name: yup.string().required('user is required').min(2, "name must be at least 2 characters"),
    choice: yup.string().oneOf(['originalRed', 'garlicRanch', 'bbqSauce', 'alfredo']),
    size: yup.string().oneOf(['small', 'medium', 'large'], 'You Must Select One!'),
    switch: yup.boolean(),
    peperoni:yup.boolean(),
    sausaje:yup.boolean(),
    canadian:yup.boolean(),
    italian:yup.boolean(),
    chicker:yup.boolean(),
    onions:yup.boolean(),
    special:yup.string(),
    number:yup.string(),
})

const Form = () => {

 // const [pizza, setPizza] = useState ({size:"", choice:"", switch:false, instruction:"", number:"",peperoni:false, sausaje:false, canadian:false, italian:false, chicker:false, onions:false, pepper:false, tomatos:false, olives:false, garlic:false, hearts:false, threeCheese:false, pineapple:false, extraCheese:false
// })   



const [pizza, setPizza] = useState ({size:"", choice:"", switch:false, special:"", number:"", name:"", peperoni:false, sausaje:false, canadian:false, italian:false, chicker:false, onions:false})

const [disabled, setDisabled] = useState(true)
const [errors, setErrors] = useState ({size:"", choice:"", switch:false, special:"", name:""})
const [order, setOrder] =useState([])


const setPizzaErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };


const change = evt => {
    const { checked, value, name, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    setPizzaErrors(name, valueToUse)
    setPizza({ ...pizza, [name]: valueToUse});
};
  
 useEffect(() => {
    schema.isValid(pizza).then(valid => setDisabled(!valid))
 }, [pizza]);


 const submit = event => {
    event.preventDefault()
    const newPizza = { size: pizza.size.trim(), sauce: pizza.sauce.trim()}
    axios.post('https://reqres.in/api/orders', newPizza)
     .then(res => {
      console.log(res.data)
      setPizza({size:'', sauce:''})
      setOrder([res.data, ...order ])
     })
     .catch(err => { },)
    
  }


    return (
 <div id="pizza">
    <h2 id="principal">Build Your Own Pizza</h2>
    <img src="https://images.pexels.com/photos/7172067/pexels-photo-7172067.jpeg" alt="pizza"/>
    
    <form onSubmit={submit} id="pizza-form">
        <div id="name">
          <h1>Build Your Own Pizza</h1>
          <input type="text" name='name' placeholder="Enter You Name" onChange={change} value={pizza.name}/>
          <p>{errors.user}</p>
        </div>
       
    
    <div id="sizeDiv">
        <h2>Choice of Size</h2>
        
        <label id="selectDiv"><p>{errors.size}</p>
           <select id="size-dropdown" name="size" value={pizza.size} onChange={change}>
              <option value=''>Select</option>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
            </select>
        </label>
    </div>
    <div id="sauce">
      <h2>Choice of Sauce</h2>
      <p>{errors.choice}</p>
      <div id="radio">
         <label>Original Red 
            <input type="radio" name="choice" value="originalRed" onChange={change} checked={pizza.choice === 'originalRed'} /></label>
         <label>Garlic Ranch 
            <input type="radio" name="choice" value="garlicRanch" onChange={change} checked={pizza.choice === 'garlicRanch'}/></label>
         <label>BBQ Sauce 
            <input type="radio" name="choice" value="bbqSauce" onChange={change} checked={pizza.choice === 'bbqSauce'}/></label>
         <label>Sprach Alfredo
            <input type="radio" name="choice" value="alfredo" onChange={change} checked={pizza.choice === 'alfredo'}/></label>
      </div>
    </div>
    <div id="toppings">
        <h2>Add Toppings</h2>
        <p>{errors.checkboxes}</p>
        <div id="box">
           <div className="checkbox-column">
              <label>Peperoni <input type='checkbox' name="peperoni" checked={pizza.peperoni} onChange={change}/></label>
              <label>Sausaje <input type='checkbox' name="sausaje" checked={pizza.sausaje} onChange={change}/></label>
              <label>Canadian Bacon <input type='checkbox' name="canadian" checked={pizza.canadian} onChange={change}/></label>
              <label>Spicy italian Sausage <input type='checkbox' name="italian" checked={pizza.italian} onChange={change}/></label>
              <label>Grilled Chicker <input type='checkbox' name="chicker" checked={pizza.chicker} onChange={change}/></label>
              <label>Onions <input type='checkbox' name="onions" checked={pizza.onions} onChange={change}/></label>
              {/* <label>Green Pepper <input type='checkbox' name="pepper" checked={pizza.pepper} onChange={change}/></label> */}
           </div>
           {/* <div className="checkbox-column">
               <label>Dice Tomatos <input type='checkbox' name="tomatos" checked={pizza.tomatos} onChange={change}/></label>
               <label>Black Olives <input type='checkbox' name="olives" checked={pizza.olives} onChange={change}/></label>
               <label>Roasted Garlic <input type='checkbox' name="garlic" checked={pizza.garlic} onChange={change}/></label>
               <label>Artichoke Hearts<input type='checkbox' name="hearts" checked={pizza.hearts} onChange={change}/></label>
               <label>Three Cheese <input type='checkbox' name="threeCheese" checked={pizza.threeCheese} onChange={change}/></label>
               <label>Pineapple <input type='checkbox' name="pineapple" checked={pizza.pineapple} onChange={change}/></label>
               <label>Extra Cheese <input type='checkbox' name="extraCheese" checked={pizza.extraCheese} onChange={change}/></label>
            </div> */}
        </div>
    </div>
    <div id="substitute">
        <h2>Choice of Substitute</h2>
        <p></p>
        <div id="gluten">
          <label className="switch">
             <input type="checkbox" name="switch" checked={pizza.switch} onChange={change}/>
             <span className="slider"></span>
         </label>
        <p>Gluten Free Crust</p></div>
    </div>
    <div id="intructions">
      <h2>Special Instructions</h2>
      <section>
      <input id="special-text" type='text' name="special"  value={pizza.instruction} onChange={change} placeholder="Anything else you like to add?"/>
      </section>
    </div>
    <div id="linea"></div>
    <div id="finish">
        <input type="number" name="number" onChange={change}/>
        <Link to="confirmation"><button  type='submit' id="order-button" disabled={disabled} name="button">Add Order <span className="space"></span> </button></Link>
    </div>




    </form>
 </div>

);
};

export default Form