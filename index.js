const Discord = require("discord.js");
const client = new Discord.Client({intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"]})



client.login(process.env.token)
client.once('ready', () => {
    console.log('Bot online!');
});

client.on('interactionCreate', (interaction) => {
    console.log(interaction);
});

client.on("messageCreate", (message) => {
    if(message.content == "!comandi") {
        message.channel.send("_!youtube_ | _!youtube2_ | _!istagram_ | _!istagram2_ | _!telegram_ | _!moduloiscrizione_ | _!modulocreazioneclan_ | _!Flame_ | _!Regolamento_ | _!AggiornamentoBot_ | _!MusicBot (Coming Soon)")
    }

    if(message.content == "!MusicBot") {
        message.channel.send("!play | !pause | !resume")
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
    if(message.content == "!AggiornamentoBot") {
        message.channel.send("Stiamo Lavorando per rendere il bot musicale.")
    }
    if(message.content == "!Regolamento") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Regolamento Della Community")
            .setDescription(" Non Sono consentiti: 1.Insulti personali tra i partecipanti: toni irrispettosi verso i moderatori o gli amministratori del discord della Community del Flame: le discussioni e le espressioni usate devono essere sempre pacate, pur trovandosi in disaccordo su certe questioni; 2. Offese alle istituzioni o alla religione di qualunque fede Saranno punite con il ban; 3.Messaggi non inerenti alle tematiche proposte o non idonei alle finalità della Community; 4.Commenti in chiave sarcastica, beffeggiatoria, sacrilega e denigratoria; 5. Sono inoltre vietati: il razzismo ed ogni apologia dell’inferiorità o superiorità di una razza rispetto alle atre; 6. Atteggiamenti e/o posizioni di contestazione, presi a titolo gratuito, palesemente ostili nei confronti dei moderatori e degli amministratori; 7.Incitamento al mancato rispetto delle presenti regole miranti alla esclusiva destabilizzazione della normale e pacifica partecipazione attiva ed agli altri servizi della Community; 8.Il pubblicare immagini ritenute oscene ed offensive della sensibilità dei singoli: queste verranno immediatamente rimosse e ci sarà un richiami dopo 10 richiami c'è rischio Ban!; 9.Pubblicare Link di altre community non sarà tollerato dalla community stessa o link di altri discord; 10.Pubblicare messaggi che in qualche modo creano disordine nella Community o possano creare danni d’immagine o all’esistenza stessa della Community; 11.Non insistere nell’inviare messaggi in privato (PVT) quando l’utente che li riceve si dimostra seccato e infastidito dagli stessi; 12.Usare correttamente le icone che se ripetute continuamente disturbano la comunicazione in chat; 13.Fare attenzione e limitare l’uso delle maiuscole che nel linguaggio di chat significano “urlare a qualcuno”;")
            .setThumbnail("https://img.myloview.it/adesivi/fire-flame-logo-vector-illustration-design-template-vector-fire-flames-sign-illustration-isolated-fire-icon-400-175013634.jpg")
       message.channel.send({embeds: [embed]}) 
    }
});
//const { Distube, Plugin } = require("distube")
//const { SpotifyPlugin } = require("@distube/spotify")
//const { SoundCloudPlugin } = require("@distube/soundcloud")

//const distube = new Distube(client, {
    //youtubeDL: false
   // plugins: [new SpotifyPlugin(), new SoundCloudPlugin()],
    //leaveOnEmpty: true,
    //leaveOnStop: true
//})

//client.on("messageCreate", message => {
    //if(message.content.startsWith("!play")) {
        //const voiceChannel = message.member.voice.channel
        //if(!voiceChannel){
            //return message.channel.send("Devi essere in un canale vocale")
        //}

        //const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        //if(voiceChannelBot && voiceChannel.id != VoiceChannel.id){
            //return message.channel.send("Qualcuno sta gia ascoltando della musica")
        //}

        //let args = message.content.split(/\s+/)
        //let query = args.slice(1).join(" ")

        //if(!query) {
            //return message.channel.send("inserisci la canzone da ascoltare")
        //}

        //distube.play(voiceChannelBot || voiceChannel, query, {
            //member: message.member,
            //textChannel: message.channel,
            //message: message
        //})
    //}
//})
//client.on("messageCreate", message => {
    //if(message.content.startsWith("!pause")) {
        //const voiceChannel = message.member.voice.channel
        //if(!voiceChannel){
            //return message.channel.send("Devi essere in un canale vocale")
        //}

        //const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        //if(voiceChannelBot && voiceChannel.id != VoiceChannel.id){
            //return message.channel.send("Qualcuno sta gia ascoltando della musica")
        //}

        //try {
            //distube.pause(message)
        //}catch{
            //return message.channel.send("Nessuna canzone in riproduzione o canzone gia in pausa")
        //}


        //message.channel.send("Song paused")
    //}
//})
//client.on("messageCreate", message => {
    //if(message.content.startsWith("!resume")) {
        //const voiceChannel = message.member.voice.channel
        //if(!voiceChannel){
            //return message.channel.send("Devi essere in un canale vocale")
        //}

        //const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(client.user.id))
        //if(voiceChannelBot && voiceChannel.id != VoiceChannel.id){
            //return message.channel.send("Qualcuno sta gia ascoltando della musica")
        //}

        //try {
            //distube.resume(message)
        //}catch{
            //return message.channel.send("Nessuna canzone in riproduzione o canzone gia in riproduzione")
        //}
        //message.channel.send("Song resumed")
    //}
//})
//distube.on("addsong", (queue, song) => {
    //var embed = new Discord.MessageEmbed()
        //.setTitle("Song added")
        //.addField("Song", song.name)

    //queue.textChannel.send({embeds: [embed] })

//})
//distube.on("playsong", (queue, song) => {
    //var embed = new Discord.MessageEmbed()
        //.setTitle("Playing song...")
        //.addField("Song", song.name)
        //.addField("Requested by", song.user.toString())

    //queue.textChannel.send({embeds: [embed] })
//})

//distube.on("serchNoResult", (message, query) => {
    //message.channel.send("Canzone non trovata...")
//})