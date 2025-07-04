import Drop_down from "../components/drop_down";

export default function App() {
  return (
   <>
    <Drop_down Name="suman roy" myob={{name:'suman', year:'third'}} myArr={[1,2,4,5]} />
    <br />
    <Drop_down Name="Sumana Roy" myob={{name:'Sumana', year:'1st'}} myArr={[1,2,4,5]}/>
   </>
  
  );
}
