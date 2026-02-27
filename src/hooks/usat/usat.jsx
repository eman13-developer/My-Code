import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// export default function Usatcomponent(){
//     const [state,data]=useState("eman");
//     return(
//         <div>
// <h3>{state}</h3>
// <button onClick={()=>data("moneeza")}>click</button>

//         </div>
//     );
// }
export default function Usatcomponent(){
    const [state,data]=useState(0);
    const [show, setShow] = useState(false);
  function modelOpen(){
    setShow(true);
  }
  function modelClose(){
    setShow(false);
  }
function increment(){
data(state+1)
}
function decrement(){
    if(state<2){
        data(1);
        modelOpen();
    }
    else{
        data(state-1);
    }
}
function reset(){
    data(0);
}
    return(
        <div className="flex flex-col items-center">
{/* <Button variant="primary" onClick={modelOpen}>
        WARNING
      </Button> */}

      <Modal show={show} onHide={modelClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modelClose}>
            Close
          </Button>
          <Button variant="primary" onClick={modelClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>










<h3>{state}</h3>
<div className="flex gap-3">
<Button variant="success" onClick={increment}>increment</Button>
<Button variant="danger" onClick={reset}>reset</Button>
<Button variant="warning" onClick={decrement}>decrement</Button>
</div>

        </div>
    );
}

