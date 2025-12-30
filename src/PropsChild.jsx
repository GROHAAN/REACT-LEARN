

const PropsChild = (Props) => {

    let {myname,myage}= Props

  return (
    <div>
      this is child
      <h1>My name is {Props.myname} and {Props.myage}</h1>
      <h1>My name is {myname} and {myage}</h1>
      
    </div>
    )
}

export default PropsChild
