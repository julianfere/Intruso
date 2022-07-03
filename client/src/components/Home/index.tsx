import { socket } from "../../connection";
import { generateRandomRoomId } from "../../utils";
import {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useId,
  useState,
} from "react";
import { animals, colors, uniqueNamesGenerator } from "unique-names-generator";
import Modal from "../Modal";

import "./home.css";

type User = {
  id: string;
  name: string;
  isHost: boolean;
};

const handleNickChange =
  (setUser: Dispatch<SetStateAction<User>>) => (event: SyntheticEvent) => {
    const element = event.target as HTMLInputElement;
    setUser((prevState) => ({ ...prevState, name: element.value }));
  };

const handleRoomIdChange =
  (setRoomId: Dispatch<SetStateAction<string>>) => (event: SyntheticEvent) => {
    const element = event.target as HTMLInputElement;
    setRoomId(element.value);
  };

const connectToRoom =
  (
    roomId: string,
    setShowRoomModal: Dispatch<SetStateAction<boolean>>,
    user: User
  ) =>
  (event: SyntheticEvent) => {
    if (roomId.length === 0) return;

    event.preventDefault();
    socket.emit("join", JSON.stringify({ roomId, user }));
    setShowRoomModal(false);
  };

socket.connect();

const Home = () => {
  const randomName = uniqueNamesGenerator({
    dictionaries: [colors, animals],
    separator: " ",
    style: "capital",
  });

  const [user, setUser] = useState({
    name: randomName,
    id: useId(),
    isHost: false,
  });

  const [room, setRoom] = useState("");
  const [showNickModal, setShowNickModal] = useState(false);
  const [showRoomModal, setShowRoomModal] = useState(false);

  const status = socket.connected ? "online" : "offline";

  return (
    <main>
      <div>
        <h1>Nick: {user.name}</h1>
      </div>
      <section className="home-options">
        <button className="btn btn-create">Create a room </button>
        <button className="btn btn-join" onClick={() => setShowRoomModal(true)}>
          Join a room
        </button>
        <button className="btn btn-edit" onClick={() => setShowNickModal(true)}>
          Change Nickname
        </button>
      </section>
      <footer>
        <p className="status-bar">
          Status: <span className={status}>{status}</span>
        </p>
      </footer>
      <Modal
        handleClose={() => setShowNickModal(false)}
        handleClick={() => setShowNickModal(false)}
        show={showNickModal}
      >
        <input
          className="text-input"
          type="text"
          onChange={handleNickChange(setUser)}
        />
      </Modal>
      <Modal
        handleClose={() => setShowRoomModal(false)}
        handleClick={connectToRoom(room, setShowRoomModal, user)}
        show={showRoomModal}
      >
        <input
          className="text-input"
          type="text"
          onChange={handleRoomIdChange(setRoom)}
          placeholder="Room ID"
        />
      </Modal>
    </main>
  );
};

export default Home;
