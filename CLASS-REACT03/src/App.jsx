import React from "react";

function GreetingMessage() {
  const hour = new Date().getHours(); 
  let message = "";

  if (hour >= 5 && hour < 12) {
    message = "Good Morning ";
  } else if (hour >= 12 && hour < 17) {
    message = "Good Afternoon ";
  } else if (hour >= 17 && hour < 20) {
    message = "Good Evening 🌆";
  } else {
    message = "Good Night ";
  }

  return (
    <div style={{ 
      textAlign: "center", 
      fontSize: "2rem", 
      marginTop: "50px" 
    }}>
      {message}
    </div>
  );
}

export default GreetingMessage;