#!/bin/bash
protoc -I. ./proto/chat.proto --js_out=import_style=commonjs:./react-chat/src --grpc-web_out=import_style=typescript,mode=grpcwebtext:./react-chat/src