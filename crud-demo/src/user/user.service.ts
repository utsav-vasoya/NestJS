import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('Users') private userModel: Model<UserDocument>) { }

    getUser() {
        return this.userModel.find();
    }

    getUserById(id) {
        return this.userModel.findById(id);
    }

    postUser(record) {
        return this.userModel.create(record);
    }

    updateUser(id, record) {
        return this.userModel.findByIdAndUpdate(id, record, {new: true});
    }

    deleteUser(id){
        return this.userModel.findByIdAndDelete(id)
    }
}