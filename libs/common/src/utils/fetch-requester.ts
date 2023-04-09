import { TypeChecker } from '@lib/common/utils/type-checker';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch');

export class FetchRequest {
  async request(params: {
    method: 'GET' | 'POST';
    url: string;
    cookie: string;
    headers?: any;
    body?: any;
  }) {
    const { method, url, cookie, headers, body } = params;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        accept: 'application/json',
        cookie,
        ...headers,
      },
      body: TypeChecker.isNull(body) ? null : JSON.stringify(body),
      method: method,
    });
    clearTimeout(timeoutId);

    return await res.json();
  }
}
