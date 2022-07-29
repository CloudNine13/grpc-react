#!/bin/bash

./node_modules/.bin/proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto/ proto/chat.proto

protoc -I=. ./proto/*.proto --js_out=import_style=commonjs:./client/src --grpc-web_out=import_style=typescript,mode=grpcwebtext:./client/src