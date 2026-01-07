// let Props = ()=>{

import PropsChild from "./PropsChild"

//     return(

//         <h1>This is Props</h1>
//     )
// }

// export default Props


const Props = () => {
    return (
        <div>
            {/* <h1>This is props sentence</h1>
            <PropsChild myname = "Abhi" myage="26"/> */}

            <PropsChild myprice = "999" mypro="tshirt"/>
            <PropsChild myprice = "999" mypro="tshirt"/>
            <PropsChild myprice = "999" mypro="tshirt"/>
            <PropsChild myprice = "999" mypro="tshirt"/>
        </div>
    )
}

export default Props

