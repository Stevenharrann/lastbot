
            const { create, Client } = require('@open-wa/wa-automate')
            const welcome = require('./lib/welcome')
            const msgHandler = require('./msgHndlr')
            const options = require('./options')
            
            const start = async (client = new Client()) => {
                    console.log('[SERVER] Server Started!')
                    // Force it to keep the current session
                    client.onStateChanged((state) => {
                        console.log('[Client State]', state)
                        if (state === 'CONFLICT' || state === 'UNLAUNCHED') client.forceRefocus()
                    })
                    // listening on message
                    client.onMessage((async (message) => {
                        client.getAmountOfLoadedMessages()
                        .then((msg) => {
                            if (msg >= 3000) {
                                client.cutMsgCache()
                            }
                        })
                        msgHandler(client, message)
                    }))
            
                    client.onAddedToGroup(((chat) => {
                        let totalMem = chat.groupMetadata.participants.length
                        if (!totalMem === 30) {
                    } else {
                        client.sendText(chat.groupMetadata.id, `Hello *${chat.contact.name}*, Thanks for adding me. Use *!help* to see the menu. Enjoy the bot!`)
                    }
                }))
               
                /*client.onAck((x => {
                    const { from, to, ack } = x
                    if (x !== 3) client.sendSeen(to)
                }))*/
        
                // listening on Incoming Call
                client.onIncomingCall(async call => {
                    console.log(color('[~>>]', 'red'), `Someone is calling bot, lol`)
                    await client.sendText(call.peerJid._serialized, "Please Stop Calling! *Call=Block*")
                    .then(() => client.contactBlock(call.peerJid))
                })
            }
            create({"headless": true,
            "cacheEnabled": false,
            "useChrome": true,
            "chromiumArgs": [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--aggressive-cache-discard",
                "--disable-cache",
                "--disable-application-cache",
                "--disable-offline-load-stale-cache",
                "--disk-cache-size=0"
            ]
        })
        create(options(true, start))
            .then(client => start(client))
            .catch((error) => console.log(error))

