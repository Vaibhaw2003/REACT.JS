
const Card = () => {
  return (
    <div Style={{marginTop:"20px", backgroundColor:"black", color:"white", padding:"20px", borderRadius:"10px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"}}>
        <div className="card">
            <h2>Card Title</h2>
            <p>This is a simple card component.</p>
            <div className="card-footer">
                <button>Click Me</button>
            </div>
        </div>
    </div>
  )
}

export default Card