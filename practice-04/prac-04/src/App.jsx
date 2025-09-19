import { useState } from "react"

const App = () => {

const [user, setuser] = useState(" ");


  const SubmitHandler=(e)=>{
    e.preventDefault()
    console.log("form submitted" , user);
  }
  return ( <div>
    <form onSubmit={(e)=>
      SubmitHandler(e)}>

      <input 
      value={user}
      onChange={(g)=>{
        setuser(g.target.value)
      }}


      className=" px-2 py-2 rounded font-bolt text-xl m-5" type="text" placeholder="Enter your name" />
      <button className="text-[white] bg-emerald-600 rounded-bl" type="submit">Submit</button>
    </form>
  </div> );
}
 
export default App;