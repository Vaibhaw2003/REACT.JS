
const Card = () => {
  return (
    <div Style={{marginTop:"20px", backgroundColor:"black", color:"white", padding:"20px", borderRadius:"10px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",height:"200px", width:"300px", display:"inline-block", marginRight:"20px",border:"1px solid white"}}>
        <div style={{padding:"10px", textAlign:"center", backgroundColor:"black", color:"white"}}>
            <h2 style={{margin:"0" ,color:"white",fontSize:"1.25rem"}}>Card Title</h2>
            <p style={{color:"white"}}>This is a simple card component.</p>
            <div style={{padding:"10px"}}>
                <button style={{backgroundColor:"white", color:"black", border:"none", padding:"0.5rem 1rem", borderRadius:"4px", cursor:"pointer"}}>Click Me</button>
            </div>
        </div>
    </div>
  )
}

export default Card