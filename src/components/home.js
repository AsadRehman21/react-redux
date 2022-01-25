import React from "react";
function Home(props)
{
    console.log(props);
    
    
    const style={
        'width':900,
        'height':100,
        'marginLeft':'-300px'
    }
    const style2={
        'width':50
    }
    const style3={
        'marginTop':-70,
        'marginLeft':300
    }
    const style5={
        'marginTop':-40,
        
    }
    const style4={
    
        'marginLeft':700,
        'width':100,
        'height':30,
        'backgroundColor': 'red',
        'border':'2px solid red',
        'borderRadius':'25px',
        'color':'white',
       
    }
    const style6={
    
        'position':'absolute',
        'width':60,
        'height':30,
        'marginLeft':400,
       
       
    }
    const style7={
    
        'position':'absolute',
        'width':30,
        'height':30,
        'marginLeft':450,
        'marginTop':-20,
        'zIndex':1,
        'backgroundColor':'red',
        'color':'white',
        'borderRadius':'50px',
        'border':'5px solid white',
       
       
    }
    return (
        <div >
           
            <h1>Home Component</h1>
            <div className="cart-wrapper" style={style}>
                <div className="img-wrapper item" >
                     <img style={style2}  src="https://www.whatmobile.com.pk/admin/images/Apple/AppleiPhone13-b.jpg"/>
                </div>
                <div className="text-wrapper item" style={style3}>
                    <span>I-Phone</span>
                    <br/>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item" style={style5} >
                 <button onClick={()=>props.addToCartHandler({price:1000,name:'I-Phone-X1'})} style={style4}>Add to Cart</button>
                 <button onClick={()=>props.removeToCartHandler()} style={style4}>Remove to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
