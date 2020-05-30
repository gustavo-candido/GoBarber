import Redis, { Redis as RedisClient } from 'ioredis';
import cacheConfig from '@config/cache';
import ICacheProvider from '../models/ICacheProvider';

export default class RedisCacheProvider implements ICacheProvider {
  private cliente: RedisClient;

  constructor() {
    this.cliente = new Redis(cacheConfig.config.redis);
  }

  public async save(key: string, value: string): Promise<void> {
    await this.cliente.set(key, value);
  }

  public async recover(key: string): Promise<string | null> {
    const data = await this.cliente.get(key);

    return data;
  }

  public async invalidate(key: string): Promise<void> {}
}
