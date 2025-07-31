import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { SocketContext } from "../context/socketContext";
import UserFeedPlayer from "../component/UserFeed";

export const Room : React.FC = () => {

    const {id} = useParams();
    const {socket , user , stream} = useContext(SocketContext);

    useEffect(() => {
    if(user) {
        socket.emit("join-room" , {roomId : id , peerId: user._id});
    };
    }, [id , user , socket])

    return(
        <div>
            room : {id}
            <UserFeedPlayer stream={stream} />
        </div>
    )
}