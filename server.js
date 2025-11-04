const ws = require("nodejs-websocket");

const RELEASE = false;

const path = require('path');

const cluster = require("cluster");

const args = require("minimist")(process.argv.splice(2));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

function startService()
{
    var bearcat = require("bearcat");
      
    if(!args.a) return console.log("error args -a name -f[bool]");

    var contextPath = require.resolve("./context/" + args.a + "/app.json")

    bearcat.createApp(  
        [contextPath], 
        {
            BEARCAT_HOT: 'on',
            BEARCAT_FUNCTION_STRING: true,
            BEARCAT_HPATH: [__dirname + '/app/' + args.a]
        }
    );
    
    bearcat.start(()=>{

        global.server = ws.createServer((sock) =>
        {   
            sock.on("text", (msg)=>
            {
                bearcat.getBean("method").message(sock, msg)
            })
            
            sock.on("close", ()=>
            {       
                bearcat.getBean("method").close(sock)
            })
                    
            sock.on("error", ()=>
            {       
                bearcat.getBean("method").error(sock)
            })
    
        }).listen(APP_PORT)
    
        // 使用帧定时器
    
        if(args.f)
        {
            var lastTime = new Date().getTime();
    
            setInterval(() =>
            {
                const now = new Date().getTime();
        
                const dt = (now - lastTime) / 1000.0;
            
                lastTime = now;
        
                bearcat.getBean("method").frame(dt);

            }, args.f);
        }
    });
}

if (cluster.isMaster && args.j)
{  
    for(let i=0;i<args.j;++i) cluster.fork();
}
else
{
    startService();
}
