import {QueueUsingArray} from "./queue-using-array";

let queueArray = new QueueUsingArray<number>();
queueArray.push(10);
queueArray.push(20);
queueArray.push(30);
queueArray.push(40);

console.log('queue : ', queueArray._store);

queueArray.pop();

console.log('queue : ', queueArray._store);

// output :
//     queue :  [ 10, 20, 30, 40 ]
//     queue :  [ 20, 30, 40 ]
