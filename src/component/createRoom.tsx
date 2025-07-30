import { useContext } from "react";
import { SocketContext } from "../context/socketContext";


const CreateRoom: React.FC = () => {

    const {socket} = useContext(SocketContext);


    function initRoom(){
      socket.emit("create-room");
    }

    return(
        <>
        <button
            className="btn btn-primary"
            onClick={initRoom}
        > Create a new Room 
        </button>
        </>
    )
}

export default CreateRoom;