import redis from 'redis';
import bluebird from 'bluebird';

const REDIS_PORT = process.env.REDIS_PORT;

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

export default redis.createClient(REDIS_PORT, 'redis');
