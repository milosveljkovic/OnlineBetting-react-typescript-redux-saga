import {put} from 'redux-saga/effects';
import {User} from '../../models/User'
import {registerSuccess, Iregister, IupdateUser, IgetUserById, getUserByIdSuccess} from '../actions/userAction';
import {addNewUserService,updateUserService,getUserByIdService} from '../../services/user-service';

export function* addNewUser(auth:Iregister){
    console.log("add new user");
    var newUser:User={
        id:0,
        email:auth.email,
        password:auth.password,
        credit:500,
        userOrAdmin:"user"
    }
    const user=yield addNewUserService(newUser);
    yield put(registerSuccess(user));
}

export function* updateUser(updatedUser:IupdateUser){
    yield updateUserService(updatedUser.User);
}

export function* getUserById(User:IgetUserById){
    console.log(User.UserId);
    const user=yield getUserByIdService(User.UserId);
    console.log(user);
    yield put(getUserByIdSuccess(user))
}