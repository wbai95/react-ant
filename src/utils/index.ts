// capitalize first letter
export const cfl = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

/**
 * 数字千分位格式化
 * @param num number
 */
export const toThousands = (num: number) =>
  (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');

/**
 * @file byte 转化为 'KB', 'MB', 'GB', 'TB'
 * by Aliceljm and stack overflow community
 */
export function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) {
    return '0 Bytes';
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export const array2clusterFlat = <T>(
  container: T[],
  keys: (keyof T)[]
): Record<string, T> =>
  container.reduce(
    (pre, cur) => {
      const key = keys.map(key => cur[key]).join('_');
      pre[key] = cur;

      return pre;
    },
    {} as Record<string, T>
  );

export const array2cluster = <T>(
  container: T[],
  keys: (keyof T)[]
): Record<string, T[]> =>
  container.reduce(
    (pre, cur) => {
      const key = keys.map(key => cur[key]).join('_');
      !pre[key] && (pre[key] = []);

      pre[key].push(cur);

      return pre;
    },
    {} as Record<string, T[]>
  );
