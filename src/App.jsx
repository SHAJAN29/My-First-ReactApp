import "./App.css";

export default function App() {
  return (
 
    <div className="App">
      <Msg name="arjun" pic="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=612x612&w=0&h=pP5ksvhx-gIHFVAyZTn31H_oJuhB0nX4HnLLUN2kVAg="/>
      <Msg name="monisha" pic="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
      <Msg name="Moses" pic="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
    </div>
  );
}



function Msg(props) {
  console.log(props);
  const {name,pic} = props;
  
  return (
<div className="user">
<div className="user-img">
     <img src={pic} width="150" height="150" alt="name" />
    </div>

    <h1>
      Hello <span className="user-name"> {name}😘👌</span>
    </h1>
    </div>
  );
}


