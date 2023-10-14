import React from "react";

 


export default class Mainelement extends React.Component{
    render(){
        return (<>
        <div id="layout2">
        <div id="greeting"><h4>Greetings Fitpeo(●'◡'●),</h4>
               <input type="text" placeholder="Search"/>
        </div>
        <div id="fourguys">
        <div id="box"><div id="inner-box"><i class="fa-solid fa-clipboard-list" style={{color:"green"}}></i></div><div id="inner-box"><p>Earning</p>
        <h3>$198k</h3><p>+37.8% this month</p></div></div>
            <div id="box"><div id="inner-box"><i class="fa-solid fa-book" style={{color:"violet"}}></i></div><div id="inner-box"><p>Orders</p><h3>$2.4k</h3><p>-2% this month</p></div></div>
            <div id="box"><div id="inner-box"><i class="fa-solid fa-wallet" style={{color:"aqua"}}></i></div><div id="inner-box"><p>Balance</p><h3>$2.4k</h3><p>-2% this month</p></div></div>
            <div id="box"><div id="inner-box"><i class="fa-solid fa-bag-shopping" style={{color:"pink"}}></i></div><div id="inner-box"><p>Total Sales</p><h3>$89k</h3><p>+11% this week</p></div></div>
            
        </div>
        <div id="twoguys">
            <div id="overview"><div id="info"><div ><h3>Overview</h3><p>Monthly earning</p></div><div><select>
                <option>Quaterly</option><option>Half</option><option>Yearly</option><option>All time</option></select></div></div>
                <div id="bars">

                </div>
                </div>
            <div id="customers"><div><h3>Customers</h3>
            <p>Customers that buy products</p></div>
            <div id="circle"></div>
            </div>
        </div>
        <div id="oneguy">
           
                <div id="product">
                    <div id="box1"><h3>Product Sell</h3>
                 </div><div id="search"><input type="text" placeholder="Search"  />
                    </div><div id="option"><select><option>Last Week</option><option>Last 30days</option><option>Last 3 months</option></select></div>
                    </div>
                    <div id="container">
                        <div id="cols">
                            <div id="name"><p>Product Name</p></div><div id="list"><ul><li>Stock</li><li>Price</li><li>Total Sales</li></ul></div>

                        </div>
                        <div id="rows">
                            <div id="name"><p>Abstract D</p></div><div id="list"><ul><li>32 in stock</li><li>$ 45.99</li><li>20</li></ul></div>

                        </div>
                        <div id="rows">
                            <div id="name"><p>Sarphens Illustrtion</p></div><div id="list"><ul><li>32 in stock</li><li>$ 45.99</li><li>20</li></ul></div>

                        </div>
                    </div>

                     
           


        </div>

        </div>

        
        </>)
    }
}