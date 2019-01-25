const Discord = require('discord.js');
const bot = new Discord.Client();
var on=true;
bot.on('message',(message)=>{
    if(message.author.bot)return;
    var msg=message.content;

    if(msg == '-+-'){
        on = !on;
        if(on){
            message.channel.send('Booting up');
        }else{
            message.channel.send('Shutting down');
        }
    }
    if(!on)return;

    var up=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','.','_','!','?'];
    var down=['ɐ','q','ɔ','p','ǝ','ɟ','ƃ','ɥ','ı','ɾ','ʞ','Ɩ','ɯ','u','o','d','b','ɹ','s','ʇ','n','ʌ','ʍ','x','ʎ','z','˙','‾','¡','¿'];
    var check=['ɐ','ɔ','ǝ','ɟ','ƃ','ɥ','ı','ɾ','ʞ','Ɩ','ɯ','ɹ','ʇ','ʌ','ʍ','ʎ','˙','‾','¡','¿']
    var found=false;
    for(var a=0;a<msg.length;a++){
        if(found)break;
        for(var b=0;b<check.length;b++){
            if(found)break;
            if(msg.slice(a,a+1)==check[b]){
                found=true;
                break;
            }
        }
    }
    if(found){
        var flip=message.author.username+': ';
        for(var a=msg.length;a>=0;a--){
            var add=false;
            if(msg.slice(a-1,a)==' '){
                flip+=' ';
                continue;
            }
            for(var b=0;b<down.length;b++){
                if(msg.slice(a-1,a)==down[b]){
                    add=true;
                    flip+=up[b];
                    break;
                }
            }
            if(!add){
                flip+=msg.slice(a-1,a);
            }
        }
        message.channel.send(flip);
    }
    console.log('done');
});

bot.login(process.env.BOT_TOKEN);
