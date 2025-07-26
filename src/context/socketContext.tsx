import socketIoClient from "socket.io-client";
import {  createContext } from 'react';

const WS_SERVER =  "http://localhost:5500";
const SocketContext = createContext<any | null >(null);

const socket = socketIoClient(WS_SERVER);

interface Props {
    children: React.ReactNode
}

export const SocketProvider: React.FC<Props> = ({ children}) => {
    return(
        <SocketContext.Provider value = {{ socket }}>

        {children}

        </SocketContext.Provider>
    )
}