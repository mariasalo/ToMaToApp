import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import Item7 from '../../images/item7.jpg'
import Item8 from '../../images/item8.jpg'
import Item9 from '../../images/item9.jpg'
import Item10 from '../../images/item10.jpg'
import Item11 from '../../images/item11.jpg'
import Item12 from '../../images/item12.jpg'


import { ADD_TO_CART, REMOVE_ITEM} from '../actions/action-types/cart-actions'
import HaeTuote from '../../toiminnallisuudet/HaeTuote';

const initState = {
    items: [
        {id:1,title:'Kurpitsakeitto', desc: "Keilaniemi, Espoo", price:110,img:Item1},
        {id:2,title:'Luomukananmunia', desc: "Kallio, Helsinki", price:80,img: Item2},
        {id:3,title:'Banaaneja', desc: "Punavuori, Helsinki",price:120,img: Item3},
        {id:4,title:'Suklaarasia', desc: "Otaniemi, Espoo", price:260,img:Item4},
        {id:5,title:'Riisiä', desc: "Lehtisaari, Helsinki", price:160,img: Item5},
        {id:6,title:'Appelsiinilimu', desc: "Ruoholahti, Helsinki",price:90,img: Item6},
        {id:7,title:'Tomaatteja', desc: "Lintuvaara, Espoo",price:90,img: Item7},
        {id:8,title:'Leipää', desc: "Suvisaaristo, Espoo",price:90,img: Item8},
        {id:9,title:'Leivonnaisia', desc: "Suvisaaristo, Espoo",price:90,img: Item9},
        {id:10,title:'Mausteita', desc: "Vallila, Helsinki",price:90,img: Item10},
        {id:11,title:'Appelsiineja', desc: "Ruskeasuo, Helsinki",price:90,img: Item11},
        {id:12,title:'Kahvipaketti', desc: "Itäkeskus, Helsinki",price:90,img: Item12},

    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    else{
        return state
    }
  }

  export default cartReducer