import { EncryptionMode, UID, SDK_MODE } from "agora-rtc-sdk-ng";

const config: configType = {
  uid: 0,
  appId: "cc7bb6b0165a4ee8855a212baa58e50c",
  channelName: "test",
  rtcToken: "007eJxTYBCYcb07lWeDkdH3ReGHFy1sip0+K6epRChdfb34rKnv3JcoMCQnmyclmSUZGJqZJpqkplpYmJomGhkaJSUmmlqkmhokM4kppjUEMjKsXPqegREKQXwWhpLU4hIGBgAxvh8A",
  serverUrl: "",
  proxyUrl: "http://localhost:8080/",
  tokenExpiryTime: 600,
  token: "",
  encryptionMode: "aes-128-gcm2",
  salt: "",
  encryptionKey: "",
  destChannelName: "",
  destChannelToken: "",
  destUID: 2,
  secondChannel: "",
  secondChannelToken: "",
  secondChannelUID: 2,
  selectedProduct: "rtc"
};

export type configType = {
  uid: UID;
  appId: string;
  channelName: string;
  rtcToken: string | null;
  serverUrl: string;
  proxyUrl: string;
  tokenExpiryTime: number;
  token: string;
  encryptionMode: EncryptionMode;
  salt: "";
  encryptionKey: string;
  destUID: number;
  destChannelName: string,
  destChannelToken: string,
  secondChannel: string,
  secondChannelToken: string
  secondChannelUID: number,
  selectedProduct: SDK_MODE
};

export default config;