import pino from 'pino';
import { logflarePinoVercel } from 'pino-logflare';

// create pino-logflare console stream for serverless functions and send function for browser logs
const { stream, send } = logflarePinoVercel({
  apiKey: 'WWFVXh2W90eq',
  sourceToken: '9e2005f7-7dda-4fee-9610-a3854d524597',
});

const logger = pino(
  {
    browser: {
      transmit: {
        send: send,
      },
    },
    level: 'debug',
    base: {
      env: process.env.ENV || 'ENV not set',
      revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
    },
  },
  stream,
);

const formatObjectKeys = (headers) => {
  const keyValues = {};
  Object.keys(headers).map((key) => {
    const newKey = key.replace(/-/g, '_');
    keyValues[newKey] = headers[key];
  });

  return keyValues;
};

export { logger, formatObjectKeys };
