/*
* "Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
* Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
* (QS ash-Shaff: 2-3).
*/
const { decryptMedia } = require('@open-wa/wa-decrypt')
const {
    msgFilter,

    processTime,

    download,

} = require('./utils')

const fs = require('fs-extra')
const axios = require('axios')
const moment = require('moment-timezone')   
const get = require('got')
const fetch = require('node-fetch') 
const color = require('./lib/color')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const { liriklagu, quotemaker, randomNimek, fb, sleep, jadwalTv, ss } = require('./lib/functions')
const { help, snk, info, donate, readme, listChannel } = require('./lib/help')
const { stdout, send } = require('process')

const { profile } = require('./lib/profile.js')
const { profilepic } = require('./lib/pfp.js')
const { exec } = require('child_process');
const ruleArr = JSON.parse(fs.readFileSync('./lib/rule.json'))
const pokefunc = require('./lib/poke.js')
const pkarrs = JSON.parse(fs.readFileSync('./lib/pokedata/pkmnz.json'))
const nsfw_ = JSON.parse(fs.readFileSync('./lib/NSFW.json'))
const nsfwgrp = JSON.parse(fs.readFileSync('./lib/nsfw.json')) 
const welkom = JSON.parse(fs.readFileSync('./lib/welcome.json') )
const errorurl = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
const { RemoveBgResult, removeBackgroundFromImageBase64, removeBackgroundFromImageFile } = require('remove.bg')
let {

    urlShortener,

    getLocationData,
    images,
    api,
    rugaapi,

} = require('./lib')
const { uploadImages } = require('./lib/fetcher')
const { msg } = require('./nonPrefix.js')


moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = msgHandler = async (client, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, mentionedJidList, author, quotedMsgObj } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        body = (type === 'chat' ) ? body : ((type === 'image' && caption || type === 'video' && caption)) ? caption : ''
        const command = commands.toLowerCase().split(' ')[0] || ''
        const args =  commands.split(' ')
	    const isRule = ruleArr.includes(chat.id)
        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }
author
	if (!isGroupMsg && isRule && (type === 'chat' && message.body.includes('chat.whatsapp.com') && isBotGroupAdmins) && !isGroupAdmins) return await client.removeParticipant(chat.id, )




        const msgs = (message) => {
            if (command.startsWith('!')) {
                if (message.length >= 10){
                    return `${message.substr(0, 15)}`
                }else{
                    return `${message}`
                }
            }
        }
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const mess ={
            wait: '[WAIT] In progress⏳ please wait a moment',
            error: {
                St: '[❗] Send images with the caption *! Sticker * or tagged images that have been sent',
                Qm: '[❗] An error occurred, maybe the theme is not available!',
                Yt3: '[❗] An error occurred, unable to convert to mp3!',
                Yt4: '[❗] An error occurred, maybe the error was caused by the system.',
                Ig: '[❗] An error occurred, maybe because the account is private',
                Ki: ` [❗] Bot can't take out the group admin!`,
                Ad: `[❗] Cannot add target, maybe because it's private`,
                Iv: '[❗] The link you submitted is invalid!'
            }
        }
        const stickerMetadata = { pack: 'Created with', author: 'StevenBot', keepScale: true }
        const stickerMetadataCrop = { pack: 'Created with', author: 'StevenBot' }
        const botNumber = await client.getHostNumber()
        const blockNumber = await client.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber) : false
        const ownerNumber = ["96179177377@c.us"] // replace with your whatsapp number
        const isOwner = ownerNumber.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        moment.tz.setDefault('Europe/Rome').locale('id')
        //FUNCTION TO VERIFY SIZE
function getFilesizeInBytes() {
    var stats = fs.statSync('./media/output.gif')
    var fileSizeInBytes = stats.size;
    //Converting to megabytes
    var fileSizeInMegabytes = fileSizeInBytes / (1024*1024);
    return fileSizeInMegabytes;
    }

        

        if (isBlocked) return
        //if (!isOwner) return
        switch(command) {
        case '!sticker':
        case '!stiker':
         case '#sticker':


            if (type === 'video' || isQuotedVideo) return client.reply(from, `Media that is submitted must be an image, for video use !stickergif or !sgif.`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await client.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    client.reply(from, mess.error.Iv, id)
                }
            } else {
                    client.reply(from, mess.error.St, id)
            }
            break
            case '!getimage':
                case '!stikertoimg':
                case '!stickertoimg':
                case '!stimg':
                    if (quotedMsg && quotedMsg.type == 'sticker') {
                        const mediaData = await decryptMedia(quotedMsg)
                        client.reply(from, resMsg.wait, id)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await client.sendFile(from, imageBase64, 'imgsticker.jpg', 'Successfully converted Sticker to Image!', id)
                            .then(() => {
                                console.log(`Sticker to Image Processed for ${processTime(t, moment())} Seconds`)
                            })
                    } else if (!quotedMsg) return client.reply(from, `Please tag/reply the sticker you want to use as an image with the command!`, id)
                    break
            case '!stat':
                case '!botstat': {
                    const loadedMsg = await client.getAmountOfLoadedMessages()
                    const chatIds = await client.getAllChatIds()
                    const groups = await client.getAllGroups()
                    client.sendText(from, `Status :\n- *${loadedMsg}* Loaded Messages\n- *${groups.length}* Group Chats\n- *${chatIds.length - groups.length}* Personal Chats\n- *${chatIds.length}* Total Chats`)
                    break}
                 
                    case '!stikergiphy':
                    case '!stickergiphy':

                        if (args.length !== 1) return client.reply(from, `Sorry, the message format is wrong. \NType message with !stickergif`, id)
                        const isGiphy = url.match(new RegExp(/https?:\/\/(www\.)?giphy.com/, 'gi'))
                        const isMediaGiphy = url.match(new RegExp(/https?:\/\/media.giphy.com\/media/, 'gi'))
                        if (isGiphy) {
                            const getGiphyCode = url.match(new RegExp(/(\/|\-)(?:.(?!(\/|\-)))+$/, 'gi'))
                            if (!getGiphyCode) { return client.reply(from, 'Failed to retrieve the giphy code', id) }
                            const giphyCode = getGiphyCode[0].replace(/[-\/]/gi, '')
                            const smallGifUrl = 'https://media.giphy.com/media/' + giphyCode + '/giphy-downsized.gif'
                            client.sendGiphyAsSticker(from, smallGifUrl).then(() => {
                                client.reply(from, 'Here\'s your sticker')
                                console.log(`Sticker Processed for ${processTime(t, moment())} Second`)
                            }).catch((err) => console.log(err))
                        } else if (isMediaGiphy) {
                            const gifUrl = url.match(new RegExp(/(giphy|source).(gif|mp4)/, 'gi'))
                            if (!gifUrl) { return client.reply(from, 'Failed to retrieve the giphy code', id) }
                            const smallGifUrl = url.replace(gifUrl[0], 'giphy-downsized.gif')
                            client.sendGiphyAsSticker(from, smallGifUrl)
                                .then(() => {
                                    client.reply(from, 'Here\'s your sticker')
                                    console.log(`Sticker Processed for ${processTime(t, moment())} Second`)
                                })
                                .catch(() => {
                                    client.reply(from, resMsg.error.norm, id)
                                })
                        } else {
                            await client.reply(from, 'Sorry, the giphy command sticker can only use the link from giphy. [Giphy Only]', id)
                        }
                        break

                //FUNCTION TO VERIFY SIZE
function getFilesizeInBytes() {
    var stats = fs.statSync('./media/output.gif')
    var fileSizeInBytes = stats.size;
    //Converting to megabytes
    var fileSizeInMegabytes = fileSizeInBytes / (1024*1024);
    return fileSizeInMegabytes;
    }
    

            case '!shi3a':
                case '!10freakyshi3a':
                    client.reply(from, './media/shi3a.mp3', 'shi3a.mp3',id)
break

        case '!stickergif':
        case '#stickergif':
        case '!sgif':
        case '#animate':

