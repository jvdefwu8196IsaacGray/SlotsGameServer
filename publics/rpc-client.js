if(global.rpc) return; global.rpc = true;

const grpc = require('grpc');

const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
    "./rpc.proto",
    {
        keepCase: true,
        longs: Number,
        enums: String,
        defaults: true,
        oneofs: true
    }
);

(function()
{
    const proto = grpc.loadPackageDefinition(packageDefinition).rpc;

    global.crpc = new proto.RouteGuide('localhost:5000', grpc.credentials.createInsecure());

})()