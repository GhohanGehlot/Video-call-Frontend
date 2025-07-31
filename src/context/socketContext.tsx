import socketIoClient from "socket.io-client";
import {  createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";
import {v4 as UUIDv4} from "uuid";

const WS_SERVER =  "http://localhost:5500";
export const SocketContext = createContext<any | null >(null);

const socket = socketIoClient(WS_SERVER);

interface Props {
    children: React.ReactNode
}

export const SocketProvider: React.FC<Props> = ({ children}) => {

    const navigate = useNavigate();

    const [user , setUser] = useState<Peer>();
    const [stream , setStream] = useState<MediaStream>()

    const fetchParticipantList = ({roomId, participants} : {roomId : string , participants : string[]}) => {
            console.log("Fetched some participants");
            console.log(roomId , participants);
    }

    const fetchUserFeed = async () => {
       const stream = await navigator.mediaDevices.getUserMedia({ video : true , audio: true});
       setStream(stream);
    }

    useEffect(()=> {

        const userId = UUIDv4();
        const newPeer = new Peer(userId);

        setUser(newPeer);

        fetchUserFeed();

        const enterRoom = ({ roomId} : {roomId : string}) => {
            navigate(`/room/${roomId}`)
        }

        socket.on("room-created" , enterRoom);

        socket.on("get-user" , fetchParticipantList);

    }, [])
    return(
        <SocketContext.Provider value = {{ socket , user ,stream }}>

        {children}

        </SocketContext.Provider>
    )
}