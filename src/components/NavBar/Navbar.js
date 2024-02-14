import React, { Component } from 'react'

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

render(){
    return(
        <div className='navbar_component'>          {/*to start the Navbar*/}
         <div className='navbar_logo'></div>        {/* to align, just add css and display flex to side by side */}
        <div className='navbar_locator'>
            <div className='navbar_map_logo'></div>    
            <div className='navbar_location'>Mumbai</div>
        </div>
        <div className='navbar_search'>
            <select className='navbar_search_select'>
                <option value="all">All</option>
                <option value="Books">Books</option>
                <option value="Games">Games</option>
                <option value="Toys">Toys</option>
                <option value="Flights">Flights</option>
                <option value="Sexual">Sexual</option>
            </select>
            <input className='navbar_search_input' type='textbox' />
            <div className='navbar_search_icon_div'><div className='navbar_search_icon' /> </div> 
        </div>
        <div style={{color:'white',display:"flex", margin:"10px"}}>
        <div>
            <div>Hello,Sign In</div>
            <div style={{fontWeight:'bold'}}>Accounts & List</div>
        </div>
        <div>
        <div>Returns</div>
            <div style={{fontWeight:'bold'}}>& Orders</div>
        </div>
        <div style={{display:"flex"}}>
            <div className='cart_icon'></div>
            <div style={{fontWeight:'bold'}}>Cart</div>
        </div>

        </div>
        </div>
    )
}

}

export default Navbar;