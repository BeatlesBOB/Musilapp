import socketio from "socket.io-client";
import {createContext,useState} from "react";

export const SocketContext = createContext();

export function SocketProvider({children}){
    const socket = socketio.connect('http://192.168.1.14:8080');
    
    return (
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    )
}