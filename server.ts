import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoloader from '@grpc/proto-loader'
import { ProtoGrpcType } from './proto/chat'
import { ChatServiceHandlers } from './proto/chatPackage/ChatService'


const HOST = '0.0.0.0:8082'
const PROTO_FLIE = './proto/service.proto'

const packageDef = protoloader.loadSync(path.resolve(__dirname, PROTO_FLIE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const chatPackage = grpcObj.chatPackage

function serverInit() {
    const server = getServer()
    server.bindAsync(
        HOST, 
        grpc.ServerCredentials.createInsecure(), 
        (error: Error | null, port: number): void => {
            if(error) {
                console.error(error)
                return
            }
            console.log(`Server started on ${port}`)
            server.start()
        }
    )
}

function getServer() {
    const server: grpc.Server = new grpc.Server()
    server.addService(chatPackage.ChatService.service, {
        ChatInit: (call, callback) => {
            const session = call.request.name || `` 
            const avatar = call.request.avatar || ``
            if(!session || !avatar) return callback(new Error("Name and avatar required")) 

            callback(null, {id: Math.floor(Math.random() * 10000)})
        },
        ChatStream: (call) => {

        },
        SendMessage: (call) => {

        },
        UserStream: (call) => {

        }
    } as ChatServiceHandlers)

    return server
}

serverInit()