import React, { use, useState } from "react";
import axios from "axios";

const App = () => {

  const [data, setData] = useState([]);

  const getData = async()=>{
    const response =await axios.get('https://picsum.photos/id/{image_id}/{width}/{height}')
    setData(response.data)
    console.log(data)
  }



  return ( 
    <>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <h1>App Component</h1>
      <div className="flex p-2 gap-8 items-center">

        <button onClick={getData}>submit</button>
        {
          data.map(function(elem, idx){
            return <div key={idx}>
              <img src="elem.downloade_url" alt="" />
            </div>
          })
        }
        <h4>product</h4>
        <h4>items</h4>
        <h4>menu</h4>
        <h4>about</h4>
        
      </div>
    </nav>
    </>
   );
}
 
export default App;