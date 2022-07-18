type Player = {
  id: string;
  nick: string;
  isAdmin: boolean;
};

type Room = {
  id: string;
  players: Player[];
  word?: string;
};

export class Store {
  private static instance: Store;
  rooms: Room[];

  private constructor() {
    this.rooms = [];
  }

  public static getInstance(): Store {
    if (!Store.instance) {
      Store.instance = new Store();
    }

    return Store.instance;
  }

  public getRooms() {
    return this.rooms;
  }

  public createRoom({ id, players }: Room): Room {
    if (this.rooms.find((room) => room.id === id)) {
      return {} as Room;
    }

    const room = { id, players };

    this.rooms = [...this.rooms, room];
    console.log(`Room created: ${JSON.stringify(room)}`);

    return room;
  }
}
