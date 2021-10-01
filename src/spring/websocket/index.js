import WebSocketProvider from "./websocketprovider";
import Components from "./component";
const WebSocket = () => {

    return (
        <WebSocketProvider>
            <div className="row">
                <h6>WebSocket </h6>
                <p>The WebSocket protocol has only two agendas : 1.) to open up a handshake, and 2.) to help the data transfer. Once the server and client both have their handshakes in, they can send data to each other with less overhead at will.</p>
            </div>
            <Components />
        </WebSocketProvider>
    )
}
export default WebSocket;