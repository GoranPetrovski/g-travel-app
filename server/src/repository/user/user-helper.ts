import UserEntity = require ('./user-entity');
import User = require('./user-interface');


class UserHelper {

    save(userItem: User) {
        return UserEntity.create(userItem, (err: any, post: User) => {
            if (err) throw err;
            return Promise.resolve(post);
        });
    }

    findById(id: string) {
        return UserEntity.findById(id, (err: any, post: User) => {
            if (err) throw err;
            return Promise.resolve(post);
        });
    }

    find(byObject: Object) {
        return UserEntity.find(byObject, (err: any, chats: User[]) => {
            if (err) throw err;
            return Promise.resolve(chats);
        });
    }

    findAndUpdate(id: string, newChat: User) {
        return UserEntity.findByIdAndUpdate(id, newChat, (err: any, post: User) => {
            if (err) throw err;
            return Promise.resolve(post);
        });
    }

    findAndRemove(id: string) {
        return UserEntity.findByIdAndRemove(id, (err: any, post: User) => {
            if (err) throw err;
            return Promise.resolve(post);
        });
    }
}