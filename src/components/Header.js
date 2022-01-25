import React from "react";
function Header(props)
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
            <div className="add-to-cart" >
                <span style={style7}>{props.cardData.length}</span>
                <img style={style6} src="https://www.pngall.com/wp-content/uploads/5/Red-Shopping-Cart-PNG-High-Quality-Image.png"/ >
            </div>
           
        </div>
    );
}

export default Header;
