import { Task } from "./task.js";
import { User } from "./user.js";

const taskInstance = new Task("test message");
const userInstance = new User(taskInstance);
userInstance.do();
