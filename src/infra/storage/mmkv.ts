import { MMKV } from "react-native-mmkv";
import { StorageType } from "./types";

const mmkv = new MMKV();

function set(key: string, value: any) {
  mmkv.set(key, JSON.stringify(value));
}

function get(key: string) {
  const result = mmkv.getString(key);
  if (!result) {
    return null;
  }

  return JSON.parse(result);
}

function remove(key: string) {
  mmkv.delete(key);
}

export const mmkvStorage: StorageType = {
  set,
  get,
  remove,
};
