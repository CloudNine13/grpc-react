/**
 * @fileoverview gRPC-Web generated client stub for chatPackage
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_chat_pb from '../proto/chat_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ChatServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoChatInit = new grpcWeb.MethodDescriptor(
    '/chatPackage.ChatService/ChatInit',
    grpcWeb.MethodType.UNARY,
    proto_chat_pb.InitRequest,
    proto_chat_pb.InitResponse,
    (request: proto_chat_pb.InitRequest) => {
      return request.serializeBinary();
    },
    proto_chat_pb.InitResponse.deserializeBinary
  );

  chatInit(
    request: proto_chat_pb.InitRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_chat_pb.InitResponse>;

  chatInit(
    request: proto_chat_pb.InitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_chat_pb.InitResponse) => void): grpcWeb.ClientReadableStream<proto_chat_pb.InitResponse>;

  chatInit(
    request: proto_chat_pb.InitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_chat_pb.InitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatPackage.ChatService/ChatInit',
        request,
        metadata || {},
        this.methodInfoChatInit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatPackage.ChatService/ChatInit',
    request,
    metadata || {},
    this.methodInfoChatInit);
  }

  methodInfoSendMessage = new grpcWeb.MethodDescriptor(
    '/chatPackage.ChatService/SendMessage',
    grpcWeb.MethodType.UNARY,
    proto_chat_pb.MessageRequest,
    google_protobuf_empty_pb.Empty,
    (request: proto_chat_pb.MessageRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  sendMessage(
    request: proto_chat_pb.MessageRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  sendMessage(
    request: proto_chat_pb.MessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  sendMessage(
    request: proto_chat_pb.MessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatPackage.ChatService/SendMessage',
        request,
        metadata || {},
        this.methodInfoSendMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatPackage.ChatService/SendMessage',
    request,
    metadata || {},
    this.methodInfoSendMessage);
  }

  methodInfoUserStream = new grpcWeb.MethodDescriptor(
    '/chatPackage.ChatService/UserStream',
    grpcWeb.MethodType.SERVER_STREAMING,
    proto_chat_pb.StreamRequest,
    proto_chat_pb.UserStreamResponse,
    (request: proto_chat_pb.StreamRequest) => {
      return request.serializeBinary();
    },
    proto_chat_pb.UserStreamResponse.deserializeBinary
  );

  userStream(
    request: proto_chat_pb.StreamRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/chatPackage.ChatService/UserStream',
      request,
      metadata || {},
      this.methodInfoUserStream);
  }

  methodInfoChatStream = new grpcWeb.MethodDescriptor(
    '/chatPackage.ChatService/ChatStream',
    grpcWeb.MethodType.SERVER_STREAMING,
    proto_chat_pb.StreamRequest,
    proto_chat_pb.StreamMessage,
    (request: proto_chat_pb.StreamRequest) => {
      return request.serializeBinary();
    },
    proto_chat_pb.StreamMessage.deserializeBinary
  );

  chatStream(
    request: proto_chat_pb.StreamRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/chatPackage.ChatService/ChatStream',
      request,
      metadata || {},
      this.methodInfoChatStream);
  }

}

