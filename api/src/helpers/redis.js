export const addToRedis = (client, rewrite, data) => client.setex(JSON.stringify(rewrite), 3600 * 60, JSON.stringify(data));

export const getFromRedis = (client, rewrite) => client.getAsync(JSON.stringify(rewrite));

export const removeFreomRedis = (client, array) => client.del(array.map((value) => JSON.stringify(value)));
