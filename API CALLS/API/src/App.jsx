import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async ()=> {
    const response = await axios.get('https://picsum.photos/id/{image_id}/{width}/{height}')
    setData(response.data)
    console.log(data)
    
  }

  return ( <>
  <div>
    <button className="text-[red] rounded text-3xl" onClick={getData}>get data</button>
    <div>
      {data.map(function(elem, idx){
        return <div key={idx} className="bg-gay-50 text-black px-5 py-5 ">
          <img src={elem.download_url} alt="" />

        </div>
      })}
    </div>
    </div>
    </> );
}
 
export default App;