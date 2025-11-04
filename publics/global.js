const fs = require("fs")

exports.readJson = function(path)
{
    const buf = fs.readFileSync(path);

	return JSON.parse(buf);
}


exports.random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};  

exports.initWeight = function(ary)
{
    let weight = 0;

    for(i=0; i<ary.length; ++i) weight += ary[i].weight;

    ary.sort(function(a, b){
        return a.weight > b.weight;
    })

    return function()
    {
        var current = random(0, weight);

        var sum = 0;
    
        for(i=0; i<ary.length; ++i)
        {
            sum += ary[i].weight;
    
            if(current < sum) return ary[i];
        }
    
        return ary[ary.length -1];
    }
}
