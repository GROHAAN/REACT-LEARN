

const PropsChild = ({myprice,mypro}) => {

    // let {myname,myage}= Props

  return (
    <div>
      {/* this is child
      <h1>My name is {Props.myname} and {Props.myage}</h1>
      <h1>My name is {myname} and {myage}</h1> */}
      
      <div className="box">
        <div className="container">
          <div className="image"></div>
        <h1 className="price">Price :  {myprice} </h1>
        <h2 className="product">Product : {mypro}</h2>
        <button type="button">Buy now</button>
        </div>

      </div>


      
    </div>
    )
}

export default PropsChild
