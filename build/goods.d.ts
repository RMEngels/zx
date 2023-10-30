import * as globbyModule from 'globby';
import minimist from 'minimist';
import { RequestInfo, RequestInit } from 'node-fetch';
import { Duration } from './util.js';
export { default as chalk } from 'chalk';
export { default as fs } from 'fs-extra';
export { default as which } from 'which';
export { default as minimist } from 'minimist';
export { default as YAML } from 'yaml';
export { default as path } from 'node:path';
export { default as os } from 'node:os';
export { ssh } from 'webpod';
export declare let argv: minimist.ParsedArgs;
export declare function updateArgv(args: string[]): void;
export declare const globby: ((patterns: string | readonly string[], options?: globbyModule.Options) => Promise<string[]>) & typeof globbyModule;
export declare const glob: ((patterns: string | readonly string[], options?: globbyModule.Options) => Promise<string[]>) & typeof globbyModule;
export declare function sleep(duration: Duration): Promise<unknown>;
export declare function fetch(url: RequestInfo, init?: RequestInit): Promise<import("node-fetch").Response>;
export declare function echo(...args: any[]): void;
export declare function question(query?: string, options?: {
    choices?: string[];
    hideInput?: boolean;
}): Promise<string>;
export declare function select(query: string, options: string[], selector?: string): Promise<string>;
export declare function stdin(): Promise<string>;
export declare function retry<T>(count: number, callback: () => T): Promise<T>;
export declare function retry<T>(count: number, duration: Duration | Generator<number>, callback: () => T): Promise<T>;
export declare function expBackoff(max?: Duration, rand?: Duration): Generator<number, void, unknown>;
export declare function spinner<T>(callback: () => T): Promise<T>;
export declare function spinner<T>(title: string, callback: () => T): Promise<T>;
