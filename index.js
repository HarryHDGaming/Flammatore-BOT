const Discord = require("discord.js");
const client = new Discord.Client({intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]})



client.login("OTYwNjQxMzgyMDEwMjIwNTk1.YktZAQ.DY03UKDPxWKfsKnwU5Do0o6bLkw")

client.once('ready', () => {
    console.log('Bot online!');
});

client.on('interactionCreate', (interaction) => {
    console.log(interaction);
});

client.on("messageCreate", (message) => {
    if(message.content == "!comandi") {
        message.channel.send("_!youtube_|_!youtube2_|_!istagram_|_!istagram2_|_!telegram_|_!moduloiscrizione_|_!modulocreazioneclan_|_!Flame_")
    }
    
    if(message.content == "!youtube"){
        message.channel.send("questo è il mio canale https://www.youtube.com/channel/UCNDXC4L8bA_X4vEh9_cJBqg")
    }

    if(message.content == "!youtube2"){
        message.channel.send("questo è il mio canale https://www.youtube.com/channel/UC-Whwf45q2j9AFWgotumy1w")
    }

    if(message.content == "!istagram") {
        message.channel.send("questo è il mio profilo https://www.instagram.com/enrico_durelli/")
    }

    if(message.content == "!istagram2") {
        message.channel.send("Questo è il mio sencodo profilo https://www.instagram.com/harry_music92/")
    }

    if(message.content == "!telegram") {
        message.channel.send("Questo è il gruppo telegram della Community t.me/+6D1MOpL0DOA4YTE0")
    }

    if(message.content == "!moduloiscrizione") {
        message.channel.send("Ecco a te il modulo per partecipare agli eventi della community conpilalo https://docs.google.com/forms/d/1p2O-zaNvTYSwd1FXykDp1GdG1KK4ec6fKLVuyORoR-I/edit?usp=sharing")
    }

    if(message.content == "!modulocreazioneclan") {
        message.channel.send("Questa è la richiesta per creare un clan https://docs.google.com/forms/d/157HuBG96uoZZMRXZ2MZ2FdJSVn9JAzcAC9ll2OIw-D8/edit?usp=sharing")
    }

    if(message.content == "!Flame") {
        var embed = new Discord.MessageEmbed()
            .setTitle("La Community Del Flame")
            .setDescription("Che cosa è la community del flame? Principalmente è una community dove delle persone si conoscono o fanno amicizia tra di loro con altri utenti, per poter partecipare a degli eventi che sono oraganizzati dagli amministratori con lo scopo di Trasmettere tutti gli eventi sul canale Twitch del Proprietario del Sever di discord o dai suoi vari collaboratori.")
            .setThumbnail("https://img.myloview.it/adesivi/fire-flame-logo-vector-illustration-design-template-vector-fire-flames-sign-illustration-isolated-fire-icon-400-175013634.jpg")
       message.channel.send({embeds: [embed]}) 
    }
    if(message.content == "!gruppoFB") {
        message.channel.send("https://www.facebook.com/groups/1361085277684845")
    }
    if(message.content == "!Twitch") {
        message.channel.send("il mio canale Twitch https://www.twitch.tv/harryhdgaming92")
    }
});