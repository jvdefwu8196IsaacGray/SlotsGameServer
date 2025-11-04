const bearcat = require('bearcat');

/*public method*/

function method()
{       

}

method.prototype.message = (sock, msg)=>
{
    const json = JSON.parse(msg);

    if(json)
    {
        switch(json.method)
        {
            case "caishen.join.req": { bearcat.getBean("CaiShen").join(sock, json); break;}
            case "caishen.spin.req": { bearcat.getBean("CaiShen").spin(sock, json); break;}
            case "baoboonchin.join.req": { bearcat.getBean("BaoBoonChin").join(sock, json); break;}
            case "baoboonchin.spin.req": { bearcat.getBean("BaoBoonChin").spin(sock, json); break;}
            case "baoboonchin.free.type.req": { bearcat.getBean("BaoBoonChin").freeType(sock, json); break;}
            case "fivelion.join.req": { bearcat.getBean("FiveLion").join(sock, json); break;}
            case "fivelion.spin.req": { bearcat.getBean("FiveLion").spin(sock, json); break;}
            case "fivelion.free.type.req": { bearcat.getBean("FiveLion").freeType(sock, json); break;}
            case "egypt.join.req": { bearcat.getBean("Egypt").join(sock, json); break;}
            case "egypt.spin.req": { bearcat.getBean("Egypt").spin(sock, json); break;}
            case "scarab.join.req": { bearcat.getBean("Scarab").join(sock, json); break;}
            case "scarab.spin.req": { bearcat.getBean("Scarab").spin(sock, json); break;}
            case "scarab.free.type.req": { bearcat.getBean("Scarab").freeType(sock, json); break;}
            default: break;
        }
    }
}

method.prototype.close = (sock)=>
{
    if(sock.uid) delete sockManager[sock.uid];
}

method.prototype.error = (sock)=>
{
    if(sock.uid) delete sockManager[sock.uid];
}

/*public method*/

module.exports = {
    id: "method",
    func: method
};
