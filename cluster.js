var cluster = require('cluster');

if (cluster.isWorker) {

  console.log('I am a worker');
} else {
  console.log('I am a master');
  let work=cluster.fork();

work.exit();

}