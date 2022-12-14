// Original file: proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { InitRequest as _chatPackage_InitRequest, InitRequest__Output as _chatPackage_InitRequest__Output } from '../chatPackage/InitRequest';
import type { InitResponse as _chatPackage_InitResponse, InitResponse__Output as _chatPackage_InitResponse__Output } from '../chatPackage/InitResponse';
import type { MessageRequest as _chatPackage_MessageRequest, MessageRequest__Output as _chatPackage_MessageRequest__Output } from '../chatPackage/MessageRequest';
import type { StreamMessage as _chatPackage_StreamMessage, StreamMessage__Output as _chatPackage_StreamMessage__Output } from '../chatPackage/StreamMessage';
import type { StreamRequest as _chatPackage_StreamRequest, StreamRequest__Output as _chatPackage_StreamRequest__Output } from '../chatPackage/StreamRequest';
import type { UserStreamResponse as _chatPackage_UserStreamResponse, UserStreamResponse__Output as _chatPackage_UserStreamResponse__Output } from '../chatPackage/UserStreamResponse';

export interface ChatServiceClient extends grpc.Client {
  ChatInit(argument: _chatPackage_InitRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_InitResponse__Output>): grpc.ClientUnaryCall;
  ChatInit(argument: _chatPackage_InitRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_InitResponse__Output>): grpc.ClientUnaryCall;
  ChatInit(argument: _chatPackage_InitRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_InitResponse__Output>): grpc.ClientUnaryCall;
  ChatInit(argument: _chatPackage_InitRequest, callback: grpc.requestCallback<_chatPackage_InitResponse__Output>): grpc.ClientUnaryCall;
  chatInit(argument: _chatPackage_InitRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_InitResponse__Output>): grpc.ClientUnaryCall;
  chatInit(argument: _chatPackage_InitRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_InitResponse__Output>): grpc.ClientUnaryCall;
  chatInit(argument: _chatPackage_InitRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_InitResponse__Output>): grpc.ClientUnaryCall;
  chatInit(argument: _chatPackage_InitRequest, callback: grpc.requestCallback<_chatPackage_InitResponse__Output>): grpc.ClientUnaryCall;
  
  ChatStream(argument: _chatPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_StreamMessage__Output>;
  ChatStream(argument: _chatPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_StreamMessage__Output>;
  chatStream(argument: _chatPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_StreamMessage__Output>;
  chatStream(argument: _chatPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_StreamMessage__Output>;
  
  SendMessage(argument: _chatPackage_MessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chatPackage_MessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chatPackage_MessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chatPackage_MessageRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_MessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_MessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_MessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_MessageRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  UserStream(argument: _chatPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_UserStreamResponse__Output>;
  UserStream(argument: _chatPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_UserStreamResponse__Output>;
  userStream(argument: _chatPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_UserStreamResponse__Output>;
  userStream(argument: _chatPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_UserStreamResponse__Output>;
  
}

export interface ChatServiceHandlers extends grpc.UntypedServiceImplementation {
  ChatInit: grpc.handleUnaryCall<_chatPackage_InitRequest__Output, _chatPackage_InitResponse>;
  
  ChatStream: grpc.handleServerStreamingCall<_chatPackage_StreamRequest__Output, _chatPackage_StreamMessage>;
  
  SendMessage: grpc.handleUnaryCall<_chatPackage_MessageRequest__Output, _google_protobuf_Empty>;
  
  UserStream: grpc.handleServerStreamingCall<_chatPackage_StreamRequest__Output, _chatPackage_UserStreamResponse>;
  
}

export interface ChatServiceDefinition extends grpc.ServiceDefinition {
  ChatInit: MethodDefinition<_chatPackage_InitRequest, _chatPackage_InitResponse, _chatPackage_InitRequest__Output, _chatPackage_InitResponse__Output>
  ChatStream: MethodDefinition<_chatPackage_StreamRequest, _chatPackage_StreamMessage, _chatPackage_StreamRequest__Output, _chatPackage_StreamMessage__Output>
  SendMessage: MethodDefinition<_chatPackage_MessageRequest, _google_protobuf_Empty, _chatPackage_MessageRequest__Output, _google_protobuf_Empty__Output>
  UserStream: MethodDefinition<_chatPackage_StreamRequest, _chatPackage_UserStreamResponse, _chatPackage_StreamRequest__Output, _chatPackage_UserStreamResponse__Output>
}
