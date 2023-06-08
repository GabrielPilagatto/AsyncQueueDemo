import { useEffect } from 'react';
import Async from 'async';

function TaskQueue() {
  useEffect(() => {
    // We create a new queue
    const queue = Async.queue((task, callback) => {
      // We simulate an asynchronous task with a delay
      setTimeout(() => {
        console.log(`Task completed: ${task}`);
        callback();
      }, 1000);
    }, 2); // We set the concurrency limit to 1

    const callback = ()=>{
      console.log(`Callback invocation`);
    };

    // We add some tasks to the queue
    queue.push('Task 1', callback);
    queue.push('Task 2', callback);
    queue.push('Task 3', callback);

    // Optionally, we can handle queue events
    queue.drain(() => {
      console.log('All tasks have been completed');
    });

    // We clean up the queue when unmounting the component
    return () => {
      queue.kill();
    };
  }, []);

  return <></>;
}

export default TaskQueue;