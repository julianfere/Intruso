enum EventTypes {
  CreateRoom = "create-room",
  JoinRoom = "join-room",
  GetRooms = "get-rooms",
  RoomJoined = "room-joined",
  Test = "test",
}

type EventPayload = CreateRoomPayload;

type Player = { id: string; nick: string; isAdmin: boolean };

type CreateRoomPayload = {
  roomId: string;
  player: Player;
};

export { EventTypes, EventPayload, Player, CreateRoomPayload };
