import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type schemaType = {
tasks: { id: number; task: string; complete: boolean; }[]
};
export class JsonTodoCollection extends TodoCollection {
    private database: lowdb.LowdbSync<schemaType>;
    constructor(public userName: string, todoItems: TodoItem[] = []) {
        super(userName, []);
        this.database = lowdb(new FileSync("Todos.json"));
        if (this.database.has("tasks").value())  {
            const dbItems = this.database.get("tasks").value();
            dbItems.forEach(item => this.itemMap.set(item.id,
                new TodoItem(item.id, item.task, item.complete)));
        } else {
            this.database.set("tasks", todoItems).write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    addTodo(task: string): number {
        const result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    markComplete(id: number, complete: boolean): void {
        super.markComplete(id, complete);
        this.storeTasks();
    }
    removeComplete(): void {
        super.removeComplete();
        this.storeTasks();
    }
    private storeTasks() {
      console.log(this.itemMap.values());
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}


//PRUEBA DE EJECUCIÓN

const todos = [ new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"), new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true) ];

const collection = new JsonTodoCollection("Adam", todos);


collection.addTodo("Buy Flowers");

collection.addTodo("Get Shoes");

collection.markComplete(1, false);


console.clear();
