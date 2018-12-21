/* @flow */
import {
  SUBSCRIBE_ALL,
  SUBSCRIBE_CLOSED,
  SUBSCRIBE_SUBSCRIBERS_ADDED,
  SUBSCRIBE_SUBSCRIBERS_REMOVED,
} from './src/lib';

import registry, { hasPubChan } from './src/registry';

const id = Symbol.for('@test');
const chan = registry.get(id);

chan
  .subscribe()
  .to(SUBSCRIBE_SUBSCRIBERS_REMOVED)
  .do((ref, ids, event, subscriber) => {
    try {
      console.log('Subscriber Removed! ', subscriber);
    } catch (e) {
      console.log('Error: ', e);
    }
  });

chan
  .subscribe()
  .to(SUBSCRIBE_CLOSED)
  .do((ref, ids, event, subscriber) => {
    console.log('Closed!');
    ref.cancel();
  });

// chan
//   .subscribe()
//   .to(SUBSCRIBE_SUBSCRIBERS_ADDED)
//   .do((ref, ids, event, subscriber) => {
//     console.log(
//       'Subscribers Added 2!: ',
//       subscriber === ref.subscription,
//       event,
//       subscriber.keys,
//     );
//   });

// chan
//   .subscribe()
//   .to(SUBSCRIBE_SUBSCRIBERS_REMOVED)
//   .do((ref, ids, subscriber, event) => {
//     console.log('Subscriber Removed! ', subscriber.keys);
//     console.log(chan.size);
//   });

// chan
//   .subscribe()
//   .to(SUBSCRIBE_ALL)
//   .do((ref, ids) => {
//     console.log('Subscribe All Executes: ', ids);
//   });

setTimeout(() => {
  chan.close();
});

// chan
//   .subscribe()
//   .to('one')
//   .do(() => console.log(2));
// chan
//   .subscribe()
//   .to('one')
//   .do(() => console.log(3));

// console.log('Size: ', chan.size);

// const sub = chan
//   .subscribe({ async: true })
//   .to('test')
//   .do((...args) => {
//     console.log('Do One! ');
//   })
//   .do((ref, ...args) => {
//     console.log('Test Received');
//     sub.cancel();
//   });

// const sub2 = chan
//   .subscribe()
//   .to('test')
//   .do(() => {
//     console.log('DO 3!');
//   });

// chan
//   .broadcast()
//   .send('one')
//   .then(() => {
//     console.log('Broadcast Next');
//     // chan.broadcast().send('two');
//     console.log(hasPubChan(id));
//   });

// console.log('hi');

// import { frozenSet } from "./src/lib/utils/freeze";

// const set = new Set([1, 2, 3]);

// const frozen = frozenSet(set);

// Set.prototype.add.call(frozen);

// // console.log(frozen);
