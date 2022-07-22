import { Store } from "../store";
import { CreateRoomPayload, Player } from "../types";

export function createRoom({ roomId, player }: CreateRoomPayload) {
  const { id, isAdmin, nick } = player;

  return Store.getInstance().createRoom({
    id: roomId,
    players: [{ id, isAdmin, nick }],
  });
}

export function getRooms() {
  return Store.getInstance().getRooms();
}
