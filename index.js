import  User from './user.js';
import { Task } from './task.js';


const task = new Task('My export');
const user = new User(task);


console.log(user.do())