const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'

            if (isMedia || isQuotedVideo) {
                if (type === 'image') return client.reply(from, `Media sent must be video/gif, for images use !sticker.`, id)
                if (mimetype === 'video/mp4' && message.duration <= 10 || quotedMsg.mimetype === 'video/mp4' && quotedMsg.duration <= 10) {
                    var encryptedMedia = isQuotedVideo ? quotedMsg : message
                    var mediaData = await decryptMedia(encryptedMedia)
                    client.reply(from, '[WAIT] Sticker in progress⏳ please wait ± 1 min!', id)
                    await client.sendMp4AsSticker(from, mediaData, { endTime: '00:00:09.0', log: true }, stickerMetadata)
                        .then(() => console.log(`Sticker Processed for ${processTime(t, moment())} Seconds`))
                        .catch(() => {
                            client.reply(from, 'Sorry there was an error or the file is too big!', id)
                        })
                } else {
                    client.reply(from, `Send video with caption *!stickergif* max 10 sec!`, id)
                }
            } else {
                client.reply(from, `Send video or reply/quote video with caption *!stickergif* max 10 sec`, id)
            }
            break
            case '!ping':
                await client.reply(from, `*Pong*!\n*Speed*: ${processTime(t, moment())} _Seconds_`,id)
                break
                case '!status':
                    client.reply(from, `Bot active\n*Speed*: ${processTime(t, moment())} _Seconds_`, id)
                    break
	    case '!stickernobg':
        case '!stikernobg':
            case '!snobg':
	    if (isMedia) {
                try {
                    var mediaData = await decryptMedia(message, uaOverride)
                    var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    var base64img = imageBase64
                    var outFile = './media/img/noBg.png'
                    // untuk api key kalian bisa dapatkan pada website remove.bg
                    await fs.writeFile(outFile, result.base64img)
                    await client.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`)
                } catch(err) {
                    console.log(err)
                }
            }
            break
        case '!tts':
             case '#say':
            case '!say':
            if (args.length === 1) return client.reply(from, '*Send command *! Tts "id", "en", "jp", "ar" "text" *, for example *! Tts en hello *')
            const ttsId = require('node-gtts')('id')
            const ttsEn = require('node-gtts')('en')
	    const ttsJp = require('node-gtts')('ja')
        const ban = JSON.parse(fs.readFileSync('./lib/banned.json'))
            const ttsAr = require('node-gtts')('ar')
            const dataText = body.slice(8)
            if (dataText === '') return client.reply(from, 'Chou?', id)
            if (dataText.length > 500) return client.reply(from, 'Text is too long!', id)
            var dataBhs = body.slice(5, 7)
	        if (dataBhs == 'id') {
                ttsId.save('./media/tts/resId.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resId.mp3', id)
                })
            } else if (dataBhs == 'en') {
                ttsEn.save('./media/tts/resEn.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resEn.mp3', id)
                })
            } else if (dataBhs == 'jp') {
                ttsJp.save('./media/tts/resJp.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resJp.mp3', id)
                })
	    } else if (dataBhs == 'ar') {
                ttsAr.save('./media/tts/resAr.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resAr.mp3', id)
                })
            } else {
                client.reply(from, 'Enter the language data: "id" for Indonesian, "en" for English, "jp" for Japanese, and "ar" for Arabic, Example: !tts en hi', id)
            }
            break
        case '!creator':
          client.reply(from, '*Steven Harran* is the Coder/Creator of this bot.\nhttps://instagram.com/steven_harran \nAlso use our Discord bot *Pogy*  https://pogy.xyz/' , id)
            break
            case '!discordbot':
                client.reply(from, 'Use our Discord bot *Pogy*: \nhttps://pogy.xyz/ ',id)
                  break
         case '#hi':
         case '!hi':
            client.reply(from, '*Hello*, how are you? Use *!help* to get all the commands list. *Enjoy the bot!*' ,id)
break

        case '!welcome':
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            if (!isGroupAdmins) return client.reply(from, 'This command can only be used by the Admin group!', id)
            if (args.length === 1) return client.reply(from, 'Select enable or disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                client.reply(from, 'The welcome feature has been successfully activated in this group!', id)
            } else if (args[1].toLowerCase() === 'disable') {
                welkom.splice(chat.id, 1)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                client.reply(from, 'The welcome feature has been successfully deactivated in this group!', id)
            } else {
                client.reply(from, 'Select enable or disable !', id)
            }
            break
        case '!nsfwmenu':
            if (!isNsfw) return
            client.reply(from, '1. *!hentai*\n2. *!porn*\n3. *!nsfwgif*\n4. *!nudes*\n5. *!boobs*\n6. *!ass*\n7. *!pussy*\n8. *!dick* ', id)
        	break
        case '!brainly':
            if (args.length >= 2){
                const BrainlySearch = require('./lib/brainly')
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return client.reply(from, 'Max 10!', id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                client.reply(from, `➸ *Question* : ${tanya.split('.')[0]}\n\n➸ *Number of answers* : ${Number(jum)}`, id)
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            client.reply(from, `➸ *Question* : ${x.pertanyaan}\n\n➸ *Answer* : ${x.jawaban.judulJawaban}\n`, id)
                        } else {
                            client.reply(from, `➸ *Question* : ${x.pertanyaan}\n\n➸ *Answer* : ${x.jawaban.judulJawaban}\n\n➸ *Answer photo link* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                        }
                    })
                })
            } else {
                client.reply(from, 'Usage :\n!brainly [question] [.number]\n\nEx : \n!brainly NKRI .2', id)
            }
            break
            case '!animememe':
                const response13 = await axios.get('https://meme-api.herokuapp.com/gimme/animemes');
                const { postlink13, title13, subreddit13, url13, nsfw13, spoiler13 } = response13.data
                await client.sendFileFromUrl(from, `${url13}`, 'meme.jpg', `${title13}`)
                break
        case '!wait':
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                client.reply(from, 'Searching...', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                	if (resolt.docs && resolt.docs.length <= 0) {
                		client.reply(from, `Sorry, I don't know what anime this is`, id)
                	}
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                    	teks = '*I have low faith in this* :\n\n'
                    }
                    teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese* : ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *Ecchi* : ${is_adult}\n`
                    teks += `➸ *Eps* : ${episode.toString()}\n`
                    teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    client.sendFileFromUrl(from, video, 'nimek.mp4', teks, id).catch(() => {
                        client.reply(from, teks, id)
                    })
                })
                .catch(() => {
                    client.reply(from, 'Error !', id)
                })
            } else {
                client.sendFile(from, './media/img/tutod.jpg', 'Tutor.jpg', id)
            }
            break
        case '!quotemaker':
            arg = body.trim().split('|')
            if (arg.length >= 4) {
                client.reply(from, mess.wait, id)
                const quotes = encodeURIComponent(arg[1])
                const author = encodeURIComponent(arg[2])
                const theme = encodeURIComponent(arg[3])
                await quotemaker(quotes, author, theme).then(amsu => {
                    client.sendFile(from, amsu, 'quotesmaker.jpg').catch(() => {
                       client.reply(from, mess.error.Qm, id)
                    })
                })
            } else {
                client.reply(from, `Usage: \n!quotemaker | text |watermark|theme\n\nEx :\n!quotemaker |here's an example | bicit|random`, id)
            }
            break
        case '!linkgroup':

            if (!isGroupMsg) {
                const inviteLink = await client.getGroupInviteLink(groupId);
                client.sendLinkWithAutoPreview(from, inviteLink, `\nLink group *${name}*`)
            } else {
            	client.reply(from, 'This command can only be used in groups!', id)
            }
            break
        case '!bc':
            if (!isOwner) return client.reply(from, 'This command is for Bot Owners only!', id)
            let msg = body.slice(4)
            const chatz = await client.getAllChatIds()
            for (let ids of chatz) {
                var cvk = await client.getChatById(ids)
                if (!cvk.isReadOnly) await client.sendText(ids, `[ STEVEN BOT Broadcast ]\n\n${msg}`)
            }
            client.reply(from, 'Broadcast Success!', id)
            break
        case '!adminlist':
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await client.sendTextWithMentions(from, mimin)
            break
        case '!ownergroup':
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            const Owner_ = chat.groupMetadata.owner
            await client.sendTextWithMentions(from, `Owner Group : @${Owner_}`)
            break
        case '!mentionall':
            case '!tagall':
                case '@everyone': 
                case '!everyone':           
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            if (!isGroupAdmins) return client.reply(from, 'This command can only be used by group admins', id)
            const groupMem = await client.getGroupMembers(groupId)
            let hehe = '╔══✪〘 Mention All 〙✪══\n'
            for (let i = 0; i < groupMem.length; i++) {
                hehe += '╠➥'
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += '╚═〘 Steven BOT 〙'
            await client.sendTextWithMentions(from, hehe)
            break
        case '!kickall':
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return client.reply(from, 'This command can only be used by the Owner group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'This command can only be used when the bot becomes admin', id)
            const allMem = await client.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (groupAdmins.includes(allMem[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await client.removeParticipant(groupId, allMem[i].id)
                }
            }
            client.reply(from, 'Succes kick all member', id)
            break
            case '!refresh':
                if (!isOwner) return client.reply(from,  'This command is for the owner bot only!', id)
                try{
                    await client.refresh().then(async() => {
                        await client.reply(from, `Bot refreshed!`, id)
                    })
                }catch (err) {
                    console.log(color('[ERROR]', 'red'), err)
                }
                    
            break
            case '!penis':
        case '!pp':

     const number8 = Math.floor(Math.random() * 17) + 1;
     if(number8 === 1){
     client.reply(from, `*8============D*`,id);
    } else  if(number8 === 2){
     client.reply(from, `*8=============D*`,id);
    } else  if(number8 === 3){
     client.reply(from, `*8===========D*`,id);
    } else  if(number8 === 4){
     client.reply(from, `*8==========D*`,id);
    } else  if(number8 === 5){
     client.reply(from, `*8=========D*`,id);
    } else  if(number8 === 6){
     client.reply(from, `*8========D*`,id);
    } else  if(number8 === 7){
     client.reply(from, `*8=======D*`,id);
    } else  if(number8 === 8){
     client.reply(from, `*8======D*`,id);
    } else  if(number8 === 9){
     client.reply(from, `*8=====D*`,id);
    } else  if(number8 === 10){
     client.reply(from, `*8====D*`,id);
    } else  if(number8 === 11){

     client.reply(from, `*8===D*`,id);
    } else  if(number8 === 12){
     client.reply(from, `*8==D*`,id);
    } else  if(number8 === 13){
     client.reply(from, `*8=D*`,id);
    } else if(number8 === 14){
        client.reply(from, `*8==============D*`,id);
       } else  if(number8 === 15){
        client.reply(from, `*8=============D*`,id);}
        else  if(number8 === 16){
        client.reply(from, `*8================D*`,id);}
    else  if(number8 === 17){
        client.reply(from, `*8===============D*`,id);}
         break
         case "!revoke":
            if (!isBotGroupAdmins) return client.reply(from, 'This command can only be used when the bot becomes admin', id)
            if (isBotGroupAdmins) {
                client.revokeGroupInviteLink(from)
                    .then((res) => {
                        client.reply(from, `Successfully Revoke Group Link, use *!Grouplink * to get the newest group invite link`, id)
                    })
                    .catch((err) => {
                        console.log(`[ERROR] ${err}`)
                    });
            }
            break

        //Media
        case '!ytmp3':
            if (args.length == 0) return client.reply(from, `To download songs from youtube \ type: !ytmp3 [link_yt]`, id)
            const linkmp3 = args[0].substr((args[0].indexOf('=')) !== -1 ? (args[0].indexOf('=') + 1) : (args[0].indexOf('be/') + 3))
            await rugaapi.ytmp3(`https://youtu.be/${linkmp3}`)
                .then(async (res) => {
                    if (res.status == 'error') return client.sendFileFromUrl(from, `${res.link}`, '', `${res.error}`)
                    await client.sendFileFromUrl(from, `${res.getImages}`, '', `Song found \n\nTitle ${res.titleInfo} \n\nPatient to send \n BOT takes too long to respond, please download the file manually \nLink mp3: ${res.getAudio} .mp3`, id)
                    console.log(res.getAudio)
                    var link = `${res.getAudio}.mp3`

                    var time = moment(t * 1000).format('mm')
                    var dir = `./media/ytmp3/${time}.mp3`
                    async function mp3() {
                        console.log('The download is in progress')
                        download(link, dir, function (err) {
                            if (err) {
                                console.error(err)
                            } else {
                                console.log('Download Completed')
                                client.sendPtt(from, dir, id)
                                    .then(console.log(`Audio Processed for ${processTime(t, moment())} Second`))
                            }
                        });
                    }
                    mp3()
                })
                .catch(err => {
                    console.log(err)
                    client.reply(from,  'Sorry, something went wrong! Please try again later.' , id)
                })
            break

        case '!leaveall':
            if (!isOwner) return client.reply(from, 'This order is for Bot Owners only', id)
            const allChats = await client.getAllChatIds()
            const allGroups = await client.getAllGroups()
            for (let gclist of allGroups) {
                await client.sendText(gclist.contact.id, `Sorry the bot is cleaning, total chat is active : ${allChats.length}`)
                await client.leaveGroup(gclist.contact.id)
            }
            client.reply(from, 'Success leave all group!', id)
            break
        case '!clearall':
            if (!isOwner) return client.reply(from, 'This order is for Bot Owners only', id)
            const allChatz = await client.getAllChats()
            for (let dchat of allChatz) {
                await client.deleteChat(dchat.id)
            }
            client.reply(from, 'Success clear all chat!', id)
            break
        case '!add':
            const orang = args[1]
            if (!isGroupMsg) return client.reply(from, 'This feature can only be used in groups', id)
            if (args.length === 1) return client.reply(from, 'To use this feature, send the command *!Add * 961........', id)
            if (!isGroupAdmins) return client.reply(from, 'This command can only be used by group admins', id)

            try {
                await client.addParticipant(from,`${orang}@c.us`)
            } catch {
                client.reply(from, mess.error.Ad, id)
            }
            break
        case '!leave':
            if (!isGroupMsg) return client.reply(from, 'This feature can only be used in groups', id)
            if (!isGroupAdmins) return client.reply(from, 'This command can only be used by group admins', id)
            await client.reply(from,'Goodbye. I love you.',id).then(() => client.leaveGroup(groupId))
            break
            case '!promote':
                if(!isGroupMsg) return client.reply(from, '.', message.id)
                if(!isGroupAdmins) return client.reply(from, 'You are not an admin, Sorry', message.id)
                if(!isBotGroupAdmins) return client.reply(from, 'You need to make me admin to Promote', message.id)
                if (mentionedJidList.length === 0) return await client.reply(from, 'Wrong format!', message.id)
                if (mentionedJidList.length >= 2) return await client.reply(from, 'One user at a time', message.id)
                if (groupAdmins.includes(mentionedJidList[0])) return await client.reply(from, 'This user is already admin', message.id)
                await client.promoteParticipant(groupId, mentionedJidList[0])
                await client.sendTextWithMentions(from, `@${mentionedJidList[0].replace('')} is now an admin`)
                break
            case '!demote':
                if(!isGroupAdmins) return client.reply(from, 'You are not an admin, Sorry', message.id)
                if(!isBotGroupAdmins) return client.reply(from, 'You need to make me admin to Demote', message.id)
                if (mentionedJidList.length === 0) return client.reply(from, 'Wrong Format', message.id)
                if (mentionedJidList.length >= 2) return await client.reply(from, 'One user at a time', message.id)
                if (!groupAdmins.includes(mentionedJidList[0])) return await client.reply(from, 'The user isn\'t an admin', message.id)
                await client.demoteParticipant(groupId, mentionedJidList[0])
                await client.sendTextWithMentions(from, `Demoted @${mentionedJidList[0].replace('')}.`)
                break

                
                case '!kick':
                    if(!isGroupMsg) return client.reply(from, 'This feature can only be used in groups', message.id)
                    if(!isGroupAdmins) return client.reply(from, 'You are not an admin, Sorry', message.id)
                    if(mentionedJidList.length === 0) return client.reply(from, 'Wrong format', message.id)
                    await client.sendText(from, `Request Accepted! Kicked:\n${mentionedJidList.join('\n')}`)
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        if (groupAdmins.includes(mentionedJidList[i])) return await client.reply(from, '....', message.id)
                        await client.removeParticipant(groupId, mentionedJidList[i])
                    }
                    break
                    case '!join':
                        if (args.length == 0) return client.reply(from, `If you want to invite the bot to the group, *please invite  by typing !join grouplink*`, id)
                        let link = body.slice(6)
                        let islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi)
                        let chekgrup = await client.inviteInfo(linkgrup)
                        if (!islink) return client.reply(from, 'Where\'s the link?', id)
                        if (isOwnerBot) {
                            await client.joinGroupViaLink(linkgrup)
                                .then(async () => {
                                    await client.reply(from, 'Successfully joined the group via link!',id)
                                    await client.sendText(chekgrup.id, `Hello *${chat.contact.name}*, Thanks for adding me. Use *!help* to see the menu. Enjoy the bot!`)
                                })
                        } else {
                            let cgrup = await client.getAllGroups()

                            await client.joinGroupViaLink(link)
                                .then(async () => {
                                    await client.reply(from, 'Successfully joined the group via link!', id)
                                })
                                .catch(() => {
                                    client.reply(from, 'Failed!', id)
                                })
                        }
                        break
                    
            case '!stat':
                case '!botstat': {
                    const loadedMsg = await client.getAmountOfLoadedMessages()
                    const chatIds = await client.getAllChatIds()
                    const groups = await client.getAllGroups()
                    client.sendText(from, `Status :\n- *${loadedMsg}* Loaded Messages\n- *${groups.length}* Group Chats\n- *${chatIds.length - groups.length}* Personal Chats\n- *${chatIds.length}* Total Chats`)
                    break
                }
        case '!delete':
                if (!isGroupAdmins) return client.reply(from, 'Only admins can use this command', id)
                if (!quotedMsg) return client.reply(from, 'Wrong Format!', id)
                if (!quotedMsgObj.fromMe) return client.reply(from, 'Wrong Format!', id)
                client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break                
            case '!mutegroup':
                if (!isGroupMsg) return client.reply(from, 'Sorry, this command can only be used within groups!', id)
                if (!isGroupAdmins) return client.reply(from, 'This command is only for group admins!', id)
                if (args[0] == 'on') {
                    client.setGroupToAdminsOnly(groupId, true).then(() => client.sendText(from, 'Successfully changed so that only admin can chat!'))
                } else if (args[0] == 'off') {
                    client.setGroupToAdminsOnly(groupId, false).then(() => client.sendText(from, 'Successfully changed so that all members can chat!'))
                } else {
                    client.reply(from, `To change group chat settings so that only admins can chat \n\nUsage: \n !mutegroup on - enable \n !mutegroup off - deactivate`, id)
                }
                break

            case '!setprofile':
                if (!isGroupMsg) return client.reply(from, 'Sorry, this command can only be used within groups!', id)
                if (!isGroupAdmins) return client.reply(from, 'This command is only for group admins!', id)

                if (isMedia && type == 'image' ) {
                    const dataMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = dataMedia.mimetype
                    const mediaData = await decryptMedia(dataMedia)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await client.setGroupIcon(groupId, imageBase64)
                } else if (args.length === 1) {
                    if (!isUrl(url)) { await client.reply(from, 'Sorry, the link you submitted is invalid.', id) }
                    client.setGroupIconByUrl(groupId, url).then((r) => (!r && r !== undefined)
                        ? client.reply(from, 'Sorry, the link you sent does not contain an image.', id)
                        : client.reply(from, 'Successfully changed the group profile', id))
                } else {
                    client.reply(from, 'This command is used to change the icon / profile group chat. \N\n\ nUsage: \n1. Please send / reply an image with the caption !setprofile \n\n2. Please type !setprofile imagelink')
                }
                break

                case '!screenshot':
            const sesPic = await client.getSnapshot()
            client.sendFile(from, sesPic, 'session.png', )
            break
            case '!lyric':
        case '!lyrics':
            if (args.length == 1) return client.reply(from, `Send command *! Lyrics "song" *, example *! Lyrics "Dior" *`, id)
            const lagu = body.slice(7)
            const lirik = await liriklagu (lagu)
            client.reply(from, lirik, id)
            break
            case '!anime':
                case '!anime':
                    if (args.length == 0) return client.reply(from, `To use !anime\n Please type: !anime [query]\nExample:! Random random \n\nquery available: \nrandom, waifu, husbu, neko`, id)
                    if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
                        fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt')
                            .then(res => res.text())
                            .then(body => {
                                let randomnime = body.split('\n')
                                let randomnimex = _.sample(randomnime)
                                client.sendFileFromUrl(from, randomnimex, '', 'Nah', id)
                            })
                            .catch(() => {
                                client.reply(from, 'Sorry, something went wrong! Please try again later. ', id)
                            })
                    } else {
                        client.reply(from, `Sorry the query is not available. Please type! Anime to see the query list`)
                    }
                    break
              break
              case '!qr':
                case '!qrcode': 
                    if (args.length == 0) return client.reply(from, `To generate a QR code, type! Qrcode <word> \nExample:! Qrcode my name is StevenBot`, id)
                    client.reply(from,'Being processed! Please wait a moment...', id);
                    let kata = args[0]
                    for (let i = 1; i < args.length; i++) {
                        kata += ` ${args[i]}`
                    }
                    console.log(kata)
                    api.qrcode(kata, 500)
                        .then(async (res) => {
                            await client.sendFileFromUrl(from, `${res}`, id)
                        })
                    break
        case '!manga':
        const keywrd = (args)
                try {
                const data = await fetch(
               `https://api.jikan.moe/v3/search/manga?q=${keywrd}`
                )
                const parsed = await data.json()
                if (!parsed) {
                  await client.sendFileFromUrl(from, errorurl2, 'error.png', 'Sorry, Couldn\'t find the requested manga', id)
                  console.log("Sent!")
                  return null
                  }
                const { title, synopsis, chapters, url, volumes, score, image_url } = parsed.results[0]
                const content = `*Manga found*
    
    *Title:* ${title}
    
    *Chapters:* ${chapters}

    *Volumes:* ${volumes}
    
    *Score:* ${score}
    
    *Synopsis:* ${synopsis}
    
    *Link*: ${url}`
    
                const image = await bent("buffer")(image_url)
                const base64 = `data:image/jpg;base64,${image.toString("base64")}`
                client.sendImage(from, base64, title, content)
               } catch (err) {
                 console.error(err.message)
                 await client.sendFileFromUrl(from, errorurl, 'error.png', 'Sorry, Couldn\'t find the requested manga')
               }
                break
                case '!kpop':
                    if (args.length == 0) return client.reply(from, `To use! Kpop \nPlease type:! Kpop [query] \nExamples:! Kpop bts \n\nquery available: \nblackpink, exo, bts`, id)
                    if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
                        fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
                            .then(res => res.text())
                            .then(body => {
                                let randomkpop = body.split('\n')
                                let randomkpopx = _.sample(randomkpop)
                                client.sendFileFromUrl(from, randomkpopx, '', 'Nah', id)
                            })
                            .catch(() => {
                                client.reply(from,'Sorry, something went wrong! Please try again later.', id)
                            })
                    } else {
                        client.reply(from, 'Sorry the query is not available. Please type! Kpop to see the query list.')
                    }
        case '!chord':
            if (args.length === 1) return client.reply(from, 'Send command *! Chord [query] *, for example *! My chord is not a puppet *', id)
            const query__ = body.slice(7)
            const chord = await get.get(`https://mhankbarbar.herokuapp.com/api/chord?q=${query__}&apiKey=${apiKey}`).json()
            if (chord.error) return client.reply(from, chord.error, id)
            client.reply(from, chord.result, id)
            break
        case '!listblock':
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ @${i.replace(/@c.us/g,'')}\n`
            }
            client.sendTextWithMentions(from, hih, id)
            break
        case '!listchannel':
            client.reply(from, listChannel, id)
            break
        case '!husbu':
            const diti = fs.readFileSync('./lib/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            client.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
                break
                      case 'sex':
                          client.sendLinkWithAutoPreview(from, '*sex*')
                  break
                  case 'coo':
                    client.sendLinkWithAutoPreview(from, '*coo*')
            break
                  case '!pornhub':
                         client.reply(from, 'https://pornhub.com',id)
                         break
                   case 'pog':
                    case '!pog':
                       client.reply(from, '*pog*',id)   
                       break
                   case '!test':
                client.reply(from, '*Your bot is working sir*',id)
                   break
                   case '!nsfw':
                    if (!isGroupAdmins) return client.reply(from, 'This command can only be used by the Admin group!', id)
                    if (args.length === 1) return client.reply(from, 'Select enable or disable!', id)
                    if (args[1].toLowerCase() === 'enable') {
                        nsfw_.push(chat.id)
                        fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                        client.reply(from, 'NSWF Command successfully activated in this group! send command *! nsfwMenu * to find out the menu', id)
                    } else if (args[1].toLowerCase() === 'disable') {
                        nsfw_.splice(chat.id, 1)
                        fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                        client.reply(from, 'NSFW Command successfully deactivated in this group!', id)
                    } else {
                        client.reply(from, 'Select enable or disable!', id)
                    }
                    break

         break
         case '!ass':
            {
         if (!isNsfw) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)}
         const response9 = await axios.get('https://meme-api.herokuapp.com/gimme/ass/');
         const { postlink9, title9, subreddit9, url9, nsfw9, spoiler9 } = response9.data
         await client.sendFileFromUrl(from, `${url9}`, 'ass.jpg', `${title9}`)
         break
         
         case '!pussy':
            case '!vagina':
        
   {
         if (!isNsfw) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)}
         const response0 = await axios.get('https://meme-api.herokuapp.com/gimme/pussy/');
         const { postlink0, title0, subreddit0, url0, nsfw0, spoiler0 } = response0.data
         await client.sendFileFromUrl(from, `${url0}`, 'pussy.jpg', `${title0}`)
         break         
         case '!gayporn':
         case '!gaynsfw':
     
{
      if (!isNsfw) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)}
      const response40 = await axios.get('https://meme-api.herokuapp.com/gimme/gaynsfw/');
      const { postlink40, title40, subreddit40, url40, nsfw40, spoiler40 } = response40.data
      await client.sendFileFromUrl(from, `${url40}`, 'gay.jpg', `${title40}`)
      break

        case '!hentaimemes':
            case '!hentaimeme':
            case '!memeshentai':
{
     if (!isNsfw) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)}
     const response30 = await fetch('https://www.reddit.com/r/ksi');
     const { postlink30, title30, subreddit30, url30, nsfw30, spoiler30 } = response30.data
     await client.sendFileFromUrl(from, `${url30}`, 'hentaimemes.jpg', `${title30}`)
     break
     case '!gifhentai':
        case '!hentaigif':
    
{
     if (!isNsfw) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)}
     const response20 = await axios.get('https://meme-api.herokuapp.com/gimme/HENTAI_GIF/');
     const { postlink20, title20, subreddit20, url20, nsfw20, spoiler20 } = response20.data
     await client.sendFileFromUrl(from, `${url20}`, 'hentai.gif', `${title20}`)
     break
            case '!porn':            

              const response202 = fetch('https://meme-api.herokuapp.com/gimme/HENTAI_GIF')
                const { postlink202, title202, subreddit202, url202, nsfw202, spoiler202 } = response202.data
                await client.sendFileFromUrl(from, `${url202}`, 'hentai.gif', `${title202}`)
        
                    

                break
                case '!discordserver':
                client.reply(from, 'https://discord.gg/QnjaRU6DcZ',id)
           

                    
            break

       {
/*
* "Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
* Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
* (QS ash-Shaff: 2-3).
*/
const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const axios = require('axios')
const moment = require('moment-timezone')   
const get = require('got')
const fetch = require('node-fetch') 
const color = require('./lib/color')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const { liriklagu, quotemaker, randomNimek, fb, sleep, jadwalTv, ss } = require('./lib/functions')
const { help, snk, info, donate, readme, listChannel } = require('./lib/help')
const { stdout } = require('process')
const msgFilter = require('./lib/msgFilter')
const { profile } = require('./lib/profile.js')
const { profilepic } = require('./lib/pfp.js')
const { exec } = require('child_process');
const ruleArr = JSON.parse(fs.readFileSync('./lib/rule.json'))
const pokefunc = require('./lib/poke.js')
const pkarrs = JSON.parse(fs.readFileSync('./lib/pokedata/pkmnz.json'))
const nsfw_ = JSON.parse(fs.readFileSync('./lib/NSFW.json'))
const nsfwgrp = JSON.parse(fs.readFileSync('./lib/nsfw.json')) 
const welkom = JSON.parse(fs.readFileSync('./lib/welcome.json') )
const errorurl = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
const { RemoveBgResult, removeBackgroundFromImageBase64, removeBackgroundFromImageFile } = require('remove.bg')




moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = msgHandler = async (client, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, mentionedJidList, author, quotedMsgObj } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        body = (type === 'chat' ) ? body : ((type === 'image' && caption || type === 'video' && caption)) ? caption : ''
        const command = commands.toLowerCase().split(' ')[0] || ''
        const args =  commands.split(' ')
	    const isRule = ruleArr.includes(chat.id)
        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }
author
	if (!isGroupMsg && isRule && (type === 'chat' && message.body.includes('chat.whatsapp.com') && isBotGroupAdmins) && !isGroupAdmins) return await client.removeParticipant(chat.id, )




        const msgs = (message) => {
            if (command.startsWith('!')) {
                if (message.length >= 10){
                    return `${message.substr(0, 15)}`
                }else{
                    return `${message}`
                }
            }
        }

        const mess ={
            wait: '[WAIT] In progress⏳ please wait a moment',
            error: {
                St: '[❗] Send images with the caption *! Sticker * or tagged images that have been sent',
                Qm: '[❗] An error occurred, maybe the theme is not available!',
                Yt3: '[❗] An error occurred, unable to convert to mp3!',
                Yt4: '[❗] An error occurred, maybe the error was caused by the system.',
                Ig: '[❗] An error occurred, maybe because the account is private',
                Ki: ` [❗] Bot can't take out the group admin!`,
                Ad: `[❗] Cannot add target, maybe because it's private`,
                Iv: '[❗] The link you submitted is invalid!'
            }
        }
        const apiKey = 'ojEgjhUfw_tTtEq4MBdzPiGEoIjic1fB' // apikey you can get it at https://mhankbarbars.herokuapp.com/api
        const botNumber = await client.getHostNumber()
        const blockNumber = await client.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber) : false
        const ownerNumber = ["96179177377@c.us"] // replace with your whatsapp number
        const isOwner = ownerNumber.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)

    
        if (isBlocked) return
        //if (!isOwner) return
        switch(command) {
        case '!sticker':
        case '!stiker':
         case '#sticker':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await client.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    client.reply(from, mess.error.Iv, id)
                }
            } else {
                    client.reply(from, mess.error.St, id)
            }
            break
        case '!stickergif':
        case '#stickergif':
        case '!sgif':
        case '!sticker':
        case '#animate':
            
            if (isMedia) {
                if (mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10) {
                    const mediaData = await decryptMedia(message, uaOverride)
                    client.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                    const filename = `./media/aswu.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./media/output.gif --fps=30 --scale=240:240`, async function (error, stdout, stderr) {
                        const gif = await fs.readFileSync('./media/output.gif', { encoding: "base64" })
                        await client.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                    })
                } else (
                    client.reply(from, '[❗] Kirim video dengan caption *!stickerGif* max 10 sec!', id)
                )
            }
            break
            break

            break
        
            case '!stickernobg':
                case '!stikernobg':
                    case '!snobg':
                if (isMedia) {
                        try {
                            var mediaData = await decryptMedia(message, uaOverride)
                            var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                            var base64img = imageBase64
                            var outFile = './media/img/noBg.png'
                            // untuk api key kalian bisa dapatkan pada website remove.bg
                            var result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'ojEgjhUfw_tTtEq4MBdzPiGEoIjic1fB', size: 'auto', type: 'auto', outFile })
                            await fs.writeFile(outFile, result.base64img)
                            await client.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`)
                        } catch(err) {
                            console.log(err)
                        }
                    }
                    break
        case '!tts':
             case '#say':
            case '!say':
            if (args.length === 1) return client.reply(from, '*Send command *! Tts "id", "en", "jp", "ar" "text" *, for example *! Tts en hello *')
            const ttsId = require('node-gtts')('id')
            const ttsEn = require('node-gtts')('en')
	    const ttsJp = require('node-gtts')('ja')
            const ttsAr = require('node-gtts')('ar')
            const dataText = body.slice(8)
            if (dataText === '') return client.reply(from, 'Baka?', id)
            if (dataText.length > 500) return client.reply(from, 'Text is too long!', id)
            var dataBhs = body.slice(5, 7)
	        if (dataBhs == 'id') {
                ttsId.save('./media/tts/resId.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resId.mp3', id)
                })
            } else if (dataBhs == 'en') {
                ttsEn.save('./media/tts/resEn.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resEn.mp3', id)
                })
            } else if (dataBhs == 'jp') {
                ttsJp.save('./media/tts/resJp.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resJp.mp3', id)
                })
	    } else if (dataBhs == 'ar') {
                ttsAr.save('./media/tts/resAr.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resAr.mp3', id)
                })
            } else {
                client.reply(from, 'Enter the language data: "id" for Indonesian, "en" for English, "jp" for Japanese, and "ar" for Arabic, Example: !tts en hi', id)
            }
            break
        case '!creator':
          client.sendLinkWithAutoPreview(from, '*Steven Harran* is the Coder/Creator of this bot. https://instagram.com/steven_harran   Also use our Discord bot *Pogy*  https://pogy.xyz/ ')
            break
            case '!discordbot':
                client.sendLinkWithAutoPreview(from, 'Use our Discord bot *Pogy*  https://pogy.xyz/ ')
                  break
         case '#hi':
         case '!hi':
            client.sendLinkWithAutoPreview(from, '*Hello*, how are you? Use *!help* to get all the commands list. *Enjoy the bot!*')
break

        case '!welcome':
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            if (!isGroupAdmins) return client.reply(from, 'This command can only be used by the Admin group!', id)
            if (args.length === 1) return client.reply(from, 'Select enable or disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                client.reply(from, 'The welcome feature has been successfully activated in this group!', id)
            } else if (args[1].toLowerCase() === 'disable') {
                welkom.splice(chat.id, 1)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                client.reply(from, 'The welcome feature has been successfully deactivated in this group!', id)
            } else {
                client.reply(from, 'Select enable or disable !', id)
            }
            break
        case '!nsfwmenu':
            if (!isNsfw) return
            client.reply(from, '1. *!hentai*\n2. *!porn*\n3. *!nsfwgif*\n4. *!nudes*\n5. *!boobs*\n6. *!ass*\n7. *!pussy*\n8. *!dick* ', id)
        	break
        case '!brainly':
            if (args.length >= 2){
                const BrainlySearch = require('./lib/brainly')
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return client.reply(from, 'Max 10!', id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                client.reply(from, `➸ *Question* : ${tanya.split('.')[0]}\n\n➸ *Number of answers* : ${Number(jum)}`, id)
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            client.reply(from, `➸ *Question* : ${x.pertanyaan}\n\n➸ *Answer* : ${x.jawaban.judulJawaban}\n`, id)
                        } else {
                            client.reply(from, `➸ *Question* : ${x.pertanyaan}\n\n➸ *Answer* : ${x.jawaban.judulJawaban}\n\n➸ *Answer photo link* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                        }
                    })
                })
            } else {
                client.reply(from, 'Usage :\n!brainly [question] [.number]\n\nEx : \n!brainly NKRI .2', id)
            }
            break
            case '!animememe':
                const response13 = await axios.get('https://meme-api.herokuapp.com/gimme/animemes');
                const { postlink13, title13, subreddit13, url13, nsfw13, spoiler13 } = response13.data
                await client.sendFileFromUrl(from, `${url13}`, 'meme.jpg', `${title13}`)
                break
        case '!wait':
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                client.reply(from, 'Searching...', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                	if (resolt.docs && resolt.docs.length <= 0) {
                		client.reply(from, `Sorry, I don't know what anime this is`, id)
                	}
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                    	teks = '*I have low faith in this* :\n\n'
                    }
                    teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese* : ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *Ecchi* : ${is_adult}\n`
                    teks += `➸ *Eps* : ${episode.toString()}\n`
                    teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    client.sendFileFromUrl(from, video, 'nimek.mp4', teks, id).catch(() => {
                        client.reply(from, teks, id)
                    })
                })
                .catch(() => {
                    client.reply(from, 'Error !', id)
                })
            } else {
                client.sendFile(from, './media/img/tutod.jpg', 'Tutor.jpg', id)
            }
            break
        case '!quotemaker':
            arg = body.trim().split('|')
            if (arg.length >= 4) {
                client.reply(from, mess.wait, id)
                const quotes = encodeURIComponent(arg[1])
                const author = encodeURIComponent(arg[2])
                const theme = encodeURIComponent(arg[3])
                await quotemaker(quotes, author, theme).then(amsu => {
                    client.sendFile(from, amsu, 'quotesmaker.jpg').catch(() => {
                       client.reply(from, mess.error.Qm, id)
                    })
                })
            } else {
                client.reply(from, `Usage: \n!quotemaker | text |watermark|theme\n\nEx :\n!quotemaker |here's an example | bicit|random`, id)
            }
            break
        case '!linkgroup':
            if (!isBotGroupAdmins) return client.reply(from, 'This command can only be used when the bot becomes admin', id)
            if (!isGroupMsg) {
                const inviteLink = await client.getGroupInviteLink(groupId);
                client.sendLinkWithAutoPreview(from, inviteLink, `\nLink group *${name}*`)
            } else {
            	client.reply(from, 'This command can only be used in groups!', id)
            }
            break
        case '!bc':
            if (!isOwner) return client.reply(from, 'This command is for Bot Owners only!', id)
            let msg = body.slice(4)
            const chatz = await client.getAllChatIds()
            for (let ids of chatz) {
                var cvk = await client.getChatById(ids)
                if (!cvk.isReadOnly) await client.sendText(ids, `[ STEVEN BOT Broadcast ]\n\n${msg}`)
            }
            client.reply(from, 'Broadcast Success!', id)
            break
        case '!adminlist':
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await client.sendTextWithMentions(from, mimin)
            break
        case '!ownergroup':
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            const Owner_ = chat.groupMetadata.owner
            await client.sendTextWithMentions(from, `Owner Group : @${Owner_}`)
            break
        case '!mentionall':
            case '!tagall':
                case '@everyone': 
                case '!everyone':           
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            if (!isGroupAdmins) return client.reply(from, 'This command can only be used by group admins', id)
            const groupMem = await client.getGroupMembers(groupId)
            let hehe = '╔══✪〘 Mention All 〙✪══\n'
            for (let i = 0; i < groupMem.length; i++) {
                hehe += '╠➥'
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += '╚═〘 Steven BOT 〙'
            await client.sendTextWithMentions(from, hehe)
            break
        case '!kickall':
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return client.reply(from, 'This command can only be used by the Owner group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'This command can only be used when the bot becomes admin', id)
            const allMem = await client.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (groupAdmins.includes(allMem[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await client.removeParticipant(groupId, allMem[i].id)
                }
            }
            client.reply(from, 'Succes kick all member', id)
            break
        case '!leaveall':
            if (!isOwner) return client.reply(from, 'This order is for Bot Owners only', id)
            const allChats = await client.getAllChatIds()
            const allGroups = await client.getAllGroups()
            for (let gclist of allGroups) {
                await client.sendText(gclist.contact.id, `Sorry the bot is cleaning, total chat is active : ${allChats.length}`)
                await client.leaveGroup(gclist.contact.id)
            }
            client.reply(from, 'Success leave all group!', id)
            break
        case '!clearall':
            if (!isOwner) return client.reply(from, 'This order is for Bot Owners only', id)
            const allChatz = await client.getAllChats()
            for (let dchat of allChatz) {
                await client.deleteChat(dchat.id)
            }
            client.reply(from, 'Success clear all chat!', id)
            break
        case '!add':
            const orang = args[1]
            if (!isGroupMsg) return client.reply(from, 'This feature can only be used in groups', id)
            if (args.length === 1) return client.reply(from, 'To use this feature, send the command *!Add * 961........', id)
            if (!isGroupAdmins) return client.reply(from, 'This command can only be used by group admins', id)
            if (!isBotGroupAdmins) return client.reply(from, 'This command can only be used when the bot becomes admin', id)
            try {
                await client.addParticipant(from,`${orang}@c.us`)
            } catch {
                client.reply(from, mess.error.Ad, id)
            }
            break
        case '!leave':
            if (!isGroupMsg) return client.reply(from, 'This feature can only be used in groups', id)
            if (!isGroupAdmins) return client.reply(from, 'This command can only be used by group admins', id)
            await client.sendText(from,'Goodbye. I love you.').then(() => client.leaveGroup(groupId))
            break
            case '!promote':
                if(!isGroupMsg) return client.reply(from, '.', message.id)
                if(!isGroupAdmins) return client.reply(from, 'You are not an admin, Sorry', message.id)
                if(!isBotGroupAdmins) return client.reply(from, 'You need to make me admin to Promote', message.id)
                if (mentionedJidList.length === 0) return await client.reply(from, 'Wrong format!', message.id)
                if (mentionedJidList.length >= 2) return await client.reply(from, 'One user at a time', message.id)
                if (groupAdmins.includes(mentionedJidList[0])) return await client.reply(from, 'This user is already admin', message.id)
                await client.promoteParticipant(groupId, mentionedJidList[0])
                await client.sendTextWithMentions(from, `@${mentionedJidList[0].replace('')} is now an admin`)
                break
            case '!demote':
                if(!isGroupAdmins) return client.reply(from, 'You are not an admin, Sorry', message.id)
                if(!isBotGroupAdmins) return client.reply(from, 'You need to make me admin to Demote', message.id)
                if (mentionedJidList.length === 0) return client.reply(from, 'Wrong Format', message.id)
                if (mentionedJidList.length >= 2) return await client.reply(from, 'One user at a time', message.id)
                if (!groupAdmins.includes(mentionedJidList[0])) return await client.reply(from, 'The user isn\'t an admin', message.id)
                await client.demoteParticipant(groupId, mentionedJidList[0])
                await client.sendTextWithMentions(from, `Demoted @${mentionedJidList[0].replace('')}.`)
                break

                
                case '!kick':
                    if(!isGroupMsg) return client.reply(from, 'This feature can only be used in groups', message.id)
                    if(!isGroupAdmins) return client.reply(from, 'You are not an admin, Sorry', message.id)
                    if(!isBotGroupAdmins) return client.reply(from, 'You need to make me admin to Kick', message.id)
                    if(mentionedJidList.length === 0) return client.reply(from, 'Wrong format', message.id)
                    await client.sendText(from, `Request Accepted! Kicking:\n${mentionedJidList.join('\n')}`)
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        if (groupAdmins.includes(mentionedJidList[i])) return await client.reply(from, '....', message.id)
                        await client.removeParticipant(groupId, mentionedJidList[i])
                    }
                    break
        case '!join':
            if (args.length == 0) return client.reply(from, 'Wrong Format', message.id)
            const link = body.slice(6)
            const minMem = 30
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await client.inviteInfo(link)
            if (!isLink) return client.reply(from, 'Where\'s the link?', message.id)
            if (check.size < minMem) return client.reply(from, 'The group does not have 30+ members', message.id)
            await client.joinGroupViaLink(link).then( async () => {
                await client.reply(from, '*Joined* ✨️', message.id)
            }).catch(error => {
                client.reply(from, 'An error occured 💔️', message.id)
            })
            break
        case '!delete':
                if (!isGroupAdmins) return client.reply(from, 'Only admins can use this command', id)
                if (!quotedMsg) return client.reply(from, 'Wrong Format!', id)
                if (!quotedMsgObj.fromMe) return client.reply(from, 'Wrong Format!', id)
                client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break                

                case '!screenshot':
            const sesPic = await client.getSnapshot()
            client.sendFile(from, sesPic, 'session.png', )
            break
            case '!lyric':
        case '!lyrics':
            if (args.length == 1) return client.reply(from, `Send command *! Lyrics "song" *, example *! Lyrics "Dior" *`, id)
            const lagu = body.slice(7)
            const lirik = await liriklagu (lagu)
            client.reply(from, lirik, id)
            break
            case '!anime':
                const keyword = message.body.replace('!anime', '')
                try {
                const data = await fetch(
               `https://api.jikan.moe/v3/search/anime?q=${keyword}`
                )
                const parsed = await data.json()
                if (!parsed) {
                  await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Sorry, Couldn\'t find the requested anime', id)
                  console.log("Sent!")
                  return null
                  }
                const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
                const content = `*Anime Found!*
    ✨️ *Title:* ${title}
    
    🎆️ *Episodes:* ${episodes}
    
    💌️ *Rating:* ${rated}
    
    ❤️ *Score:* ${score}
    
    💚️ *Synopsis:* ${synopsis}
    
    🌐️ *URL*: ${url}`
    
                const image = await bent("buffer")(image_url)
                const base64 = `data:image/jpg;base64,${image.toString("base64")}`
                client.sendImage(from, base64, title, content)
               } catch (err) {
                 console.error(err.message)
                 await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Sorry, Couldn\'t find the requested anime')
               }
              break
        case '!manga':
        const keywrd = (args)
                try {
                const data = await fetch(
               `https://api.jikan.moe/v3/search/manga?q=${keywrd}`
                )
                const parsed = await data.json()
                if (!parsed) {
                  await client.sendFileFromUrl(from, errorurl2, 'error.png', 'Sorry, Couldn\'t find the requested manga', id)
                  console.log("Sent!")
                  return null
                  }
                const { title, synopsis, chapters, url, volumes, score, image_url } = parsed.results[0]
                const content = `*Manga found*
    
    *Title:* ${title}
    
    *Chapters:* ${chapters}

    *Volumes:* ${volumes}
    
    *Score:* ${score}
    
    *Synopsis:* ${synopsis}
    
    *Link*: ${url}`
    
                const image = await bent("buffer")(image_url)
                const base64 = `data:image/jpg;base64,${image.toString("base64")}`
                client.sendImage(from, base64, title, content)
               } catch (err) {
                 console.error(err.message)
                 await client.sendFileFromUrl(from, errorurl, 'error.png', 'Sorry, Couldn\'t find the requested manga')
               }
                break
        case '!chord':
            if (args.length === 1) return client.reply(from, 'Send command *! Chord [query] *, for example *! My chord is not a puppet *', id)
            const query__ = body.slice(7)
            const chord = await get.get(`https://mhankbarbar.herokuapp.com/api/chord?q=${query__}&apiKey=${apiKey}`).json()
            if (chord.error) return client.reply(from, chord.error, id)
            client.reply(from, chord.result, id)
            break
        case '!listblock':
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ @${i.replace(/@c.us/g,'')}\n`
            }
            client.sendTextWithMentions(from, hih, id)
            break
        case '!listchannel':
            client.reply(from, listChannel, id)
            break
        case '!husbu':
            const diti = fs.readFileSync('./lib/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            client.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
                break
                      case 'sex':
                          client.sendLinkWithAutoPreview(from, '*sex*')
                  break
                  case 'coo':
                    client.sendLinkWithAutoPreview(from, '*coo*')
            break
                  case '!pornhub':
                         client.sendLinkWithAutoPreview(from, 'https://pornhub.com')
                         break
                   case 'pog':
                    case '!pog':
                       client.sendLinkWithAutoPreview(from, '*pog*')   
                       break
                   case '!test':
                client.sendLinkWithAutoPreview(from, '*Your bot is working sir*')
                   break
                   case '!nsfw':
                    if (!isGroupAdmins) return client.reply(from, 'This command can only be used by the Admin group!', id)
                    if (args.length === 1) return client.reply(from, 'Select enable or disable!', id)
                    if (args[1].toLowerCase() === 'enable') {
                        nsfw_.push(chat.id)
                        fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                        client.reply(from, 'NSWF Command successfully activated in this group! send command *! nsfwMenu * to find out the menu', id)
                    } else if (args[1].toLowerCase() === 'disable') {
                        nsfw_.splice(chat.id, 1)
                        fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                        client.reply(from, 'NSFW Command successfully deactivated in this group!', id)
                    } else {
                        client.reply(from, 'Select enable or disable!', id)
                    }
                    break
        case '!hentai':
         {
         if (!isNsfw) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)}
         const response11 = await axios.get('https://meme-api.herokuapp.com/gimme/hentai/');
         const { postlink11, title11, subreddit11, url11, nsfw11, spoiler11 } = response11.data
         await client.sendFileFromUrl(from, `${url11}`, 'hentai.jpg', `${title11}`)
         break
         case '!ass':
            {
         if (!isNsfw) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)}
         const response9 = await axios.get('https://meme-api.herokuapp.com/gimme/ass/');
         const { postlink9, title9, subreddit9, url9, nsfw9, spoiler9 } = response9.data
         await client.sendFileFromUrl(from, `${url9}`, 'ass.jpg', `${title9}`)
         break
         
         case '!pussy':
            case '!vagina':
        
   {
         if (!isNsfw) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)}
         const response0 = await axios.get('https://meme-api.herokuapp.com/gimme/pussy/');
         const { postlink0, title0, subreddit0, url0, nsfw0, spoiler0 } = response0.data
         await client.sendFileFromUrl(from, `${url0}`, 'pussy.jpg', `${title0}`)
         break         
         case '!gayporn':
         case '!gaynsfw':
     
{
      if (!isNsfw) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)}
      const response40 = await axios.get('https://meme-api.herokuapp.com/gimme/gaynsfw/');
      const { postlink40, title40, subreddit40, url40, nsfw40, spoiler40 } = response40.data
      await client.sendFileFromUrl(from, `${url40}`, 'gay.jpg', `${title40}`)
      break

        case '!hentaimemes':
            case '!hentaimeme':
            case '!memeshentai':
{
     if (!isNsfw) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)}
     const response30 = await axios.get('https://meme-api.herokuapp.com/gimme/hentaimemes/');
     const { postlink30, title30, subreddit30, url30, nsfw30, spoiler30 } = response30.data
     await client.sendFileFromUrl(from, `${url30}`, 'hentaimemes.jpg', `${title30}`)
     break
     case '!gifhentai':
        case '!hentaigif':
    
{
     if (!isNsfw) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)}
     const response20 = await axios.get('https://meme-api.herokuapp.com/gimme/HENTAI_GIF/');
     const { postlink20, title20, subreddit20, url20, nsfw20, spoiler20 } = response20.data
     await client.sendFileFromUrl(from, `${url20}`, 'hentai.gif', `${title20}`)
     break

            case '!antijoke': 
            case '!antijokes':            
            

                const response44 = await axios.get('https://meme-api.herokuapp.com/gimme/AntiJokes/');      
                        const { postlink44, title44, subreddit44, url44, nsfw44, spoiler44 } = response44.data
                        await client.sendFileFromUrl(from, `${url44}`,  `${title44}`)

            break
            case '!news': 
            case '!worldnews':            
            

                const response444 = await axios.get('https://meme-api.herokuapp.com/gimme/worldnews/');       
                        const { postlink444, title444, subreddit444, url444, nsfw444, spoiler444 } = response444.data
                        await client.sendFileFromUrl(from, `${url444}`, 'news.txt', `${title444}`)

            break
            case '!puns': 
            case '!pun':            
            

                const response4444 = await axios.get('https://meme-api.herokuapp.com/gimme/puns/');       
                        const { postlink4444, title4444, subreddit4444, url4444, nsfw4444, spoiler4444 } = response4444.data
                        await client.sendFileFromUrl(from, `${url4444}`, 'puns.jpg', `${title4444}`)

            break
            case '!boobs':            
         {
                if (! isNsfw) return client.reply (from, 'Command / NSFW command not activated in this group!', id)}
                const response7 = await axios.get('https://meme-api.herokuapp.com/gimme/boobs/');
            const { postlink7, title7, subreddit7, url7, nsfw7, spoiler7 } = response7.data
            await client.sendFileFromUrl(from, `${url7}`, 'boobs.jpg', `${title7}`)
            break
            case '!dick':            
         {
                if (! isNsfw) return client.reply (from, 'Command / NSFW command not activated in this group!', id)}
            const response6 = await axios.get('https://meme-api.herokuapp.com/gimme/ratemycock/');
            const { postlink6, title6, subreddit6, url6, nsfw6, spoiler6 } = response6.data
            await client.sendFileFromUrl(from, `${url6}`, 'dick.jpg', `${title6}`)
            break
            case '!nsfwgif':            
          
                {if (! isNsfw) return client.reply (from, 'Command / NSFW command not activated in this group!', id)}
            const response5 = await axios.get('https://meme-api.herokuapp.com/gimme/nsfw_gifs/');
            const { postlink5, title5, subreddit5, url5, nsfw5, spoiler5 } = response5.data
            await client.sendFileFromUrl(from, `${url5}`, 'nsfw.gif', `${title5}`)
            await client.sendFileFromUrl(from, `${url5}`, 'nsfw.mp4', `${title5}`)
            break
        case '!nudes':            
            {if (! isNsfw) return client.reply (from, 'Command / NSFW command not activated in this group!', id)}
            const response3 = await axios.get('https://meme-api.herokuapp.com/gimme/nsfw/');
        const { postlink3, title3, subreddit3, url3, nsfw3, spoiler3 } = response3.data
        await client.sendFileFromUrl(from, `${url3}`, 'nudes.jpg', `${title3}`)
        break
        case '!ksi':
            case '!srksi':
                case '!sr ksi':
                    case '!redditksi':
        const response8 = await axios.get('https://meme-api.herokuapp.com/gimme/ksi');
        const { postlink8, title8, subreddit8, url8, nsfw8, spoiler8 } = response8.data
        await client.sendFileFromUrl(from, url8, 'ksi.jpg', title8)
        await client.sendFileFromUrl(from, url8, 'ksi.mp4', title8)
        await client.sendFileFromUrl(from, url8, 'ksi.gif', title8)
        break
        case '!nsfwmeme':
            case '!nsfwmemes':
                case '!nsfwmemer':
            {
         if (!isNsfw) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)}
         const response99 = await axios.get('https://meme-api.herokuapp.com/gimme/NSFWMemes/');
         const { postlink99, title99, subreddit99, url99, nsfw99, spoiler99 } = response99.data
         await client.sendFileFromUrl(from, `${url99}`, 'nsfwmeme.jpg', `${title99}`)
         break
         case '!animal':
            case '!animals':
        {
     if (!isNsfw) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)}
     const response96 = await axios.get('https://meme-api.herokuapp.com/gimme/Animals/');
     const { postlink96, title96, subreddit96, url96, nsfw96, spoiler96 } = response96.data
     await client.sendFileFromUrl(from, `${url96}`, 'animals.jpg', `${title96}`)
     break
     case '!penis':
        case '!pp':

     const number2 = Math.floor(Math.random() * 17) + 1;
     if(number === 1){
     client.sendText(from, `*8============D`);
    } else  if(number === 2){
     client.sendText(from, `*8=============D`);
    } else  if(number === 3){
     client.sendText(from, `*8===========D`);
    } else  if(number === 4){
     client.sendText(from, `*8==========D`);
    } else  if(number === 5){
     client.sendText(from, `*8=========D`);
    } else  if(number === 6){
     client.sendText(from, `*8========D`);
    } else  if(number === 7){
     client.sendText(from, `*8=======D`);
    } else  if(number === 8){
     client.sendText(from, `*8======D`);
    } else  if(number === 9){
     client.sendText(from, `*8=====D`);
    } else  if(number === 10){
     client.sendText(from, `*8====D`);
    } else  if(number === 11){

     client.sendText(from, `*8===D`);
    } else  if(number === 12){
     client.sendText(from, `*8==D`);
    } else  if(number === 13){
     client.sendText(from, `*8=D`);
    } else if(number === 14){
        client.sendText(from, `*8==============D`);
       } else  if(number === 15){
        client.sendText(from, `*8=============D`);}
        else  if(number === 16){
        client.sendText(from, `*8================D`);}
    else  if(number === 17){
        client.sendText(from, `*8===============D`);}
         break
         
            
        case '!dankmemes':
            const response10 = await axios.get('https://meme-api.herokuapp.com/gimme/dankmemes/');
            const { postlink10, title10, subreddit10, url10, nsfw10, spoiler10 } = response10.data
            await client.sendFileFromUrl(from, url10, 'dankmemes.jpg', title10)
            await client.sendFileFromUrl(from, url10, 'dankmemes.gif', title10)
            break

      case '!lebanon':            
     
        client.sendFile(from, './media/lebanon/lebanon.png', 'lebanon.png')
        client.sendFile(from, './media/lebanon/lebanese.mp3', 'lebanese.mp3')
        client.sendLinkWithAutoPreview(from,'https://helplebanon.carrd.co')      
          
        break 
        case '!salim':            
     
        client.sendFile(from, './media/salim/1.png', '1.png','SEXY DADDY SALIM')
        client.sendFile(from, './media/salim/2.png', '2.png')
        client.sendFile(from, './media/salim/Salim.mp3', 'Salim.mp3')
        
        break
        case '!afk' :
 
        client.sendLinkWithAutoPreview(from,'*You have been set to afk*') 
        break
        case '!afk end' :
 
            client.sendLinkWithAutoPreview(from,'*Welcome back! I removed your AFK.*') 
            break
            case '!wiki':
                case '!wiki':
                    if (args.length === 1) return client.reply(from, 'Kirim perintah *!wiki [query]*\nContoh : *!wiki asu*', id)
                    const query_ = body.slice(6)
                    const wiki = await axios.get(`https://en.wikipedia.org/w/api.php?"+ ${query_} +”&format=json`)
                    if (wiki.error) {
                        client.reply(from, wiki.error, id)
                    } else {
                        client.reply(from, `➸ *Query* : ${query_}\n\n➸ *Result* : ${wiki.result}`, id)
                    }
                    break
        case '!donate' :
         case '!donation' :
        client.sendLinkWithAutoPreview(from,'https://helplebanon.carrd.co','https://supportlrc.app/donate') 
       break
       case '!kessemmak' :
        client.sendLinkWithAutoPreview(from,'kess emme')
        break
        case '!lonely' :
            client.sendLinkWithAutoPreview(from,'*Hey you! Talk to me privately here* https://wa.me/message/4DV4R5J63ELYI1')
        break
        case 'daddy' :
        case '!daddy' :
          client.sendLinkWithAutoPreview(from,'daddy chill') 
          client.sendFile(from, './media/wpoff/daddy.mp3', 'daddy.mp3 ')
          break
          case '!israel' :
          case 'israel' :
            client.sendLinkWithAutoPreview(from,'*ayre b Israel*','You mean *Palestine*')             
        break 
      
        case '!cmc':            
     
        client.sendFile(from, './media/cmc/cmc.jpg', 'jpg.png')
        client.sendFile(from, './media/cmc/cmc.mp3', 'cmc.mp3')

        break

        case '!wpoff':            
        case '!kelkonmaslahjiyye':     
        case '!kelkonmaslahjiye':
        client.sendLinkWithAutoPreview(from,'wp off🥀11:11 ØfF🥀mahada yehkine💔kelkon maslahjiyye❌❌💔🥀😈عند المصالح تأتي الكلاب مشتاقة🥀🥀😍you are my best wish🥰👻🌹✨nightsssss🌚🌚🖤')     
        client.sendFile(from, './media/wpoff/3.mp3', '3.mp3')
        client.sendFile(from, './media/wpoff/1.mp3', '1.mp3')
        client.sendFile(from, './media/wpoff/4.mp3', '4.mp3')
        client.sendFile(from, './media/wpoff/5.mp3', '5.mp3')
        
        break

        case '!ayrefik':
        case '!ayrefike':
        case '!erfik':
        case '!erfike':
          client.sendLinkWithAutoPreview(from,'say less')
        client.sendFile(from, './media/wpoff/Er.mp3', 'Er.mp3')
 
        break

      case '!nfo5o':
      case '!nfokho':
        client.sendLinkWithAutoPreview(from,'yalla jeye enf5o')

        break

        case '!skye':
            case '!skye':
                client.sendFile(from, './media/skye/skye.mp3', 'skye.mp3')
                client.sendFile(from, './media/skye/skye.png', 'skye.png')
                client.sendFile(from, './media/skye/skye1.png', 'skye1.png') 
                client.sendFile(from, './media/skye/skye2.png', 'skye2.png')  
                client.sendLinkWithAutoPreview(from,'*ANH*')                                   
              break
              case '!groupinfo' :
                if (!isGroupMsg) return client.reply(from, '.', message.id) 
                var totalMem = chat.groupMetadata.participants.length
                var desc = chat.groupMetadata.desc
                var groupname = name
                var welkomgrp = welkom.includes(chat.id)
                var ngrp = nsfwgrp.includes(chat.id)
                var grouppic = await client.getProfilePicFromServer(chat.id)
                if (grouppic == undefined) {
                     var pfp = errorurl
                } else {
                     var pfp = grouppic 
                }
                await client.sendFileFromUrl(from, pfp, 'group.png', `*${groupname}* 
    
    🌐️ *Members: ${totalMem}*
    
    💌️ *Welcome: ${welkomgrp}*
    
    🔮️ *Rule* : *${isRule}*
    
    ⚜️ *NSFW: ${ngrp}*
    
    📃️ *Group Description* 
    
    ${desc}`)
            break
              case '!aiquote' :
                case '!quote' :
                    case '!quotes' :
                const aiquote = await axios.get("http://inspirobot.me/api?generate=true")
                await client.sendFileFromUrl(from, aiquote.data, 'quote.jpg' )
                break
                case '!covid':
                    case '!corona':
                    arg = body.trim().split(' ')
                    console.log(...arg[1])
                    var slicedArgs = Array.prototype.slice.call(arg, 1);
                    console.log(slicedArgs)
                    const country = await slicedArgs.join(' ')
                    console.log(country)
                    const response2 = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country + '/')
                    const { cases, todayCases, deaths, todayDeaths, active } = response2.data
                        await client.sendText(from, '🌎️Covid Info -' + country + ' 🌍️\n\n✨️Total Cases: ' + `${cases}` + '\n📆️Today\'s Cases: ' + `${todayCases}` + '\n☣️Total Deaths: ' + `${deaths}` + '\n☢️Today\'s Deaths: ' + `${todayDeaths}` + '\n⛩️Active Cases: ' + `${active}` + '.')
                    break         
                    case '!sauce':
                        if (isMedia) {
                            if (type == 'image') {
                            const buffer = await decryptMedia(message, uaOverride)
                            const filename = `./media/images/sauce.${mime.extension(message.mimetype)}`
                            await fs.writeFile(filename, buffer)
                            await source.sauce(filename, message)
                            } else { 
                            client.reply(from, 'Only Images are supported', id)
                            }
                        } else if (quotedMsg && quotedMsg.type == 'image') {
                            const buffer = await decryptMedia(quotedMsg, uaOverride)
                            const filename = `./media/images/sauce.${mime.extension(quotedMsg.mimetype)}`
                            await fs.writeFile(filename, buffer)
                            await source.sauce(filename, quotedMsgObj)
                        } else { 
                            client.reply(from, 'Only Images are supported', id)
                        }
                        break
                    case '!nabil':
                case '!nabilob':
                    client.sendFile(from, './media/nabil/nabil.mp4', 'nabil.mp4')
                    client.sendFile(from, './media/nabil/nabil.png', 'nabil.png', '*ANH*')
                    break
                    case '!berger':
                        case '!bergersalamon':
                            case '!bergersalmon':
                                case '!salmonberger':
                        client.sendFile(from, './media/nabil/nabil.mp4', 'nabil.mp4')
                        client.sendFile(from, './media/berger/berger.mp4', 'berger.mp4')
                        break
                    case '!chapo':
                            client.sendFile(from, './media/chapo/chapo.png', 'chapo.png')
                            client.sendFile(from, './media/chapo/chapo2.png', 'chapo2.png')
                            client.sendFile(from, './media/chapo/chapo3.png', 'chapo3.png')
                            client.sendFile(from, './media/chapo/chapo4.png', 'chapo4.png')
                            client.sendLinkWithAutoPreview(from,'*ANH*')    
                            break                    

                           
                            case '!haigusha': 
                            case '!waifu': 
                                const waifu = await waifuclient.getRandom()
                                await sclient.sendFileFromUrl(message.from, waifu.data.display_picture, 'haugusha.jpg', `❤️ *Name : ${waifu.data.name}*\n\n💎️ Description : ${waifu.data.description}\n\n💚️ Source : ${waifu.data.series.name}\n\n✨️ URL: ${waifu.data.url}`, message.id)
                                break

                            case '!roll':
                                const dice = Math.floor(Math.random() * 6) + 1
                                await client.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png')
                                break
                            case '!flip':
                                const side = Math.floor(Math.random() * 2) + 1
                                if (side == 1) {
                                   client.sendStickerfromUrl(from, 'https://i.ibb.co/LJjkVK5/heads.png')
                                } else {
                                   client.sendStickerfromUrl(from, 'https://i.ibb.co/wNnZ4QD/tails.png')
                                }
                                break
                            case '!slap':
                                arg = body.trim().split(' ')
                                const person = author.replace('')
                                await client.sendGiphyAsSticker(from, 'https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif')
                                client.sendTextWithMentions(from, '@' + person + ' *slapped* ' + arg[1])
                                break
                            case '!pokemon':
                                arg = body.trim().split(' ')
                                if (arg.length < 2) {
                                client.reply(from, 'Give me a pokemon name, Baka!', id)
                            } else {
                            if (pkarrs.includes(body.slice(9).toLowerCase())) {
                                const pokedta = await pokefunc.pkmzdata(body.slice(9).toLowerCase())
                            await client.sendFileFromUrl(from, pokedta.url, 'pkmn.png',pokedta.data, id)
                                    } else {
                            client.reply(from, `No such pokemon (${body.slice(9).toLowerCase()})`, id)
                            }
                            }
                            break
                    case '!rpaper' :
                       const walnime = ['https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
                      let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
                      client.sendFileFromUrl(from, walnimek, 'Nimek.jpg', '', message.id)
            break
            case '!act':
                arg = body.trim().split(' ')
                if (!isGroupAdmins) return client.reply(from, 'Only Admins can use this command, Baka >.<', id)
                if(isGroupAdmins){

      if(arg) return;
                        if (arg[1].toLowerCase() == '!welcome') {
                        if (wel.includes(chat.id)) {
                              client.reply(from, `Welcome is already registered on *${name}*`, message.id)
                        } else {
                                  wel.push(chat.id)
                               fs.writeFileSync('./lib/welcome.json', JSON.stringify(wel))
                               client.reply(from, `Welcome is now registered on *${name}*`, message.id)
                        }
                        } else if (arg[1].toLowerCase() == '!nsfw') {
                          if (nsfwgrp.includes(chat.id)) {
                   client.reply(from, `NSFW is already registered on *${name}*`, message.id)
                        } else {
                           nsfwgrp.push(chat.id)
                           fs.writeFileSync('./lib/nsfw.json', JSON.stringify(nsfwgrp))
                           client.reply(from, `NSFW is now registered on *${name}*`, message.id)
                   }
               } else if (arg[1].toLowerCase() == '!rule') {
                   if (!isBotGroupAdmins) return client.reply(from, 'You need to make me admin to use this CMD', message.id)
                   if (ruleArr.includes(chat.id)) {
                        client.reply(from, `Rule is already registered on *${name}*`, message.id)
                   } else {
                               ruleArr.push(chat.id)
                               fs.writeFileSync('./lib/rule.json', JSON.stringify(ruleArr))
                               client.reply(from, `Rule is now registered on *${name}*`, message.id)
                            }
               }
              }
                break
           case '!deact':
                arg = body.trim().split(' ')
                if (!isGroupAdmins) return client.reply(from, 'Only Admins can use this command, Baka >.<', id)
                if (arg[1].toLowerCase() == '!welcome') {
                   let inx = ban.indexOf(from)
                   wel.splice(inx, 1)
                   fs.writeFileSync('./lib/welcome.json', JSON.stringify(wel))
                   client.reply(from, `Welcome is now unregistered on *${name}*`, message.id)
                } else if (arg[1].toLowerCase() == '!nsfw') {
                   let inx = ban.indexOf(from)
                   nsfwgrp.splice(inx, 1)
                   fs.writeFileSync('./lib/nsfw.json', JSON.stringify(nsfwgrp))
                   client.reply(from, `NSFW is now unregistered on *${name}*`, message.id)
                } else if (arg[1].toLowerCase() == '!pokegame') {
                   let inx = pokarr.indexOf(from)
                   pokarr.splice(inx, 1)
                   fs.writeFileSync('./lib/poke.json', JSON.stringify(pokarr))
                   client.reply(from, `PokeGame is now unregistered on *${name}*`, message.id)
                } else if (arg[1].toLowerCase() == '!rule') {
                   let inx = ruleArr.indexOf(from)
                   ruleArr.splice(inx, 1)
                   fs.writeFileSync('./lib/rule.json', JSON.stringify(ruleArr))
                   client.reply(from, `Rule is now unregistered on *${name}*`, message.id)
                }      
                break
                   
          case '!cgc':
               arg = body.trim().split(' ')
               const gcname = arg[1]
               client.createGroup(gcname, mentionedJidList)
               client.sendText(from, 'Group Created ✨️')
               break
        case '!dog':
            const listss = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = listss[Math.floor(Math.random() * listss.length)]
            client.sendFileFromUrl(from, kya, 'Dog.jpeg')
            break
        case '!cat':
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            client.sendFileFromUrl(from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png')
            break
        case '!sendto':
            client.sendFile(from, './msgHndlr.js', 'msgHndlr.js')
            break
            case '!memes':     
            case '!meme': 
            case '#meme': 
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/');
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            await client.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`)
            break
            case '!translate':
                if (args.length != 1) return client.reply(from, 'Sorry, the message format is wrong.', id)
                if (!quotedMsg) return client.reply(from, 'Sorry, the message format is wrong.', id)
                const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                translate(quoteText, args[0])
                    .then((result) => client.sendText(from, result))
                    .catch(() => client.sendText(from, '[Error] Incorrect language code or server problem.'))
            break  
            case '!toimg':
                if(!quotedMsg) return client.reply(from, '.', id)
             else if (quotedMsg && quotedMsg.type == 'video'){
             return client.reply(from, 'that\'s not a sticker, Baka', id)
             } if(quotedMsg) {
         const mediaData = await decryptMedia(quotedMsg)
         const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
         await client.sendFile(from, imageBase64, 'img.jpg')
             }
             break
        case '!help':
        case '!menu':
        case '#menu':
        case '#help':                        
            client.sendText(from, help)
            break
        case '!readme':
            client.reply(from, readme, id)
            break
        case '!info':
            client.sendLinkWithAutoPreview(from, 'Steven Harran is the Coder of this bot. https://instagram.com/steven_harran', info)
            break
        case '!snk':
            client.reply(from, snk, id)
break
case '!reddit':
    case 'sreddit':
        if (args.length == 0) return client.reply(from, `Untuk mencari gambar dari sub reddit\nketik: ${prefix}sreddit [search]\ncontoh: ${prefix}sreddit naruto`, id)
        const carireddit = body.slice(9)
        const hasilreddit = await images.sreddit(carireddit)
        await client.sendFileFromUrl(from, hasilreddit, '', '', id)
            .catch(() => {
                client.reply(from,'Sorry, something went wrong! Please try again later. ', id)
            })
        break
       case '!pfp':
        case '!profilepic':
            case '!profilepicture':
        if (quotedMsg) return profilepic(quotedMsgObj.sender.id, message, fs, groupAdmins, client)
        if (mentionedJidList.length >= 1) return profilepic(mentionedJidList[1], message, fs, groupAdmins, client)
        return profilepic(sender.id, message, fs, groupAdmins, client)
            break
        
        
    
     break
case'!wa.me':
        case '!wame':
            await client.reply(from, `*This Is Your WhatsApp Number Link ${pushname}*\n\n*wa.me/${sender.id.replace(/[@c.us]/g, '')}`)
            break
            case '!profile':
                case '!me':
                    if (quotedMsg) return profile(quotedMsgObj.sender.id, message, fs, groupAdmins, client)
                if (mentionedJidList.length >= 1) return profile(mentionedJidList[1], message, fs, groupAdmins, client)
                return profile(sender.id, message, fs, groupAdmins, client)
                    break
                }
            } catch (err) {
                console.log(color('[ERROR]', 'red'), err)
            }
        }      
    }

     case '!simprate':
        case '!simp':
           case 'am i a simp?':
            case 'am i a simp':
            case '!gayrate':
                case '!ship':
                    case '!goals':
                        const number2 = Math.floor(Math.random() * 100) + 1;

                        client.reply(from, `*${number2} %*`,id);
         break
         
            
        case '!dankmemes':
            const response10 = await axios.get('https://meme-api.herokuapp.com/gimme/dankmemes/');
            const { postlink10, title10, subreddit10, url10, nsfw10, spoiler10 } = response10.data
            await client.sendFileFromUrl(from, url10, 'dankmemes.jpg', title10)
            await client.sendFileFromUrl(from, url10, 'dankmemes.gif', title10)
            break

      case '!lebanon':            
     
        client.sendFile(from, './media/lebanon/lebanon.png', 'lebanon.png')
        client.sendFile(from, './media/lebanon/lebanese.mp3', 'lebanese.mp3')
        client.reply(from,'https://helplebanon.carrd.co',id)      
          
        break 
        case '!salim':            
     
        client.sendFile(from, './media/salim/1.png', '1.png','SEXY DADDY SALIM')
        client.sendFile(from, './media/salim/2.png', '2.png')
        client.sendFile(from, './media/salim/Salim.mp3', 'Salim.mp3')
        
        break
        case '!afk' :
 
        client.reply(from,'*You have been set to afk*',id) 
        break
        case '!afk end' :
 
            client.reply(from,'*Welcome back! I removed your AFK.*',id) 
            break
            case '!wiki':
                case '!wiki':
                    if (args.length === 1) return client.reply(from, 'Kirim perintah *!wiki [query]*\nContoh : *!wiki asu*', id)
                    const query_ = body.slice(6)
                    const wiki = await axios.get(`https://en.wikipedia.org/w/api.php?"+ ${query_} +”&format=json`)
                    if (wiki.error) {
                        client.reply(from, wiki.error, id)
                    } else {
                        client.reply(from, `➸ *Query* : ${query_}\n\n➸ *Result* : ${wiki.result}`, id)
                    }
                    break
        case '!donate' :
         case '!donation' :
        client.reply(from,'https://helplebanon.carrd.co','https://supportlrc.app/donate',id) 
       break
       case '!kessemmak' :
        client.reply(from,'kess emme',id)
        break
        case '!lonely' :
            client.reply(from,'*Hey you! Talk to me privately here* https://wa.me/message/4DV4R5J63ELYI1',id)
        break
        case 'daddy' :
        case '!daddy' :
          client.reply(from,'daddy chill',id) 
          client.sendFile(from, './media/wpoff/daddy.mp3', 'daddy.mp3 ')
          break
          case '!israel' :
          case 'israel' :
            client.reply(from,'*ayre b Israel*','You mean *Palestine*',id)             
        break 
      
        case '!cmc':            
     
        client.sendFile(from, './media/cmc/cmc.jpg', 'jpg.png')
        client.sendFile(from, './media/cmc/cmc.mp3', 'cmc.mp3')

        break

        case '!wpoff':            
        case '!kelkonmaslahjiyye':     
        case '!kelkonmaslahjiye':
        client.reply(from,'wp off🥀11:11 ØfF🥀mahada yehkine💔kelkon maslahjiyye❌❌💔🥀😈عند المصالح تأتي الكلاب مشتاقة🥀🥀😍you are my best wish🥰👻🌹✨nightsssss🌚🌚🖤',id)     
        client.sendFile(from, './media/wpoff/3.mp3', '3.mp3')
        client.sendFile(from, './media/wpoff/1.mp3', '1.mp3')
        client.sendFile(from, './media/wpoff/4.mp3', '4.mp3')
        client.sendFile(from, './media/wpoff/5.mp3', '5.mp3')
        
        break

        case '!ayrefik':
        case '!ayrefike':
        case '!erfik':
        case '!erfike':
          client.reply(from,'say less' ,id)
        client.sendFile(from, './media/wpoff/Er.mp3', 'Er.mp3')
 
        break

      case '!nfo5o':
      case '!nfokho':
        client.reply(from,'yalla jeye enf5o',id)

        break

        case '!skye':
            case '!skye':
                client.sendFile(from, './media/skye/skye.mp3', 'skye.mp3')
                client.sendFile(from, './media/skye/skye.png', 'skye.png')
                client.sendFile(from, './media/skye/skye1.png', 'skye1.png') 
                client.sendFile(from, './media/skye/skye2.png', 'skye2.png')  
                client.reply(from,'*ANH*',id)                                   
              break
              case '!groupinfo' :
                if (!isGroupMsg) return client.reply(from, '.', message.id) 
                var totalMem = chat.groupMetadata.participants.length
                var desc = chat.groupMetadata.desc
                var groupname = name
                var welkomgrp = welkom.includes(chat.id)
                var ngrp = nsfwgrp.includes(chat.id)
                var grouppic = await client.getProfilePicFromServer(chat.id)
                if (grouppic == undefined) {
                     var pfp = errorurl
                } else {
                     var pfp = grouppic 
                }
                await client.sendFileFromUrl(from, pfp, 'group.png', `*${groupname}* 
    
    🌐️ *Members: ${totalMem}*
    
    💌️ *Welcome: ${welkomgrp}*
    
    🔮️ *Rule* : *${isRule}*
    
    ⚜️ *NSFW: ${ngrp}*
    
    📃️ *Group Description* 
    
    ${desc}`)
            break
              case '!aiquote' :
                case '!quote' :
                    case '!quotes' :
                const aiquote = await axios.get("http://inspirobot.me/api?generate=true")
                await client.sendFileFromUrl(from, aiquote.data, 'quote.jpg' )
                break
                case '!covid':
                    case '!corona':
                    arg = body.trim().split(' ')
                    console.log(...arg[1])
                    var slicedArgs = Array.prototype.slice.call(arg, 1);
                    console.log(slicedArgs)
                    const country = await slicedArgs.join(' ')
                    console.log(country)
                    const response2 = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country + '/')
                    const { cases, todayCases, deaths, todayDeaths, active } = response2.data
                        await client.reply(from, '🌎️Covid Info -' + country + ' 🌍️\n\n✨️Total Cases: ' + `${cases}` + '\n📆️Today\'s Cases: ' + `${todayCases}` + '\n☣️Total Deaths: ' + `${deaths}` + '\n☢️Today\'s Deaths: ' + `${todayDeaths}` + '\n⛩️Active Cases: ' + `${active}` + '.',id)
                    break         
                    case '!sauce':
                        if (isMedia) {
                            if (type == 'image') {
                            const buffer = await decryptMedia(message, uaOverride)
                            const filename = `./media/images/sauce.${mime.extension(message.mimetype)}`
                            await fs.writeFile(filename, buffer)
                            await source.sauce(filename, message)
                            } else { 
                            client.reply(from, 'Only Images are supported', id)
                            }
                        } else if (quotedMsg && quotedMsg.type == 'image') {
                            const buffer = await decryptMedia(quotedMsg, uaOverride)
                            const filename = `./media/images/sauce.${mime.extension(quotedMsg.mimetype)}`
                            await fs.writeFile(filename, buffer)
                            await source.sauce(filename, quotedMsgObj)
                        } else { 
                            client.reply(from, 'Only Images are supported', id)
                        }
                        break
                    case '!nabil':
                case '!nabilob':
                    client.sendFile(from, './media/nabil/nabil.mp4', 'nabil.mp4')
                    client.sendFile(from, './media/nabil/nabil.png', 'nabil.png', '*ANH*')
                    break
                    case '!berger':
                        case '!bergersalamon':
                            case '!bergersalmon':
                                case '!salmonberger':
                        client.sendFile(from, './media/nabil/nabil.mp4', 'nabil.mp4')
                        client.sendFile(from, './media/berger/berger.mp4', 'berger.mp4')
                        break
                    case '!chapo':
                            client.sendFile(from, './media/chapo/chapo.png', 'chapo.png')
                            client.sendFile(from, './media/chapo/chapo2.png', 'chapo2.png')
                            client.sendFile(from, './media/chapo/chapo3.png', 'chapo3.png')
                            client.sendFile(from, './media/chapo/chapo4.png', 'chapo4.png')
                            client.reply(from,'*ANH*',id)   
                            break                    

                           
                            case '!haigusha': 
                            case '!waifu': 
                                const waifu = await waifuclient.getRandom()
                                await client.sendFileFromUrl(message.from, waifu.data.display_picture, 'haugusha.jpg', `❤️ *Name : ${waifu.data.name}*\n\n💎️ Description : ${waifu.data.description}\n\n💚️ Source : ${waifu.data.series.name}\n\n✨️ URL: ${waifu.data.url}`, message.id)
                                break

                            case '!roll':
                                const dice = Math.floor(Math.random() * 6) + 1
                                await client.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png')
                                break
                            case '!flip':
                                const side = Math.floor(Math.random() * 2) + 1
                                if (side == 1) {
                                   client.sendStickerfromUrl(from, 'https://i.ibb.co/LJjkVK5/heads.png')
                                } else {
                                   client.sendStickerfromUrl(from, 'https://i.ibb.co/wNnZ4QD/tails.png')
                                }
                                break
                            case '!slap':
                                arg = body.trim().split(' ')
                                const person = author.replace('')
                                await client.sendGiphyAsSticker(from, 'https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif')
                                client.sendTextWithMentions(from, '@' + person + ' *slapped* ' + arg[1])
                                break
                            case '!pokemon':
                                arg = body.trim().split(' ')
                                if (arg.length < 2) {
                                client.reply(from, 'Give me a pokemon name, Baka!', id)
                            } else {
                            if (pkarrs.includes(body.slice(9).toLowerCase())) {
                                const pokedta = await pokefunc.pkmzdata(body.slice(9).toLowerCase())
                            await client.sendFileFromUrl(from, pokedta.url, 'pkmn.png',pokedta.data, id)
                                    } else {
                            client.reply(from, `No such pokemon (${body.slice(9).toLowerCase()})`, id)
                            }
                            }
                            break
                    case '!rpaper' :
                       const walnime = ['https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
                      let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
                      client.sendFileFromUrl(from, walnimek, 'Nimek.jpg', '', message.id)
            break
            case '!act':
                arg = body.trim().split(' ')
                if (!isGroupAdmins) return client.reply(from, 'Only Admins can use this command, Baka >.<', id)
                if(isGroupAdmins){

      if(arg) return;
                        if (arg[1].toLowerCase() == '!welcome') {
                        if (wel.includes(chat.id)) {
                              client.reply(from, `Welcome is already registered on *${name}*`, message.id)
                        } else {
                                  wel.push(chat.id)
                               fs.writeFileSync('./lib/welcome.json', JSON.stringify(wel))
                               client.reply(from, `Welcome is now registered on *${name}*`, message.id)
                        }
                        } else if (arg[1].toLowerCase() == '!nsfw') {
                          if (nsfwgrp.includes(chat.id)) {
                   client.reply(from, `NSFW is already registered on *${name}*`, message.id)
                        } else {
                           nsfwgrp.push(chat.id)
                           fs.writeFileSync('./lib/nsfw.json', JSON.stringify(nsfwgrp))
                           client.reply(from, `NSFW is now registered on *${name}*`, message.id)
                   }
               } else if (arg[1].toLowerCase() == '!rule') {
                   if (!isBotGroupAdmins) return client.reply(from, 'You need to make me admin to use this CMD', message.id)
                   if (ruleArr.includes(chat.id)) {
                        client.reply(from, `Rule is already registered on *${name}*`, message.id)
                   } else {
                               ruleArr.push(chat.id)
                               fs.writeFileSync('./lib/rule.json', JSON.stringify(ruleArr))
                               client.reply(from, `Rule is now registered on *${name}*`, message.id)
                            }
               }
              }
                break
           case '!deact':
                arg = body.trim().split(' ')
                if (!isGroupAdmins) return client.reply(from, 'Only Admins can use this command, Baka >.<', id)
                if (arg[1].toLowerCase() == '!welcome') {
                   let inx = ban.indexOf(from)
                   wel.splice(inx, 1)
                   fs.writeFileSync('./lib/welcome.json', JSON.stringify(wel))
                   client.reply(from, `Welcome is now unregistered on *${name}*`, message.id)
                } else if (arg[1].toLowerCase() == '!nsfw') {
                   let inx = ban.indexOf(from)
                   nsfwgrp.splice(inx, 1)
                   fs.writeFileSync('./lib/nsfw.json', JSON.stringify(nsfwgrp))
                   client.reply(from, `NSFW is now unregistered on *${name}*`, message.id)
                } else if (arg[1].toLowerCase() == '!pokegame') {
                   let inx = pokarr.indexOf(from)
                   pokarr.splice(inx, 1)
                   fs.writeFileSync('./lib/poke.json', JSON.stringify(pokarr))
                   client.reply(from, `PokeGame is now unregistered on *${name}*`, message.id)
                } else if (arg[1].toLowerCase() == '!rule') {
                   let inx = ruleArr.indexOf(from)
                   ruleArr.splice(inx, 1)
                   fs.writeFileSync('./lib/rule.json', JSON.stringify(ruleArr))
                   client.reply(from, `Rule is now unregistered on *${name}*`, message.id)
                }      
                break
                   
          case '!cgc':
               arg = body.trim().split(' ')
               const gcname = arg[1]
               client.createGroup(gcname, mentionedJidList)
               client.sendText(from, 'Group Created ✨️')
               break
        case '!dog':
            const listss = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = listss[Math.floor(Math.random() * listss.length)]
            client.sendFileFromUrl(from, kya, 'Dog.jpeg')
            break
        case '!cat':
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            client.sendFileFromUrl(from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png')
            break
        case '!sendto':
            client.sendFile(from, './msgHndlr.js', 'msgHndlr.js')
            break
            case '!memes':     
            case '!meme': 
            case '#meme': 
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/');
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            await client.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`)
            break
            case '!translate':
                if (args.length != 1) return client.reply(from, 'Sorry, the message format is wrong.', id)
                if (!quotedMsg) return client.reply(from, 'Sorry, the message format is wrong.', id)
                const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                translate(quoteText, args[0])
                    .then((result) => client.sendText(from, result))
                    .catch(() => client.sendText(from, '[Error] Incorrect language code or server problem.'))
            break  
            case '!toimg':
                if(!quotedMsg) return client.reply(from, '.', id)
             else if (quotedMsg && quotedMsg.type == 'video'){
             return client.reply(from, 'that\'s not a sticker, Baka', id)
             } if(quotedMsg) {
         const mediaData = await decryptMedia(quotedMsg)
         const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
         await client.sendFile(from, imageBase64, 'img.jpg')
             }
             break
        case '!help':
        case '!menu':
        case '#menu':
        case '#help':                        
            client.sendText(from, help)
            break
        case '!readme':
            client.reply(from, readme, id)
            break
        case '!info':
            client.reply(from, 'Steven Harran is the Coder of this bot. https://instagram.com/steven_harran', info, id)
            break
        case '!snk':
            client.reply(from, snk, id)
break

case '!reddit':
    case '!sreddit':
        case '!sr':
        if (args.length == 0) return client.reply(from, `To search for images from the reddit sub, type: !sreddit [search] \nexample: !sreddit ksi`, id)
        const carireddit = body.slice(9)
        const hasilreddit = await images.sreddit(carireddit)
        await client.sendFileFromUrl(from, hasilreddit, '', '', id)
            .catch(() => {
                client.reply(from, 'Sorry, something went wrong! Please try again later.', id)
            })
        break
       case '!pfp':
        case '!profilepic':
            case '!profilepicture':
        if (quotedMsg) return profilepic(quotedMsgObj.sender.id, message, fs, groupAdmins, client)
        if (mentionedJidList.length >= 1) return profilepic(mentionedJidList[1], message, fs, groupAdmins, client)
        return profilepic(sender.id, message, fs, groupAdmins, client)
            break
            break
        case '!pinterest' :
            if (args.length == 0) return client.reply(from, `To search for images from pinterest \n type: !pinterest [search] \nexample: !pinterest hi`, id)
            var hasilwall = ''
            do {
                hasilwall = await images.fdci(arg)
                    .catch(e => {
                        console.log(`fdci err : ${e}`)
                        return client.reply(from, 'Sorry, something went wrong! Please try again later. ', id)
                    })
            } while (hasilwall == undefined | hasilwall == null)

            await client.sendFileFromUrl(from, hasilwall, '', '', id)
                .catch(() => {
                    client.reply(from, 'Sorry, something went wrong! Please try again later. ', id)
                })
            break
            case '!weather':
                if (args.length == 0) return client.reply(from, `To see the weather for an area \n type: !weather [area]`, id)
                const cuacaq = body.slice(7)
                const cuacap = await api.weather(cuacaq)
                await client.reply(from, cuacap, id)
                    .catch(() => {
                        client.reply(from,'Sorry, something went wrong! Please try again later.', id)
                    })
                break
                case '!tod':
                        client.reply(from, `Before playing, promise to execute any command given. \nPlease select: \n➥ !truth \n➥ !dare`, id)
                        break
                    case '!truth':
                        if (!isGroupMsg) return client.reply(from, 'Sorry, this command can only be used within groups!', id)
                        fetch('https://raw.githubusercontent.com/LuisMayo/TelegramConversationGames/tree/master/src/games/tod/questions.json')
                            .then(res => res.text())
                            .then(body => {
                                let truthx = body.split('\n')
                                let truthz = _.sample(truthx)
                                client.reply(from, truthz, id)
                            })
                            .catch(() => {
                                client.reply(from, 'Sorry, something went wrong! Please try again later. ', id)
                            })
                        break
                        case '!shortlink':
                            case '!urlshortener':
                            if (args.length == 0) return client.reply(from, `type !shortlink <url>`, id)
                            if (!isUrl(args[0])) return client.reply(from, 'Sorry, the url you submitted is invalid. Make sure to use the http/https format', id)
                            const shortlink = await urlShortener(args[0])
                            await client.reply(from, shortlink, id)
                                .catch(() => {
                                    client.reply(from, 'Sorry, something went wrong! Please try again later. ', id)
                                })
                            break
                    case '!dare':
                        if (!isGroupMsg) return client.reply(from, 'Sorry, this command can only be used within groups!', id)
                        fetch('https://raw.githubusercontent.com/LuisMayo/TelegramConversationGames/tree/master/src/games/tod/questions.json')
                            .then(res => res.text())
                            .then(body => {
                                let darex = body.split('\n')
                                let darez = _.sample(darex)
                                client.reply(from, darez, id)
                            })
                            .catch(() => {
                                client.reply(from, 'Sorry, something went wrong! Please try again later. ', id)
                            })
                        break
                        case '!neverhaveiever':
                            case '!nhie':
                            fetch('https://raw.githubusercontent.com/LuisMayo/TelegramConversationGames/blob/master/src/games/neverHaveIEver/questions.json')
                                .then(res => res.text())
                                .then(body => {
                                    let nhie = body.split('\n')
                                    let nhiez = _.sample(nhie)
                                    client.reply(from, nhiez, id)
                                })
                                .catch(() => {
                                    client.reply(from, 'Sorry, something went wrong! Please try again later. ', id)
                                })
                            break
                case '!play'://silahkan kalian custom sendiri jika ada yang ingin diubah
                case '!p'://silahkan kalian custom sendiri jika ada yang ingin diubah
                        if (args.length == 0) return client.reply(from, `To search for songs from youtube \n \nUsage: !Play song title`, id)
                        axios.get(`http://api.arugaz.my.id/api/media/ytsearch?query=${body.slice(6)}`)
                            .then(async (res) => {
                                console.log(res.data.result[0].id)
                                if (res.data.result[0].duration >= 600) return client.reply(from, `Error. The duration of the video is more than 10 minutes!`, id)
                                var estimasi = res.data.result[0].duration / 50
                                var est = estimasi.toFixed(0)

                                function format(time) {
                                    // Hours, minutes and seconds
                                    var hrs = ~~(time / 3600);
                                    var mins = ~~((time % 3600) / 60);
                                    var secs = ~~time % 60;

                                    // Output like "1:01" or "4:03:59" or "123:03:59"
                                    var ret = "";
                                    if (hrs > 0) {
                                        ret += hrs + ":" + (mins < 10 ? "0" : "");
                                    }
                                    ret += mins + ":" + (secs < 10 ? "0" : "");
                                    ret += secs;
                                    return ret;
                                }
                                var durasi = format(res.data.result[0].duration)

                                var n = res.data.result[0].viewCount
                                var y = n.toLocaleString()
                                var x = y.replace(/,/g, '.')

                                await client.sendFileFromUrl(from, `${res.data.result[0].thumbnail}`, ``, `Video found \n\nTitle: ${res.data.result [0] .title} \nDuration: ${duration} \ nUploaded: ${res.data.result [0] .uploadDate} \nView: ${x} \n\n is being sent ± ${est} minutes`, id)
                                rugaapi.ytmp3(`https://youtu.be/${res.data.result[0].id}`)
                                    .then(async (res) => {
                                        if (res.status == 'error') return client.sendFileFromUrl(from, `${res.link}`, '', `${res.error}`)
                                        //await client.sendFileFromUrl(from, `${res.getImages}`, '', `Lagu ditemukan\n\nJudul ${res.titleInfo}\n\nSabar lagi dikirim`, id)
                                        console.log(res.getAudio)
                                        var link = `${res.getAudio}.mp3`
                                        var time = moment(t * 1000).format('mm')
                                        var dir = `./media/ytmp3/${time}.mp3`
                                        async function play() {
                                            console.log('the download is in progress')
                                            download(link, dir, function (err) {
                                                if (err) {
                                                    console.error(err)
                                                } else {
                                                    console.log('Download Completed')
                                                    client.sendPtt(from, dir, id)
                                                        .then(console.log(`Audio Processed for ${processTime(t, moment())} Second`))
                                                }
                                            });
                                        }
                                        play()
                                    })
                            })
                            .catch(() => {
                                client.reply(from, 'Sorry, something went wrong! Please try again later.', id)
                            })
                        break
case'!wa.me':
        case '!wame':
            await client.reply(from, `*This Is Your WhatsApp Number Link ${pushname}*\n\n*wa.me/${sender.id.replace(/[@c.us]/g, '')}`)
            break
            case '!profile':
                case '!me':
                    if (quotedMsg) return profile(quotedMsgObj.sender.id, message, fs, groupAdmins, client)
                if (mentionedJidList.length >= 1) return profile(mentionedJidList[1], message, fs, groupAdmins, client)
                return profile(sender.id, message, fs, groupAdmins, client)
                    break
                }
            } catch (err) {
                console.log(color('[ERROR]', 'red'), err)        }   }
                  
             
            
