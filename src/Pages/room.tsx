import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { SocketContext } from "../context/socketContext";

export const Room : React.FC = () => {

    const {id} = useParams();
    const {socket} = useContext(SocketContext);

    useEffect(() => {
        socket.emit("join-room" , {roomId : id});
    }, [])

    return(
        <div>
            room : {id}
        </div>
    )
}