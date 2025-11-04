import { configure, Logger, getLogger } from 'log4js';
import 'log4js/lib/appenders/file';

configure({
  categories: {
    'default': {
      appenders: ['console', 'system'],
      level: 'info'
    },
    'user': {
      appenders: ['console', 'user'],
      level: 'info'
    }
  },
  appenders: {
    console: {
      type: 'console',
      layout: {
        type: 'basic',
        data: {
          '%d': 'yyyy-MM-dd HH:mm:ss',
          '%p': '[%p]',
          '%c': '%c',
          '%m': '%m',
          '%n': '\n',
        },
      },
    },
    system: {
      type: 'dateFile',
      filename: 'logs/system',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      maxLogSize: 10 * 1024 * 1024, // 设置文件大小为 10MB
      backups: 5, // 保留 5 个备份文件
      layout: {
        type: 'basic'
      },
    },
    user: {
      type: 'dateFile',
      filename: 'logs/user',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      maxLogSize: 200 * 1024 * 1024, // 设置文件大小为 200MB
      backups: 5, // 保留 5 个备份文件
      layout: {
        type: 'basic'
      },
    },
  },
});

export const logger = (name: string = 'system') => {
  return getLogger(name);
};