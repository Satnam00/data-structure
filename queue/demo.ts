import {QueueUsingArray} from "./queue-using-array";

let queueArray = new QueueUsingArray<number>();
queueArray.push(10);
queueArray.push(20);
queueArray.push(30);
queueArray.push(40);

queueArray.pop();

console.log('queue : ', queueArray._store);
