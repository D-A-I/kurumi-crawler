import { SimpleLog } from './types';
import moment from 'moment';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseLog: SimpleLog = require('./logger');

// カリー化途中の型
type Curry1st = (prefix: string) => (message: string) => void;
type Curry2nd = (message: string) => void;

// ロガー（コンテナ対応予定のため、ログファイルは未作成にする 2020/12/11）
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _func = (writeLog: SimpleLog): Curry1st => (prefix: string): Curry2nd => (
  message: string
): void => {
  console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} ${message}`);
};

/* カリー化された関数（以下）を順番に返す
 * -----
 * 1. ログファイル名を設定する関数
 * 2. ログにメッセージを出力する関数 */
export default _func(baseLog);
