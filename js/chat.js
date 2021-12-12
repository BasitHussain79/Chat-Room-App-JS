import { db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";

const _collection = collection(db, 'chats');

class Chatroom {
    constructor(username, room) {
        this.room = room;
        this.username = username;
        this.message = _collection;
    }

    addChat = async (message) => {
        const userMessage = {
            username: this.username,
            room: this.room,
            created_at: serverTimestamp(),
            message,
        }
        const response = await addDoc(_collection, userMessage);
        return response;
    }
}

const chatroom = new Chatroom('subhan', 'general');

console.log(chatroom);

chatroom.addChat('Learning JavaScript')
    .then(() => console.log('Chat Added'))
    .catch((err) => console.log(err));

