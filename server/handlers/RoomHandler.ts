import { Store } from "../store";
import { Player } from "../types";
import { generateRandomRoomId } from "../utils";

export function createRoom({ id, isAdmin, nick }: Player) {
  const roomId = generateRandomRoomId();

  return Store.getInstance().createRoom({
    id: roomId,
    players: [{ id, isAdmin, nick }],
  });
}

export function getRooms() {
  return Store.getInstance().getRooms();
}
