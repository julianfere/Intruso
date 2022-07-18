// type EventTypes = "Test" | "CreateRoom" | "JoinRoom" | "GetRooms";

enum EventTypes {
  CreateRoom = "create-room",
  JoinRoom = "join-room",
  GetRooms = "get-rooms",
  Test = "test",
}

type EventPayload = CreateRoomPayload;

type Player = { id: string; nick: string; isAdmin: boolean };

type CreateRoomPayload = {
  player: Player;
};

export { EventTypes, EventPayload, Player };
