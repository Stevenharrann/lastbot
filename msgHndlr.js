/*
* "Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
* Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
* (QS ash-Shaff: 2-3).
*/
const db = require('quick.db')
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

        const mess ={
            wait: '[WAIT] In progress⏳ please wait a moment',
            error: {
                St: '[❗] Send images with the caption *! Sticker * or tagged images that have been sent',
                Qm: '[❗] An error occurred, maybe the theme is not available!',
                Ig: '[❗] An error occurred, maybe because the account is private',
                Ki: ` [❗] Bot can't take out the group admin!`,
                Ad: `[❗] Cannot add target, maybe because it's private`,
                Iv: '[❗] The link you submitted is invalid!'
            }
        }
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
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

        let steven = db.get(`nsfw_${chat.id}`)
        let isNsfw = false
        if(steven === true) isNsfw = true


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


            if (type === 'video') return client.reply(from, `Media that is submitted must be an image, for video use !stickergif or !sgif.`, id)
            if (isMedia && type === 'image') {
                const _metadata = (args[0] === 'crop') ? stickerMetadataCrop : stickerMetadata
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64,_metadata)
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


            if (isMedia) {
                if (type === 'image') return client.reply(from, `Media sent must be video/gif, for images use !sticker.`, id)
                if (mimetype === 'video/mp4' && message.duration <= 10 || isQuotedVideo && isQuotedVideo.duration <= 10|| quotedMsg.mimetype === 'video/mp4' && quotedMsg.duration <= 10) {
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
            if (!isNsfw == false) return
            client.reply(from, '1. *!hentai*\n2. *!porn*\n3. *!sexy*\n4. *!nudes*', id)
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
         case '!wyd':
            case '!wouldyourather':
                const number78 = Math.floor(Math.random() * 100) + 1;
          if(number78 === 1){      client.reply(from, 'Would you rather go into the past and meet your ancestors or go into the future and meet your great-great grandchildren?',id);
        } else  if(number78 === 2){      client.reply(from, 'Would you rather have more time or more money?',id);
        } else  if(number78 === 3){      client.reply(from, 'Would you rather have a rewind button or a pause button on your life?',id);
        } else  if(number78 === 4){      client.reply(from, 'Would you rather be able to talk with the animals or speak all foreign languages?',id);
        } else  if(number78 === 5){      client.reply(from, 'Would you rather win the lottery or live twice as long?',id);
        } else  if(number78 === 6){      client.reply(from, 'Would you feel worse if no one showed up to your wedding or to your funeral?',id);
        } else  if(number78 === 7){      client.reply(from, 'Would you rather be without internet for a week, or without your phone?',id);
        } else  if(number78 === 8){      client.reply(from, 'Would you rather meet George Washington, or the current President?',id);
        } else  if(number78 === 9){      client.reply(from, 'Would you rather lose your vision or your hearing?',id);
        } else  if(number78 === 10){      client.reply(from, 'Would you rather work more hours per day, but fewer days or work fewer hours per day, but more days?',id);
        } else  if(number78 === 11){      client.reply(from, 'Would you rather listen to music from the 70’s or music from today?',id);
        } else  if(number78 === 12){      client.reply(from, 'Would you rather become someone else or just stay you?',id);
        } else  if(number78 === 13){      client.reply(from, 'Would you rather be Batman or Spiderman?',id);
        } else  if(number78 === 14){      client.reply(from, 'Would you rather be stuck on a broken ski lift or in a broken elevator?',id);
        } else  if(number78 === 15){      client.reply(from, 'For your birthday, would you rather receive cash or gifts?',id);
        } else  if(number78 === 16){      client.reply(from, 'Would you rather go to a movie or to dinner alone?',id);
        } else  if(number78 === 17){      client.reply(from, 'Would you rather always say everything on your mind or never speak again?',id);
        } else  if(number78 === 18){      client.reply(from, 'Would you rather make a phone call or send a text?',id);
        } else  if(number78 === 19){      client.reply(from, 'Would you rather read an awesome book or watch a good movie?',id);
        } else  if(number78 === 20){      client.reply(from, 'Would you rather be the most popular person at work or school or the smartest?',id);
        } else  if(number78 === 21){      client.reply(from, 'Would you rather put a stop to war or end world hunger?',id);
        } else  if(number78 === 22){      client.reply(from, 'Would you rather spend the night in a luxury hotel room or camping surrounded by beautiful scenery?',id);
        } else  if(number78 === 23){      client.reply(from, 'Would you rather explore space or the ocean?',id);
        } else  if(number78 === 24){      client.reply(from, 'Would you rather go deep sea diving or bungee jumping?',id);
        } else  if(number78 === 25){      client.reply(from, 'Would you rather be a kid your whole life or an adult your whole life?',id);
        } else  if(number78 === 26){      client.reply(from, 'Would you rather go on a cruise with friends or with your spouse?',id);
        } else  if(number78 === 27){      client.reply(from, 'Would you rather lose your keys or your cell phone?',id);
        } else  if(number78 === 28){      client.reply(from, 'Would you rather eat a meal of cow tongue or octopus?',id);
        } else  if(number78 === 29){      client.reply(from, 'Would you rather have x-ray vision or magnified hearing?',id);
        } else  if(number78 === 30){      client.reply(from, 'Would you rather work in a group or work alone?',id);
        } else  if(number78 === 31){      client.reply(from, 'Would you rather be stuck on an island alone or with someone who talks incessantly?',id);
        } else  if(number78 === 32){      client.reply(from, 'Would you rather be too hot or too cold?',id);
        } else  if(number78 === 33){      client.reply(from, 'When you’re old, would you rather die before or after your spouse?',id);
        } else  if(number78 === 34){      client.reply(from, 'Would you rather have a cook or a maid?',id);
        } else  if(number78 === 35){      client.reply(from, 'Would you rather be the youngest or the oldest sibling?',id);
        } else  if(number78 === 36){      client.reply(from, 'Would you rather get rich through hard work or through winning the lottery?',id);
        } else  if(number78 === 37){      client.reply(from, 'Would you rather have a 10-hour dinner with a headstrong politician from an opposing party, or attend a 10-hour concert for a music group you detest?',id);
        } else  if(number78 === 38){      client.reply(from, 'Would you rather be an Olympic gold medalist or a Nobel Peace Prize winner?',id);
        } else  if(number78 === 39){      client.reply(from, 'Would you rather have a desk job or an outdoor job?',id);
        } else  if(number78 === 40){      client.reply(from, 'Would you rather live at the top of a tall NYC apartment building or at the top of a mountain?',id);
        } else  if(number78 === 41){      client.reply(from, 'Would you rather have Rambo or The Terminator on your side?',id);
        } else  if(number78 === 42){      client.reply(from, 'Would you rather be proposed to in private or in front of family and friends?',id);
        } else  if(number78 === 43){      client.reply(from, 'Would you rather have to sew all your clothes or grow your own food?',id);
        } else  if(number78 === 44){      client.reply(from, 'Would you rather hear the good news or the bad news first?',id);
        } else  if(number78 === 45){      client.reply(from, 'Would you rather be your own boss or work for someone else?',id);
        } else  if(number78 === 46){      client.reply(from, 'Would you rather have nosy neighbors or noisy neighbors?',id);
        } else  if(number78 === 47){      client.reply(from, 'Would you rather be on a survival reality show or dating game show?',id);
        } else  if(number78 === 48){      client.reply(from, 'Would you rather be too busy or be bored?',id);
        } else  if(number78 === 49){      client.reply(from, ' Would you rather watch the big game at home or live at the stadium.',id);
        } else  if(number78 === 50){      client.reply(from, 'Would you rather spend the day with your favorite athlete or you favorite movie star?',id);
        } else  if(number78 === 51){      client.reply(from, ' Would you rather live where it is constantly winter or where it is constantly summer?',id);
        } else  if(number78 === 52){      client.reply(from, ' Would you rather travel the US and see the sights in a motorhome or by plane?',id);
        } else  if(number78 === 53){      client.reply(from, ' Would you rather be a little late or way too early?',id);
        } else  if(number78 === 54){      client.reply(from, ' Would you rather have an unlimited gift certificate to a restaurant or a clothing store?',id);
        } else  if(number78 === 55){      client.reply(from, ' Would you rather date someone you met online or go on a blind date?',id);
        } else  if(number78 === 56){      client.reply(from, ' Would you rather your kids wear a uniform to school or clothing of their choice?',id);
        } else  if(number78 === 57){      client.reply(from, ' Would you rather have many good friends or one very best friend?',id);
        } else  if(number78 === 58){      client.reply(from, ' Would you rather live in Antarctica or the Sahara Dessert?',id);
        } else  if(number78 === 59){      client.reply(from, ' Would you rather be able to take back anything you say or hear every conversation around you?',id);
        } else  if(number78 === 60){      client.reply(from, ' Would you rather be 4’5” or 7’7”?',id);
        } else  if(number78 === 61){      client.reply(from, ' Would you rather be poor and work at a job you love, or rich and work at a job you hate?',id);
        } else  if(number78 === 62){      client.reply(from, ' Would you rather have your flight delayed by 8 hours or lose your luggage?',id);
        } else  if(number78 === 63){      client.reply(from, ' Would you rather be in your pajamas or a suit all day?',id);
        } else  if(number78 === 64){      client.reply(from, ' Would you rather have your first child when you are 18 or 40?',id);
        } else  if(number78 === 65){      client.reply(from, ' Would you rather be the star player on a losing basketball team or ride the bench on a winning one?',id);
        } else  if(number78 === 66){      client.reply(from, ' Would you rather spend the next year exempt from all taxes or have a one-month paid vacation?',id);
        } else  if(number78 === 67){      client.reply(from, ' Would you rather have the best house in a bad neighborhood or the worst house in a good neighborhood?',id);
        } else  if(number78 === 68){      client.reply(from, ' Would you rather be filthy rich and live 400 years ago or be poor but live today?',id);
        } else  if(number78 === 69){      client.reply(from, ' Would you rather be gossiped about or never talked about at all?',id);
        } else  if(number78 === 70){      client.reply(from, ' Would you rather end hunger or hatred?',id);
        } else  if(number78 === 71){      client.reply(from, ' Would you rather be an unknown major league baseball player or a famous badminton star?',id);
        } else  if(number78 === 72){      client.reply(from, ' Would you rather go without TV or junk food the rest of your life?',id);
        } else  if(number78 === 73){      client.reply(from, ' Would you rather spend the day at an amusement park or lazing on the beach?',id);
        } else  if(number78 === 74){      client.reply(from, ' Would you rather be fluent in all languages or be a master of every musical instrument?',id);
        } else  if(number78 === 75){      client.reply(from, ' Would you rather sing a song in front of complete strangers or your closest friends?',id);
        } else  if(number78 === 76){      client.reply(from, ' Would you rather own your own boat or your own plane?',id);
        } else  if(number78 === 77){      client.reply(from, ' Would you rather meet the president of the United States or a movie star?',id);
        } else  if(number78 === 78){      client.reply(from, ' Would you rather spend two weeks stuck in a psychiatric hospital or stuck in an airport?',id);
        } else  if(number78 === 79){      client.reply(from, ' If you had to give up one thing for the rest of your life, would it be brushing your hair or brushing your teeth?',id);
        } else  if(number78 === 80){      client.reply(from, ' Would you rather spend 20 years in prison and be exonerated as innocent or be put away for four years (despite your innocence) and be considered guilty forever?',id);
        } else  if(number78 === 81){      client.reply(from, ' Would you rather own a house or rent a residence?',id);
        } else  if(number78 === 82){      client.reply(from, ' Would you rather be known as a one-hit wonder for a novel or a song?',id);
        } else  if(number78 === 83){      client.reply(from, ' Would you rather take an action-packed European vacation or spend two weeks at the same Caribbean resort?',id);
        } else  if(number78 === 84){      client.reply(from, ' Would you rather be a character in an action-packed thriller or a romantic comedy?',id);
        } else  if(number78 === 85){      client.reply(from, ' Would you rather be stuck on a train or a bus?',id);
        } else  if(number78 === 86){      client.reply(from, ' Would you rather be a part of an arranged marriage or spend your life as a single person?',id);
        } else  if(number78 === 87){      client.reply(from, ' Would you rather babysit a crying infant for a day or have an unwanted houseguest for a week?',id);
        } else  if(number78 === 88){      client.reply(from, ' Would you rather be locked in an amusement park or a library?',id);
        } else  if(number78 === 89){      client.reply(from, ' Would you rather sing like an opera star or cook like a gourmet chef?',id);
        } else  if(number78 === 90){      client.reply(from, ' Would you rather have your debt forgiven or have guaranteed good health for a decade?',id);
        } else  if(number78 === 91){      client.reply(from, ' Would you rather live the rest of your life as a monk or followed continuously by paparazzi?',id);
        } else  if(number78 === 92){      client.reply(from, ' Would you rather be given a lifetime supply of delicious food or books?',id);
        } else  if(number78 === 93){      client.reply(from, ' Would you rather be able to breath underwater or fly through the air?',id);
        } else  if(number78 === 94){      client.reply(from, ' Would you rather be known for your intelligence or your good looks?',id);
        } else  if(number78 === 95){      client.reply(from, ' Would you rather eat pizza or ice cream as the only food for eternity?',id);
        } else  if(number78 === 96){      client.reply(from, ' Would you rather mentally or physically never age?',id);
        } else  if(number78 === 97){      client.reply(from, ' Would you rather change your eye color or your hair color?',id);
        } else  if(number78 === 98){      client.reply(from, ' Would you rather have the details of your financial life or your love life be made public?',id);
        } else  if(number78 === 99){      client.reply(from, ' Would you rather spend a year as a cop or a teacher in an inner-city neighborhood?',id);
        } else  if(number78 === 100){      client.reply(from, 'Would you rather have a family of 12 children or never be able to have children at all?',id);}
         break
        case "!revoke":
           
{
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
                if (mentionedJidList.length === 0) return await client.reply(from, 'Wrong format!', message.id)
                if (mentionedJidList.length >= 2) return await client.reply(from, 'One user at a time', message.id)
                if (groupAdmins.includes(mentionedJidList[0])) return await client.reply(from, 'This user is already admin', message.id)
                await client.promoteParticipant(groupId, mentionedJidList[0])
                await client.sendTextWithMentions(from, `@${mentionedJidList[0].replace('')} is now an admin`)
                break
            case '!demote':
                if(!isGroupAdmins) return client.reply(from, 'You are not an admin, Sorry', message.id)
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
                case '!share':
                    client.reply(from,'*https://wa.link/1iothp*',id)
                    break
        case '!delete':
                if (!isGroupAdmins) return client.reply(from, 'Only admins can use this command', id)
                if (!quotedMsg) return client.reply(from, 'Wrong Format!', id)
                if (!quotedMsgObj.fromMe) return client.reply(from, 'Wrong Format!', id)
                client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break 
              
            case '!mutegroup':
                if (!isGroupMsg) return client.reply(from, 'Sorry, this command can only be used within groups!', id)
                if (!isGroupAdmins) return client.reply(from, 'This command is only for group admins!', id)
                if (args[1] == 'on') {
                    client.setGroupToAdminsOnly(groupId, true).then(() => client.sendText(from, 'Successfully changed so that only admin can chat!'))
                } else if (args[1] == 'off') {
                    client.setGroupToAdminsOnly(groupId, false).then(() => client.sendText(from, 'Successfully changed so that all members can chat!'))
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
                        db.set(`nsfw_${chat.id}`, true);
    
                        client.reply(from, 'NSFW Command successfully activated in this group! send command *! nsfwMenu * to find out the menu', id)
                    } else if (args[1].toLowerCase() === 'disable') {
                        db.set(`nsfw_${chat.id}`, false);
                        client.reply(from, 'NSFW Command successfully deactivated in this group!', id)
                    } else {
                        client.reply(from, 'Select enable or disable!', id)
                    }
                    break

        
         case '!hentai':
            if (isNsfw == false) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)
                const nsfw6 = require('./lib/steven.json')
                var nsfwKey2 = Object.values(nsfw6);
                var nsfwmessage2 = nsfwKey2[Math.floor(nsfwKey2.length*Math.random())]
                console.log(nsfwmessage2)
                await client.sendFileFromUrl(from, `${nsfwmessage2}`, 'porn.jpg')
      break
         
            case '!porn':
                case '!sex':
                    console.log(!!isNsfw)
                if (isNsfw == false) return client.reply(from, 'Command / Command NSFW not activated in this group!', id) 
                    const nsfw5 = require('./lib/porn.json')
                    var nsfwKey = Object.values(nsfw5);
                    var nsfwmessage = nsfwKey[Math.floor(nsfwKey.length*Math.random())]
                    console.log(nsfwmessage)
                    await client.sendFileFromUrl(from, `${nsfwmessage}`, 'hentai.jpg')
          break

    
              const nsfw999 = require('./lib/wyd.json')
              var nsfwKey66 = Object.values(nsfw999);
              var nsfwmessage999 = nsfwKey66[Math.floor(nsfwKey66.length*Math.random())]
              console.log(nsfwmessage999)
              await client.sendFileFromUrl(from, `${nsfwmessage999}`, 'wyd.jpg')
    break
          case '!drawings':
                 const nsfw88 = require('./lib/drawings.json')
                 var nsfwKey88 = Object.values(nsfw88);
                 var nsfwmessage88 = nsfwKey88[Math.floor(nsfwKey88.length*Math.random())]
                 console.log(nsfwmessage88)
                 await client.sendFileFromUrl(from, `${nsfwmessage88}`, 'drawings.jpg')
       break

       case '!sexy':
        case '!nudes':
        if (isNsfw == false) return client.reply(from, 'Command / Command NSFW not activated in this group!', id)
             const nsfw888 = require('./lib/sexy.json')
             var nsfwKey888 = Object.values(nsfw888);
             var nsfwmessage888 = nsfwKey888[Math.floor(nsfwKey888.length*Math.random())]
             console.log(nsfwmessage888)
             await client.sendFileFromUrl(from, `${nsfwmessage888}`, 'sexy.jpg')
   break
                case '!maths':                
                case '!math':
                const maths =  './lib/maths.js'
                client.reply(maths, id)
                console.log(maths)

                    break
                    
                case '!discordserver':
                client.reply(from, 'https://discord.gg/QnjaRU6DcZ',id)
           

                    
            break



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
        case '!donate' :
         case '!donation' :
        client.reply(from,'*https://helplebanon.carrd.co* \n*https://supportlrc.app/donate*',id) 
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
                client.sendFile(from, './media/skye/skye.mp3')
                client.sendImageAsSticker(from, './media/skye/skye.png', stickerMetadata)
                client.sendImageAsSticker(from, './media/skye/skye1.png', stickerMetadata) 
                client.sendImageAsSticker(from, './media/skye/skye2.png', stickerMetadata)  
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
                            client.sendImageAsSticker(from, './media/chapo/chapo.png',stickerMetadata)
                            client.sendImageAsSticker(from, './media/chapo/chapo2.png', stickerMetadata)
                            client.sendImageAsSticker(from, './media/chapo/chapo3.png', stickerMetadata)
                            client.sendImageAsSticker(from, './media/chapo/chapo4.png', stickerMetadata)
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
                                const person = author.replace('', '')
                                await client.sendGiphyAsSticker(from, 'https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif')
                                client.sendTextWithMentions(from, '@' + person  + ' *slapped* ' + arg[1])
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
            case '!sheeesh':
                case '!sheesh':
                    case '!sheeeesh':
                        case 'sheeesh':
                            case '!sheesh':
                                client.sendFile(from, './media/sheesh.mp3')
                                client.reply(from, '*SHEESH*', id)
                                break
                                case '!happybirthday':
                                    case 'happy birthday':
                                        case '!happybday':
                                            case '!birthday':
                                                case '!bday':
                                    client.sendFile(from, './media/BDAY.mp3')
                                    client.reply(from, '*Happy Birthday to You, cha, cha, cha.* \n*Happy Birthday to You, cha, cha, cha.* \n*Happy Birthday Dear ...* \n*Happy Birthday to You, cha, cha, cha.*', id)
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
                case '!tod':
                        client.reply(from, `Before playing, promise to execute any command given. \nPlease select: \n➥ !truth \n➥ !dare`, id)
                        break
                    case '!truth':
                        const number778 = Math.floor(Math.random() * 430) + 1;
                    if(number778 === 1){      client.reply(from, "If you could be invisible, what is the first thing you would do?",id);
                } else  if(number778 === 2){      client.reply(from, "What is a secret you kept from your parents?",id);
                } else  if(number778 === 3){      client.reply(from, "What is the most embarrassing music you listen to?",id);
                } else  if(number778 === 4){      client.reply(from, "What is one thing you wish you could change about yourself?",id);
                } else  if(number778 === 5){      client.reply(from, "Who is your secret crush?",id);
                } else  if(number778 === 6){      client.reply(from, "Who is the last person you creeped on social media?",id);
                } else  if(number778 === 7){      client.reply(from, "When was the last time you wet the bed?",id);
                } else  if(number778 === 8){      client.reply(from, "If a genie granted you three wishes, what would you ask for?",id);
                } else  if(number778 === 9){      client.reply(from, "What is your biggest regret?",id);
                } else  if(number778 === 10){      client.reply(from, "Where is the weirdest place you've ever gone to the bathroom?",id);
                } else  if(number778 === 11){      client.reply(from, "",id);
                } else  if(number778 === 12){      client.reply(from, "What is the most food you've ever eaten in a single sitting?",id);
                } else  if(number778 === 13){      client.reply(from, "Which player would survive a zombie apocalypse and which would be the first to go?",id);
                } else  if(number778 === 14){      client.reply(from, "Reveal all the details of your first kiss.",id);
                } else  if(number778 === 15){      client.reply(from, "What excuse have you used before to get out plans with a friend?",id);
                } else  if(number778 === 16){      client.reply(from, "What's the longest you've ever slept?",id);
                } else  if(number778 === 17){      client.reply(from, "Read the last thing you sent your best friend or significant other out loud.",id);
                } else  if(number778 === 18){      client.reply(from, "What's your biggest pet peeve?",id);
                } else  if(number778 === 19){      client.reply(from, "When was the last time you lied?",id);
                } else  if(number778 === 20){      client.reply(from, "What are five things would you bring to a desert island?",id);
                } else  if(number778 === 21){      client.reply(from, "What's the most embarrassing thing you ever did on a date?",id);
                } else  if(number778 === 22){      client.reply(from, "What is the craziest pickup line you've ever used?",id);
                } else  if(number778 === 23){      client.reply(from, "What animal do you think you most look like?",id);
                } else  if(number778 === 24){      client.reply(from, "How many selfies do you take a day?",id);
                } else  if(number778 === 25){      client.reply(from, "What is one thing you would stand in line for an hour for?",id);
                } else  if(number778 === 26){      client.reply(from, "When was the last time you cried?",id);
                } else  if(number778 === 27){      client.reply(from, "What's the longest time you've ever gone without showering?",id);
                } else  if(number778 === 28){      client.reply(from, "What's the most embarrassing top-played song on your phone?",id);
                } else  if(number778 === 29){      client.reply(from, "What was your favorite childhood show?",id);
                } else  if(number778 === 30){      client.reply(from, "If you could be a fictional character for a day, who would you choose?",id);
                } else  if(number778 === 31){      client.reply(from, "What's your biggest fear?",id);
                } else  if(number778 === 32){      client.reply(from, "What's one silly thing you can't live without?",id);
                } else  if(number778 === 33){      client.reply(from, "What is the weirdest trend you've ever participated in?",id);
                } else  if(number778 === 34){      client.reply(from, "If you could only listen to one song for the rest of your life, what would you choose?",id);
                } else  if(number778 === 35){      client.reply(from, "What person do you text the most?",id);
                } else  if(number778 === 36){      client.reply(from, "Have you ever been fired from a job?",id);
                } else  if(number778 === 37){      client.reply(from, "What is an instant deal breaker in a potential love interest?",id);
                } else  if(number778 === 38){      client.reply(from, "If you could only eat one thing for the rest of your life, what would you choose?",id);
                } else  if(number778 === 39){      client.reply(from, "What is the biggest lie you ever told your parents?",id);
                } else  if(number778 === 40){      client.reply(from, "What's the worst physical pain you've ever experienced?",id);
                } else  if(number778 === 41){      client.reply(from, "Which player knows you the best?",id);
                } else  if(number778 === 42){      client.reply(from, "What's your favorite part of your body?",id);
                } else  if(number778 === 43){      client.reply(from, "What's the weirdest thing you've ever eaten?",id);
                } else  if(number778 === 44){      client.reply(from, "Have you ever gone skinny dipping?",id);
                } else  if(number778 === 45){      client.reply(from, "Tell us about the worst date you've ever been on?",id);
                } else  if(number778 === 46){      client.reply(from, "Who is your celebrity crush?",id);
                } else  if(number778 === 47){      client.reply(from, "What's the strangest dream you've ever had?",id);
                } else  if(number778 === 48){      client.reply(from, "What are the top three things you look for in a boyfriend/girlfriend?",id);
                } else  if(number778 === 49){      client.reply(from, "What is your worst habit?",id);
                } else  if(number778 === 50){      client.reply(from, "How many stuffed animals do you own?",id);
                } else  if(number778 === 51){      client.reply(from, "What is your biggest insecurity?When was the last time you lied?",id);
                } else  if(number778 === 52){      client.reply(from, "When was the last time you cried?",id);
                } else  if(number778 === 53){      client.reply(from, "What's your biggest fear?",id);
                } else  if(number778 === 54){      client.reply(from, "What's your biggest fantasy?",id);
                } else  if(number778 === 55){      client.reply(from, "Do you have any fetishes?",id);
                } else  if(number778 === 56){      client.reply(from, "What's something you're glad your mum doesn't know about you?",id);
                } else  if(number778 === 57){      client.reply(from, "Have you ever cheated on someone?",id);
                } else  if(number778 === 58){      client.reply(from, "What's the worst thing you've ever done?",id);
                } else  if(number778 === 59){      client.reply(from, "What's a secret you've never told anyone?",id);
                } else  if(number778 === 60){      client.reply(from, "Do you have a hidden talent?",id);
                } else  if(number778 === 61){      client.reply(from, "Who was your first celebrity crush?",id);
                } else  if(number778 === 62){      client.reply(from, "What are your thoughts on polyamory?",id);
                } else  if(number778 === 63){      client.reply(from, "What's the worst intimate experience you've ever had?",id);
                } else  if(number778 === 64){      client.reply(from, "What's the best intimate experience you've ever had?",id);
                } else  if(number778 === 65){      client.reply(from, "Have you ever cheated in an exam?",id);
                } else  if(number778 === 66){      client.reply(from, "What's the most drunk you've ever been?",id);
                } else  if(number778 === 67){      client.reply(from, "Have you ever broken the law?",id);
                } else  if(number778 === 68){      client.reply(from, "What's the most embarrassing thing you've ever done?",id);
                } else  if(number778 === 69){      client.reply(from, "What's your biggest insecurity?",id);
                } else  if(number778 === 70){      client.reply(from, "Have you ever stayed friends with someone because it benefitted you beyond just the friendship?",id);
                } else  if(number778 === 71){      client.reply(from, "What's the biggest mistake you've ever made?",id);
                } else  if(number778 === 72){      client.reply(from, "What's the most disgusting thing you've ever done?",id);
                } else  if(number778 === 73){      client.reply(from, "Who would you like to kiss in this group?",id);
                } else  if(number778 === 74){      client.reply(from, "What's one thing you hate people knowing about you?",id);
                } else  if(number778 === 75){      client.reply(from, "What's the worst thing anyone's ever done to you?",id);
                } else  if(number778 === 76){      client.reply(from, "What's the best thing anyone's ever done for you?",id);
                } else  if(number778 === 77){      client.reply(from, "Have you ever had a run in with the law?",id);
                } else  if(number778 === 78){      client.reply(from, "What's your worst habit?",id);
                } else  if(number778 === 79){      client.reply(from, "What's the most embarrassing thing you've done in a taxi?",id);
                } else  if(number778 === 80){      client.reply(from, "What's the worst thing you've ever said to anyone?",id);
                } else  if(number778 === 81){      client.reply(from, "Have you ever peed in the shower?",id);
                } else  if(number778 === 82){      client.reply(from, "What's the strangest dream you've had?",id);
                } else  if(number778 === 83){      client.reply(from, "Have you ever been caught doing something you shouldn't have?",id);
                } else  if(number778 === 84){      client.reply(from, "What's the worst date you've been on?",id);
                } else  if(number778 === 85){      client.reply(from, "What's the best date you've been on?",id);
                } else  if(number778 === 86){      client.reply(from, "What happened on the latest night out you've ever had?",id);
                } else  if(number778 === 87){      client.reply(from, "What's your biggest regret?",id);
                } else  if(number778 === 88){      client.reply(from, "What's the biggest misconception about you?",id);
                } else  if(number778 === 89){      client.reply(from, "Have you ever said something you regret about someone in this group?",id);
                } else  if(number778 === 90){      client.reply(from, "What's one thing you wish people knew about you?",id);
                } else  if(number778 === 91){      client.reply(from, "Where's the weirdest place you've had sex?",id);
                } else  if(number778 === 92){      client.reply(from, "Why did your last relationship break down?",id);
                } else  if(number778 === 93){      client.reply(from, "Have you ever lied to get out of a bad date?",id);
                } else  if(number778 === 94){      client.reply(from, "What's the most trouble you've been in?",id);
                } else  if(number778 === 95){      client.reply(from, "When did you last have sex outside?",id);
                } else  if(number778 === 96){      client.reply(from, "What's the worst thing you've lied about?",id);
                } else  if(number778 === 97){      client.reply(from, "What's one thing you wish you'd lied about?",id);
                } else  if(number778 === 98){      client.reply(from, "What's the best piece of advice you've been given?",id);
                } else  if(number778 === 99){      client.reply(from, "What's the most you've spent on a night out?",id);
                } else  if(number778 === 100){      client.reply(from, "Name a time you think you were a bad partner",id);
                } else  if(number778 === 101){      client.reply(from, "What's your guilty pleasure?",id);
                } else  if(number778 === 102){      client.reply(from, "What's one thing you only do when you're alone?",id);
                } else  if(number778 === 103){      client.reply(from, "If you had to get back with an ex, who would you choose?",id);
                } else  if(number778 === 104){      client.reply(from, "If you had to cut one friend out of your life, who would it be?",id);
                } else  if(number778 === 105){      client.reply(from, "Do you have a favourite friend?",id);
                } else  if(number778 === 106){      client.reply(from, "Do you have a favourite sibling?",id);
                } else  if(number778 === 107){      client.reply(from, "What's the strangest rumour you've heard about yourself?",id);
                } else  if(number778 === 108){      client.reply(from, "What's your biggest turn on?",id);
                } else  if(number778 === 109){      client.reply(from, "What's the silliest reason you've left a club early?",id);
                } else  if(number778 === 110){      client.reply(from, "What have you purchased that's been the biggest waste of money?",id);
                } else  if(number778 === 111){      client.reply(from, "If you could swap lives with someone in this group, who would it be?",id);
                } else  if(number778 === 112){      client.reply(from, "What was the last thing you searched for on your phone?",id);
                } else  if(number778 === 113){      client.reply(from, "If you had to choose between going naked or having your thoughts appear in thought bubbles above your head for everyone to read, which would you choose?",id);
                } else  if(number778 === 114){      client.reply(from, "Have you ever walked in on your parents doing it?",id);
                } else  if(number778 === 115){      client.reply(from, "After you've dropped a piece of food, what's the longest time you've left it on the ground and then ate it?",id);
                } else  if(number778 === 116){      client.reply(from, "Have you ever tasted a booger?",id);
                } else  if(number778 === 117){      client.reply(from, "Have you ever played Cards Against Humanity with your parents?",id);
                } else  if(number778 === 118){      client.reply(from, "What's the first thing you would do if you woke up one day as the opposite sex?",id);
                } else  if(number778 === 119){      client.reply(from, "Have you ever peed in the pool?",id);
                } else  if(number778 === 120){      client.reply(from, "Who do you think is the worst-dressed person in this group?",id);
                } else  if(number778 === 121){      client.reply(from, "Have you ever farted in an elevator?",id);
                } else  if(number778 === 122){      client.reply(from, "True or false: You have a crush on [fill in the blank].",id);
                } else  if(number778 === 123){      client.reply(from, "Of the people in this group, who do you want to trade lives with?",id);
                } else  if(number778 === 124){      client.reply(from, "What are some things you think about when sitting on the toilet?",id);
                } else  if(number778 === 125){      client.reply(from, "Did you have an imaginary friend growing up?",id);
                } else  if(number778 === 126){      client.reply(from, "Do you cover your eyes during a scary part in a movie?",id);
                } else  if(number778 === 127){      client.reply(from, "Have you ever practiced kissing in a mirror?",id);
                } else  if(number778 === 128){      client.reply(from, "Did your parents ever give you the “birds and the bees” talk?",id);
                } else  if(number778 === 129){      client.reply(from, "What is your guilty pleasure?",id);
                } else  if(number778 === 130){      client.reply(from, "What is your worst habit?",id);
                } else  if(number778 === 131){      client.reply(from, "Has anyone ever walked in on you when going #2 in the bathroom?",id);
                } else  if(number778 === 132){      client.reply(from, "Have you ever had a wardrobe malfunction?",id);
                } else  if(number778 === 133){      client.reply(from, "Have you ever walked into a wall?",id);
                } else  if(number778 === 134){      client.reply(from, "Do you pick your nose?",id);
                } else  if(number778 === 135){      client.reply(from, "Do you sing in the shower?",id);
                } else  if(number778 === 136){      client.reply(from, "Have you ever peed yourself?",id);
                } else  if(number778 === 137){      client.reply(from, "What was your most embarrassing moment in public?",id);
                } else  if(number778 === 138){      client.reply(from, "Have you ever farted loudly in class?",id);
                } else  if(number778 === 139){      client.reply(from, "Do you ever talk to yourself in the mirror?",id);
                } else  if(number778 === 140){      client.reply(from, "You’re in a public restroom and just went #2, then you realized your stall has no toilet paper. What do you do?",id);
                } else  if(number778 === 141){      client.reply(from, "What would be in your web history that you’d be embarrassed if someone saw?",id);
                } else  if(number778 === 142){      client.reply(from, "Have you ever tried to take a sexy picture of yourself?",id);
                } else  if(number778 === 143){      client.reply(from, "Do you sleep with a stuffed animal?",id);
                } else  if(number778 === 144){      client.reply(from, "Do you drool in your sleep?",id);
                } else  if(number778 === 145){      client.reply(from, "Do you talk in your sleep?",id);
                } else  if(number778 === 146){      client.reply(from, "Who is your secret crush?",id);
                } else  if(number778 === 147){      client.reply(from, "Do you think [fill in the name] is cute?",id);
                } else  if(number778 === 148){      client.reply(from, "Who do you like the least in this group, and why?",id);
                } else  if(number778 === 149){      client.reply(from, "What does your dream boy or girl look like?",id);
                } else  if(number778 === 150){      client.reply(from, "What is your go-to song for the shower?",id);
                } else  if(number778 === 151){      client.reply(from, "Who is the sexiest person in this group?",id);
                } else  if(number778 === 152){      client.reply(from, "How would you rate your looks on a scale of 1 to 10?",id);
                } else  if(number778 === 153){      client.reply(from, "Would you rather have sex with [insert name] in secret or not have sex with that person, but everyone thinks you did?",id);
                } else  if(number778 === 154){      client.reply(from, "What don't you like about me?",id);
                } else  if(number778 === 155){      client.reply(from, "What color underwear are you wearing right now?",id);
                } else  if(number778 === 156){      client.reply(from, "What was the last thing you texted?",id);
                } else  if(number778 === 157){      client.reply(from, "If you were rescuing people from a burning building and you had to leave one person behind from this group, who would it be?",id);
                } else  if(number778 === 158){      client.reply(from, "Do you think you'll marry your current girlfriend/boyfriend?",id);
                } else  if(number778 === 159){      client.reply(from, "How often do you wash your undergarments?",id);
                } else  if(number778 === 160){      client.reply(from, "Have you ever tasted ear wax?",id);
                } else  if(number778 === 161){      client.reply(from, "Have you ever farted and then blamed someone else?",id);
                } else  if(number778 === 162){      client.reply(from, "Have you ever tasted your sweat?",id);
                } else  if(number778 === 163){      client.reply(from, "What is the most illegal thing you have ever done?",id);
                } else  if(number778 === 164){      client.reply(from, "Who is your favorite: Mom or Dad?",id);
                } else  if(number778 === 165){      client.reply(from, "Would you trade your sibling in for a million dollars?",id);
                } else  if(number778 === 166){      client.reply(from, "Would you trade in your dog for a million dollars?",id);
                } else  if(number778 === 167){      client.reply(from, "What is your biggest pet peeve?",id);
                } else  if(number778 === 168){      client.reply(from, "If you were allowed to marry more than one person, would you? Who would you choose to marry?",id);
                } else  if(number778 === 169){      client.reply(from, "Would you rather lose your sex organs forever or gain 200 pounds?",id);
                } else  if(number778 === 170){      client.reply(from, "Would you choose to save 100 people without anyone knowing about it or not save them but have everyone praise you for it?",id);
                } else  if(number778 === 171){      client.reply(from, "If you could only hear one song for the rest of your life, what would it be?",id);
                } else  if(number778 === 172){      client.reply(from, "If you lost one day of your life every time you said a swear word, would you try not to do it?",id);
                } else  if(number778 === 173){      client.reply(from, "Who in this group would be the worst person to date? Why?",id);
                } else  if(number778 === 174){      client.reply(from, "Would you rather live with no internet or no A/C or heating?",id);
                } else  if(number778 === 175){      client.reply(from, "If someone offered you $1 million to break up with your girlfriend/boyfriend, would you do it?",id);
                } else  if(number778 === 176){      client.reply(from, "If you were reborn, what decade would you want to be born in?",id);
                } else  if(number778 === 177){      client.reply(from, "If you could go back in time in erase one thing you said or did, what would it be?",id);
                } else  if(number778 === 178){      client.reply(from, "Has your boyfriend or girlfriend ever embarrassed you?",id);
                } else  if(number778 === 179){      client.reply(from, "Have you ever thought about cheating on your partner?",id);
                } else  if(number778 === 180){      client.reply(from, "If you could suddenly become invisible, what would you do?",id);
                } else  if(number778 === 181){      client.reply(from, "Have you ever been caught checking someone out?",id);
                } else  if(number778 === 182){      client.reply(from, "Have you ever waved at someone thinking they saw you when really they didn't? What did you do when you realized it?",id);
                } else  if(number778 === 183){      client.reply(from, "What's the longest time you've stayed in the bathroom, and why did you stay for that long?",id);
                } else  if(number778 === 184){      client.reply(from, "What's the most unflattering school picture of you?",id);
                } else  if(number778 === 185){      client.reply(from, "Have you ever cried because you missed your parents so much?",id);
                } else  if(number778 === 186){      client.reply(from, "Would you rather be caught picking your nose or picking a wedgie?",id);
                } else  if(number778 === 187){      client.reply(from, "Describe the strangest dream you've ever had. Did you like it?",id);
                } else  if(number778 === 188){      client.reply(from, "Have you ever posted something on social media that you regret?",id);
                } else  if(number778 === 189){      client.reply(from, "What is your biggest fear?",id);
                } else  if(number778 === 190){      client.reply(from, "Do you pee in the shower?",id);
                } else  if(number778 === 191){      client.reply(from, "Have you ever ding dong ditched someone?",id);
                } else  if(number778 === 192){      client.reply(from, "The world ends next week, and you can do anything you want (even if it's illegal). What would you do?",id);
                } else  if(number778 === 193){      client.reply(from, "Would you wear your shirt inside out for a whole day if someone paid you $100?",id);
                } else  if(number778 === 194){      client.reply(from, "What is the most childish thing that you still do?",id);
                } else  if(number778 === 195){      client.reply(from, "How far would you go to land the guy or girl of your dreams?",id);
                } else  if(number778 === 196){      client.reply(from, "Tell us about a time you embarrassed yourself in front of a crush.",id);
                } else  if(number778 === 197){      client.reply(from, "Have you ever kept a library book?",id);
                } else  if(number778 === 198){      client.reply(from, "Who is one person you pretend to like, but actually don’t?",id);
                } else  if(number778 === 199){      client.reply(from, "What children’s movie could you watch over and over again?",id);
                } else  if(number778 === 200){      client.reply(from, "Do you have bad foot odor?",id);
                } else  if(number778 === 201){      client.reply(from, "Do you have any silly nicknames?",id);
                } else  if(number778 === 202){      client.reply(from, "When was the last time you wet the bed?",id);
                } else  if(number778 === 203){      client.reply(from, "How many pancakes have you eaten in a single sitting?",id);
                } else  if(number778 === 204){      client.reply(from, "Have you ever accidentally hit something with your car?",id);
                } else  if(number778 === 205){      client.reply(from, "If you had to make out with any Disney character, who would it be?",id);
                } else  if(number778 === 206){      client.reply(from, "Have you ever watched a movie you knew you shouldn’t?",id);
                } else  if(number778 === 207){      client.reply(from, "Have you ever wanted to try LARP (Live Action Role-Play)?",id);
                } else  if(number778 === 208){      client.reply(from, "What app on your phone do you waste the most time on?",id);
                } else  if(number778 === 209){      client.reply(from, "Have you ever pretended to be sick to get out of something? If so, what was it?",id);
                } else  if(number778 === 210){      client.reply(from, "What is the most food you’ve eaten in a single sitting?",id);
                } else  if(number778 === 211){      client.reply(from, "Do you dance when you’re by yourself?",id);
                } else  if(number778 === 212){      client.reply(from, "Would you have voted for or against Trump?",id);
                } else  if(number778 === 213){      client.reply(from, "What song on the radio do you sing with every time it comes on?",id);
                } else  if(number778 === 214){      client.reply(from, "Do you sleep with a stuffed animal?",id);
                } else  if(number778 === 215){      client.reply(from, "Do you own a pair of footie pajamas?",id);
                } else  if(number778 === 216){      client.reply(from, "Are you scared of the dark?",id);
                } else  if(number778 === 217){      client.reply(from, "What *as seen on TV* product do you secretly want to buy?",id);
                } else  if(number778 === 218){      client.reply(from, "Do you still take bubble baths?",id);
                } else  if(number778 === 219){      client.reply(from, "If you were home by yourself all day, what would you do?",id);
                } else  if(number778 === 220){      client.reply(from, "How many selfies do you take a day?",id);
                } else  if(number778 === 221){      client.reply(from, "What is something you’ve done to try to be ‘cooler’?",id);
                } else  if(number778 === 222){      client.reply(from, "When was the last time you brushed your teeth?",id);
                } else  if(number778 === 223){      client.reply(from, "Have you ever used self-tanner?",id);
                } else  if(number778 === 224){      client.reply(from, "What do your favorite pajamas look like?",id);
                } else  if(number778 === 225){      client.reply(from, "Do you have a security blanket?",id);
                } else  if(number778 === 226){      client.reply(from, "Have you ever eaten something off the floor?",id);
                } else  if(number778 === 227){      client.reply(from, "Have you ever butt-dialed someone?",id);
                } else  if(number778 === 228){      client.reply(from, "Do you like hanging out with your parents?",id);
                } else  if(number778 === 229){      client.reply(from, "Have you ever got caught doing something you shouldn’t?",id);
                } else  if(number778 === 230){      client.reply(from, "What part of your body do you love, and which part do you hate?",id);
                } else  if(number778 === 231){      client.reply(from, "Have you ever had lice?",id);
                } else  if(number778 === 232){      client.reply(from, "Have you ever pooped your pants?",id);
                } else  if(number778 === 233){      client.reply(from, "What was the last R-rated movie you watched?",id);
                } else  if(number778 === 234){      client.reply(from, "Do you lick your plate?",id);
                } else  if(number778 === 235){      client.reply(from, "What is something that no one else knows about you?",id);
                } else  if(number778 === 236){      client.reply(from, "Do you write in a diary?",id);
                } else  if(number778 === 237){      client.reply(from, "What is the worst date you’ve ever been on?",id);
                } else  if(number778 === 238){      client.reply(from, "Have you ever had a crush on a friend’s boyfriend/girlfriend?",id);
                } else  if(number778 === 239){      client.reply(from, "If you had to make out with a boy at school, who would it be?",id);
                } else  if(number778 === 240){      client.reply(from, "Would you rather go for a month without washing your hair or go for a day without wearing a bra?",id);
                } else  if(number778 === 241){      client.reply(from, "Have you ever asked someone out?",id);
                } else  if(number778 === 242){      client.reply(from, "Have you ever had a crush on a person at least 10 years older than you?",id);
                } else  if(number778 === 243){      client.reply(from, "Who is the worst kisser you’ve kissed?",id);
                } else  if(number778 === 244){      client.reply(from, "What size is your bra?",id);
                } else  if(number778 === 245){      client.reply(from, "Do you wear tighty-whities or granny panties?",id);
                } else  if(number778 === 246){      client.reply(from, "Do you ever admire yourself in the mirror?",id);
                } else  if(number778 === 247){      client.reply(from, "Has a crush ever found out you liked them and turned you down?",id);
                } else  if(number778 === 248){      client.reply(from, "Have you ever been stood up on a date?",id);
                } else  if(number778 === 249){      client.reply(from, "What’s the most embarrassing thing you’ve done regarding your crush?",id);
                } else  if(number778 === 250){      client.reply(from, "Do you secretly love Twilight?",id);
                } else  if(number778 === 251){      client.reply(from, "Have you ever wanted to be a cheerleader?",id);
                } else  if(number778 === 252){      client.reply(from, "Who is the hottest: Hagrid, Dumbledore, or Dobby?",id);
                } else  if(number778 === 253){      client.reply(from, "If you could marry any celebrity, who would it be?",id);
                } else  if(number778 === 254){      client.reply(from, "What do you do to get yourself *sexy*?",id);
                } else  if(number778 === 255){      client.reply(from, "Who is your current crush?",id);
                } else  if(number778 === 256){      client.reply(from, "What hairstyle have you always wanted, but never been willing to try?",id);
                } else  if(number778 === 257){      client.reply(from, "What’s the most embarrassing thing you’ve said or done in front of someone you like?",id);
                } else  if(number778 === 258){      client.reply(from, "What part of your body do you love, and which part do you hate?",id);
                } else  if(number778 === 259){      client.reply(from, "Who is your celebrity crush?",id);
                } else  if(number778 === 260){      client.reply(from, "If you could change one thing about your body, what would it be?",id);
                } else  if(number778 === 261){      client.reply(from, "Who was your first kiss? Did you like it?",id);
                } else  if(number778 === 262){      client.reply(from, "Who are you jealous of?",id);
                } else  if(number778 === 263){      client.reply(from, "If you could be another girl at our school, who would you be?",id);
                } else  if(number778 === 264){      client.reply(from, "Would you kiss a guy on the first date? Would you do more than that?",id);
                } else  if(number778 === 265){      client.reply(from, "Who are the top five cutest guys in our class? Rank them.",id);
                } else  if(number778 === 266){      client.reply(from, "How many kids do you want to have in the future?",id);
                } else  if(number778 === 267){      client.reply(from, "Who do you hate the most?",id);
                } else  if(number778 === 268){      client.reply(from, "If you could go out on a date with a celebrity, who would it be?",id);
                } else  if(number778 === 269){      client.reply(from, "If you were stranded on a deserted island, who would you want to be stranded with from our school?",id);
                } else  if(number778 === 270){      client.reply(from, "Have you ever flirted with your best friend’s siblings?",id);
                } else  if(number778 === 271){      client.reply(from, "Have you ever been dumped? What was the reason for it?",id);
                } else  if(number778 === 272){      client.reply(from, "Jock, nerd, or bad guy?",id);
                } else  if(number778 === 273){      client.reply(from, "Have you ever had a crush on friend's boyfriend?",id);
                } else  if(number778 === 274){      client.reply(from, "Who is your first pick for prom?",id);
                } else  if(number778 === 275){      client.reply(from, "What's the sexiest thing about a guy?",id);
                } else  if(number778 === 276){      client.reply(from, "What's the sexiest thing about a girl?",id);
                } else  if(number778 === 277){      client.reply(from, "What's one physical feature that you would change on yourself if you could?",id);
                } else  if(number778 === 278){      client.reply(from, "Would you rather be a guy than a girl? Why?",id);
                } else  if(number778 === 279){      client.reply(from, "Describe your dream career.",id);
                } else  if(number778 === 280){      client.reply(from, "If you could eat anything you wanted without getting fat, what would that food be?",id);
                } else  if(number778 === 281){      client.reply(from, "If you had to do a game show with someone in this group, who would you pick?",id);
                } else  if(number778 === 282){      client.reply(from, "Would you go a year without your phone if it meant you could marry the person of your dreams?",id);
                } else  if(number778 === 283){      client.reply(from, "You are going to be stuck on a desert island, and you can only bring five things. List them.",id);
                } else  if(number778 === 284){      client.reply(from, "If you could only wear one hairstyle for the rest of your life, would you choose curly hair or straight hair?",id);
                } else  if(number778 === 285){      client.reply(from, "You have to give up one makeup item for the rest of your life. What is it?",id);
                } else  if(number778 === 286){      client.reply(from, "Would you date someone shorter than you?",id);
                } else  if(number778 === 287){      client.reply(from, "If someone paid you $1000 to wear your bra outside your shirt, would you do it?Do you currently have a crush on anyone?",id);
                } else  if(number778 === 288){      client.reply(from, "Describe what your crush looks like.",id);
                } else  if(number778 === 289){      client.reply(from, "What is your crush's personality like?",id);
                } else  if(number778 === 290){      client.reply(from, "Is there anything about your life you would change?",id);
                } else  if(number778 === 291){      client.reply(from, "Who do you hate, and why?",id);
                } else  if(number778 === 292){      client.reply(from, "What's your biggest pet peeve?",id);
                } else  if(number778 === 293){      client.reply(from, "How many people have you kissed?",id);
                } else  if(number778 === 294){      client.reply(from, "What's your biggest turn-on?",id);
                } else  if(number778 === 295){      client.reply(from, "If you could date anyone in the world, who would you date?",id);
                } else  if(number778 === 296){      client.reply(from, "Would you rather be skinny and hairy or fat and smooth?",id);
                } else  if(number778 === 297){      client.reply(from, "Who would you ask to prom if you could choose anyone?",id);
                } else  if(number778 === 298){      client.reply(from, "Describe your perfect date.",id);
                } else  if(number778 === 299){      client.reply(from, "Would you ever date two people at once if you could get away with it?",id);
                } else  if(number778 === 300){      client.reply(from, "You have to delete every app on your except for five. Name the five you would keep.",id);
                } else  if(number778 === 301){      client.reply(from, "Have you ever sent out a nude Snapchat?",id);
                } else  if(number778 === 302){      client.reply(from, "Have you ever received a nude selfie? Who was it from?",id);
                } else  if(number778 === 303){      client.reply(from, "What was your reaction? Like or dislike?",id);
                } else  if(number778 === 304){      client.reply(from, "Have you ever gotten mad at a friend for posting an unflattering picture of you?",id);
                } else  if(number778 === 305){      client.reply(from, "Have you ever had a crush on a teacher?",id);
                } else  if(number778 === 306){      client.reply(from, "Who do you think would make the best kisser? (List a few people for them to choose.)",id);
                } else  if(number778 === 307){      client.reply(from, "Have you ever sent someone the wrong text?",id);
                } else  if(number778 === 308){      client.reply(from, "Have you ever cursed at your parents? Why?",id);
                } else  if(number778 === 309){      client.reply(from, "Who do you think is the cutest person in our class?",id);
                } else  if(number778 === 310){      client.reply(from, "What is the most attractive feature on a person?",id);
                } else  if(number778 === 311){      client.reply(from, "What the biggest deal-breaker for you?",id);
                } else  if(number778 === 312){      client.reply(from, "How far would you go on a first date?",id);
                } else  if(number778 === 313){      client.reply(from, "Have you ever regretted something you did to get a crush's attention?",id);
                } else  if(number778 === 314){      client.reply(from, "Would you ever be mean to someone if it meant you could save your close friend from embarrassment?",id);
                } else  if(number778 === 315){      client.reply(from, "Of the people at our school, who do you think would make the best president?",id);
                } else  if(number778 === 316){      client.reply(from, "If we didn't have a dress code, what would you wear to school that you can't wear now?",id);
                } else  if(number778 === 317){      client.reply(from, "Describe what makes someone husband or wife material.",id);
                } else  if(number778 === 318){      client.reply(from, "If you could make $1 million, would you drop out of school?",id);
                } else  if(number778 === 319){      client.reply(from, "What is your worst habit?",id);
                } else  if(number778 === 320){      client.reply(from, "What's one thing you do that you don't want anyone to know about?",id);
                } else  if(number778 === 321){      client.reply(from, "Do you frequently stalk anyone on social media? Who?",id);
                } else  if(number778 === 322){      client.reply(from, "If you had to delete one app from your phone, which one would it be?",id);
                } else  if(number778 === 323){      client.reply(from, "What is your greatest fear in a relationship?",id);
                } else  if(number778 === 324){      client.reply(from, "Say one positive and one negative thing about each person in this group.",id);
                } else  if(number778 === 325){      client.reply(from, "What is one disturbing fact I should know about you?",id);
                } else  if(number778 === 326){      client.reply(from, "Have you ever smoked?",id);
                } else  if(number778 === 327){      client.reply(from, "Have you ever tried drugs?",id);
                } else  if(number778 === 328){      client.reply(from, "What about alcohol?",id);
                } else  if(number778 === 329){      client.reply(from, "What's the craziest thing you've done while under the influence?",id);
                } else  if(number778 === 330){      client.reply(from, "If you were trapped for three days on an island, who are three people in this group you would bring with you and why?",id);
                } else  if(number778 === 331){      client.reply(from, "Would you go to a nude beach?",id);
                } else  if(number778 === 332){      client.reply(from, "Who's the most annoying person in this group?",id);
                } else  if(number778 === 333){      client.reply(from, "Are you still a virgin?",id);
                } else  if(number778 === 334){      client.reply(from, "If you had to marry someone in this group, who would it be?",id);
                } else  if(number778 === 335){      client.reply(from, "Do you have hidden piercings or tattoos?",id);
                } else  if(number778 === 336){      client.reply(from, "How long was your longest relationship?",id);
                } else  if(number778 === 337){      client.reply(from, "If you could have one celebrity follow you on Instagram, who would that be?",id);
                } else  if(number778 === 338){      client.reply(from, "You have to delete five people on Instagram. Name them.",id);
                } else  if(number778 === 339){      client.reply(from, "Do you want to get married one day?",id);
                } else  if(number778 === 340){      client.reply(from, "Do you want to have kids? How many?",id);
                } else  if(number778 === 341){      client.reply(from, "Would you ever get into a long-distance relationship?",id);
                } else  if(number778 === 342){      client.reply(from, "Describe the person of your dreams.",id);
                } else  if(number778 === 343){      client.reply(from, "What would you do if you found out you flunked school?",id);
                } else  if(number778 === 344){      client.reply(from, "If your girlfriend or boyfriend broke up with you at school, what would you do?",id);
                } else  if(number778 === 345){      client.reply(from, "If you had the power to fire one teacher, who would it be?",id);
                } else  if(number778 === 346){      client.reply(from, "Basketball, baseball, or football?",id);
                } else  if(number778 === 347){      client.reply(from, "What was your first job?",id);
                } else  if(number778 === 348){      client.reply(from, "If you don't have one yet, where would you want to work?",id);
                } else  if(number778 === 349){      client.reply(from, "How many hours would you spend online if you didn't have school or homework?",id);
                } else  if(number778 === 350){      client.reply(from, "How tall do you want to be?",id);
                } else  if(number778 === 351){      client.reply(from, "What's your biggest fear about college?",id);
                } else  if(number778 === 352){      client.reply(from, "What are you most excited about?",id);
                } else  if(number778 === 353){      client.reply(from, "Would you want your best friend to go to the same college as you?",id);
                } else  if(number778 === 354){      client.reply(from, "Would you want your current boyfriend or girlfriend to go to the same college as you?",id);
                } else  if(number778 === 355){      client.reply(from, "Who do you think is the hottest celebrity?",id);
                } else  if(number778 === 356){      client.reply(from, "What's your dream job?",id);
                } else  if(number778 === 357){      client.reply(from, "What was a rumor that went around about you?",id);
                } else  if(number778 === 358){      client.reply(from, "Have you ever failed a class?",id);
                } else  if(number778 === 359){      client.reply(from, "If you had the power to fire one teacher, who would that be?",id);
                } else  if(number778 === 360){      client.reply(from, "If you could plan a class prank knowing you'll never get caught, what would the prank be?",id);
                } else  if(number778 === 361){      client.reply(from, "Have you ever cheated on a test?",id);
                } else  if(number778 === 362){      client.reply(from, "Have you ever had a crush on a teacher? Who?",id);
                } else  if(number778 === 363){      client.reply(from, "Who would you take to prom?",id);
                } else  if(number778 === 364){      client.reply(from, "Have you ever made out at school?",id);
                } else  if(number778 === 365){      client.reply(from, "Who would you never ever want to sit next to in class?",id);
                } else  if(number778 === 366){      client.reply(from, "Have you ever been late to class?",id);
                } else  if(number778 === 367){      client.reply(from, "What's the most embarrassing thing you've ever done in front of a teacher?",id);
                } else  if(number778 === 368){      client.reply(from, "Have you ever stuck gum under a desk?",id);
                } else  if(number778 === 369){      client.reply(from, "What do you think is better: tests or essays?",id);
                } else  if(number778 === 370){      client.reply(from, "Have you ever eaten lunch by yourself? Why?",id);
                } else  if(number778 === 371){      client.reply(from, "If you had to take one class for the rest of your life, what class would it be, and who would the teacher be?",id);
                } else  if(number778 === 372){      client.reply(from, "If you wanted to make out on campus, where would you do it?",id);
                } else  if(number778 === 373){      client.reply(from, "Have you ever gotten into a fight on school grounds?",id);
                } else  if(number778 === 374){      client.reply(from, "What was the worst score you’ve ever gotten on a test?",id);
                } else  if(number778 === 375){      client.reply(from, "Have you ever fallen asleep in class?",id);
                } else  if(number778 === 376){      client.reply(from, "Have you ever gotten detention or been suspended?",id);
                } else  if(number778 === 377){      client.reply(from, "If you were invisible, would you sneak a peek in the other locker room?",id);
                } else  if(number778 === 378){      client.reply(from, "If so, who would you be hoping to see?",id);
                } else  if(number778 === 379){      client.reply(from, "Who's the hottest teacher at our school?",id);
                } else  if(number778 === 380){      client.reply(from, "What's the worst class to have first period?",id);
                } else  if(number778 === 381){      client.reply(from, "If you had to take a person from another grade to prom, who would that be?",id);
                } else  if(number778 === 382){      client.reply(from, "Who do you want to make out with the most?",id);
                } else  if(number778 === 383){      client.reply(from, "If you had to flash just one person in this group, who would it be?",id);
                } else  if(number778 === 384){      client.reply(from, "If you haven't had your first kiss yet, who in this group do you want to have your first kiss with?",id);
                } else  if(number778 === 385){      client.reply(from, "Of the people in this group, who would you go out with?",id);
                } else  if(number778 === 386){      client.reply(from, "Describe the most attractive thing about each person in this group.",id);
                } else  if(number778 === 387){      client.reply(from, "Who here do you think is the best flirt?",id);
                } else  if(number778 === 388){      client.reply(from, "Who has the best smile?",id);
                } else  if(number778 === 389){      client.reply(from, "Who has the cutest nose?",id);
                } else  if(number778 === 390){      client.reply(from, "How about prettiest eyes?",id);
                } else  if(number778 === 391){      client.reply(from, "Who's the funniest in this group?",id);
                } else  if(number778 === 392){      client.reply(from, "What's one thing you would never do in front of someone you had a crush on?",id);
                } else  if(number778 === 393){      client.reply(from, "How often do you check yourself out in the mirror when you're on a date?",id);
                } else  if(number778 === 394){      client.reply(from, "Who here do you think would be the best kisser?",id);
                } else  if(number778 === 395){      client.reply(from, "Who has the best dance moves?",id);
                } else  if(number778 === 396){      client.reply(from, "If you could have one physical feature of someone in this group, what would that be?",id);
                } else  if(number778 === 397){      client.reply(from, "What is your wildest fantasy?",id);
                } else  if(number778 === 398){      client.reply(from, "How far would you go with someone you just met and will never see again?",id);
                } else  if(number778 === 399){      client.reply(from, "Rate me on a scale of 1 to 10, with 10 being the hottest.",id);
                } else  if(number778 === 400){      client.reply(from, "If I was a food, what would I be, and how would you eat me?",id);
                } else  if(number778 === 401){      client.reply(from, "Would you choose a wild, hot relationship or a calm and stable one?",id);
                } else  if(number778 === 402){      client.reply(from, "If you had one week to live and you had to marry someone in this group, who would it be?",id);
                } else  if(number778 === 403){      client.reply(from, "If you only had 24 hours to live and you could do anything with anyone in this group, who would it be and what would you do with that person?",id);
                } else  if(number778 === 404){      client.reply(from, "What's your biggest turn-on?",id);
                } else  if(number778 === 405){      client.reply(from, "And your biggest turn-off?",id);
                } else  if(number778 === 406){      client.reply(from, "Would you go out with me if I was the last person on earth?",id);
                } else  if(number778 === 407){      client.reply(from, "What's the most flirtatious thing you've ever done?",id);
                } else  if(number778 === 408){      client.reply(from, "What's the sexiest thing about [choose someone from the group]?",id);
                } else  if(number778 === 409){      client.reply(from, "If you could go on a romantic date with anyone in this group, who would you pick?",id);
                } else  if(number778 === 410){      client.reply(from, "Have you ever flashed someone?",id);
                } else  if(number778 === 411){      client.reply(from, "Have you ever sexted anyone?",id);
                } else  if(number778 === 412){      client.reply(from, "Have you ever been to a nudist beach? Would you consider going?",id);
                } else  if(number778 === 413){      client.reply(from, "Would you ever consider posing for Playboy?",id);
                } else  if(number778 === 414){      client.reply(from, "Who has seen you without clothes on?",id);
                } else  if(number778 === 415){      client.reply(from, "Have you ever seen a naughty magazine?",id);
                } else  if(number778 === 416){      client.reply(from, "Have you ever sent a nude selfie? Who would you send it to?",id);
                } else  if(number778 === 417){      client.reply(from, "Have you ever searched for something dirty on the internet?",id);
                } else  if(number778 === 418){      client.reply(from, "Who do you most want to sleep with, out of everyone here?",id);
                } else  if(number778 === 419){      client.reply(from, "What's your favorite body part on your partner?",id);
                } else  if(number778 === 420){      client.reply(from, "How many people have you kissed?",id);
                } else  if(number778 === 421){      client.reply(from, "Have you ever been attracted to the same sex?",id);
                } else  if(number778 === 422){      client.reply(from, "When and where was your first kiss? Who was it with?",id);
                } else  if(number778 === 423){      client.reply(from, "When did you lose your virginity, and to whom did you lose it?",id);
                } else  if(number778 === 424){      client.reply(from, "What's your ultimate sexual fantasy?",id);
                } else  if(number778 === 425){      client.reply(from, "Would you go out with an older guy? How old is too old?",id);
                } else  if(number778 === 426){      client.reply(from, "Do you sleep in the nude?",id);
                } else  if(number778 === 427){      client.reply(from, "How much money would we have to pay you for you to agree to flash your boobs?",id);
                } else  if(number778 === 428){      client.reply(from, "Have you ever been in a *friends with benefits* situation?",id);
                } else  if(number778 === 429){      client.reply(from, "If you had to go skinny dipping with someone, who in this group would you choose?",id);
                } else  if(number778 === 430){      client.reply(from, "If I paid you $100, would you wear your sexiest clothes to class?",id);
            } else  if(number788 === 431){      client.reply(from, "What is one secret you are hiding from your mom?",id);
        } else  if(number788 === 432){      client.reply(from, "Have you ever stalked someone on Facebook or Instagram?",id);
        } else  if(number788 === 433){      client.reply(from, "What would you buy me if I gave you $50?",id);
        } else  if(number788 === 434){      client.reply(from, "If I went through your room, what is something I would be shocked to find?",id);
        } else  if(number788 === 435){      client.reply(from, "Have you ever prank called a friend?",id);
        } else  if(number788 === 436){      client.reply(from, "How many selfies do you take a week?",id);
        } else  if(number788 === 437){      client.reply(from, "How many boy/girl contacts do you have on your phone?",id);
        } else  if(number788 === 438){      client.reply(from, "Have you ever fallen in front of your crush?",id);
        } else  if(number788 === 439){      client.reply(from, "Do you currently have a crush on anyone?",id);
        } else  if(number788 === 440){      client.reply(from, "Is there anything in your life that you would change?Who do you hate and why?",id);
        } else  if(number788 === 441){      client.reply(from, "What is your biggest pet peeve?",id);
        } else  if(number788 === 442){      client.reply(from, "How many people have you kissed?",id);
        } else  if(number788 === 443){      client.reply(from, "Do you cover your eyes during the scary parts of a movie?",id);
        } else  if(number788 === 444){      client.reply(from, "Have you ever practiced kissing the mirror?",id);
        } else  if(number788 === 445){      client.reply(from, "What was your most embarrassing moment in public?",id);
        } else  if(number788 === 446){      client.reply(from, "What is your guilty pleasure?",id);
        } else  if(number788 === 447){      client.reply(from, "Do you talk in your sleep?",id);
        } else  if(number788 === 448){      client.reply(from, "Do you drool in your sleep?",id);
        } else  if(number788 === 449){      client.reply(from, "What is your go-to song to sing in the shower?",id);
        } else  if(number788 === 450){      client.reply(from, "Have you ever blamed your fart on someone else?",id);
        } else  if(number788 === 451){      client.reply(from, "Have you ever farted in an elevator?",id);
        } else  if(number788 === 452){      client.reply(from, "What was your favorite childhood video game?",id);
        } else  if(number788 === 453){      client.reply(from, "Would you rather have no heating or A/C or no internet?",id);
        } else  if(number788 === 454){      client.reply(from, "If you suddenly became invisible what would you do?",id);
        } else  if(number788 === 455){      client.reply(from, "Would you rather let your dog eat out of your mouth or eat food out of a trash can?",id);
        } else  if(number788 === 456){      client.reply(from, "Have you ever played a prank on your parents?",id);
        } else  if(number788 === 457){      client.reply(from, "Would you rather be caught picking your nose or picking a wedgie?",id);
        } else  if(number788 === 458){      client.reply(from, "Describe the strangest dream you’ve ever had.",id);
        } else  if(number788 === 459){      client.reply(from, "Do you have any silly nicknames?",id);
        } else  if(number788 === 460){      client.reply(from, "If you could have any superpower, what would it be?",id);
        } else  if(number788 === 461){      client.reply(from, "If you could change places with a celebrity for a day, who would you choose?",id);
        } else  if(number788 === 462){      client.reply(from, "What is your favorite type of ice cream?",id);
        } else  if(number788 === 463){      client.reply(from, "Are you an early bird or a night owl?",id);
        } else  if(number788 === 464){      client.reply(from, "If you could travel anywhere in the world, where would you go?",id);
        } else  if(number788 === 465){      client.reply(from, "Have you ever eaten something off the floor?",id);
        } else  if(number788 === 466){      client.reply(from, "What is your favorite holiday?",id);
        } else  if(number788 === 467){      client.reply(from, "Describe what your crush looks like",id);
        } else  if(number788 === 468){      client.reply(from, "If you could change anything about yourself, what would it be?",id);
        } else  if(number788 === 469){      client.reply(from, "If you had to kiss a Disney character, who would you choose?",id);
        } else  if(number788 === 470){      client.reply(from, "Tell me about the last time you got really embarrassed.",id);
        } else  if(number788 === 471){      client.reply(from, "Where are you ticklish?",id);
        } else  if(number788 === 472){      client.reply(from, "What do you think is your best feature?",id);
        } else  if(number788 === 473){      client.reply(from, "On a scale of 1-10, how attractive do you think you are?",id);
        } else  if(number788 === 474){      client.reply(from, "What is the weirdest food combo you’ve ever eaten?",id);
        } else  if(number788 === 475){      client.reply(from, "What is the last thing that made you cry?",id);
        } else  if(number788 === 476){      client.reply(from, "Who is the last person you tried to impress?",id);
        } else  if(number788 === 477){      client.reply(from, "If you were famous, what would you be famous for?",id);
        } else  if(number788 === 478){      client.reply(from, "If you had to be stranded on a deserted island with a celebrity, who would you choose?",id);
        } else  if(number788 === 479){      client.reply(from, "What is your biggest insecurity?",id);
        } else  if(number788 === 480){      client.reply(from, "What is your biggest irrational fear?",id);}
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
                        const number788 = Math.floor(Math.random() * 84) + 1;
                   if(number788 === 1){      client.reply(from, "I dare you to order me $10 worth of food for delivery.",id);
                } else  if(number788 === 2){      client.reply(from, "Shave your arms and send me a pic.",id);
                } else  if(number788 === 3){      client.reply(from, "Record yourself singing a song and post it on YouTube.",id);
                } else  if(number788 === 4){      client.reply(from, "Mix a drop of every condiment in your house and drink/eat it.",id);
                } else  if(number788 === 5){      client.reply(from, "Message someone you haven’t talked to in at least 1 year on Facebook or Instagram and take a screenshot.",id);
                } else  if(number788 === 6){      client.reply(from, "Try to lick your own foot!",id);
                } else  if(number788 === 7){      client.reply(from, "Do a three-way prank call to somebody so I can listen.",id);
                } else  if(number788 === 8){      client.reply(from, "Text your crush and ask them out on a date.",id);
                } else  if(number788 === 9){      client.reply(from, "Fill up the bath and get in with your current outfit still on.",id);
                } else  if(number788 === 10){      client.reply(from, "Pick the third number on your contacts list and message them a silly poem.",id);
                } else  if(number788 === 11){      client.reply(from, "Open up all your windows and sing an entire song as loud as you can.",id);
                } else  if(number788 === 12){      client.reply(from, "Cut a piece of your hair.",id);
                } else  if(number788 === 13){      client.reply(from, "Put ice cubes down your pants and try to shake them out and send me a video.",id);
                } else  if(number788 === 14){      client.reply(from, "Take a video of yourself doing a crazy dance and post it to social media.",id);
                } else  if(number788 === 15){      client.reply(from, "Ask a neighbor if they have fifty cents.",id);
                } else  if(number788 === 16){      client.reply(from, "Walk around the block and talk to yourself the entire time, even when people are around.",id);
                } else  if(number788 === 17){      client.reply(from, "Drink or eat a teaspoon of soap.",id);
                } else  if(number788 === 18){      client.reply(from, "Close your eyes and reach into your fridge or food pantry – the first thing you touch, you have to eat.",id);
                } else  if(number788 === 19){      client.reply(from, "Send me a screenshot of your messages with the last person besides me you texted.",id);
                } else  if(number788 === 20){      client.reply(from, "Brush your teeth with peanut butter or another condiment and send me a pic.",id);
                } else  if(number788 === 21){      client.reply(from, "Take a really unflattering picture and make it your profile picture for one full day.",id);
                } else  if(number788 === 22){      client.reply(from, "Send me a screenshot of your selfies gallery.",id);
                } else  if(number788 === 23){      client.reply(from, "Watch five minutes of an adult movie I’ll send you.",id);
                } else  if(number788 === 24){      client.reply(from, "Go up to your biggest window and dance really badly until someone walks past.",id);
                } else  if(number788 === 25){      client.reply(from, "Text a random number and write “I see dead people”.",id);
                } else  if(number788 === 26){      client.reply(from, "Text a random number a selfie.",id);
                } else  if(number788 === 27){      client.reply(from, "Shave a part of your body you wouldn’t usually shave.",id);
                } else  if(number788 === 28){      client.reply(from, "Pretend to be a cat for five minutes and send me a video.",id);
                } else  if(number788 === 29){      client.reply(from, "Find the spiciest thing in your house and eat an entire spoonful of it.",id);
                } else  if(number788 === 30){      client.reply(from, "Make a video of yourself doing your weirdest habit!",id);
                } else  if(number788 === 31){      client.reply(from, "Put on clothes of the opposite s*x and take a video of yourself trying to act like a guy/girl.",id);
                } else  if(number788 === 32){      client.reply(from, "Create a really bad, five-minute make-up tutorial and post it to YouTube.",id);
                } else  if(number788 === 33){      client.reply(from, "Walk to the nearest store and ask for the smallest available change for five dollars.",id);
                } else  if(number788 === 34){      client.reply(from, "Wait until a dog walks past your house and bark at it!",id);
                } else  if(number788 === 35){      client.reply(from, "Knock on someone’s door and try to run away before they answer!",id);
            } else  if(number788 === 36){      client.reply(from, "Make up a song and voice record yourself singing it. Send it to me when you’re done",id);
        } else  if(number788 === 37){      client.reply(from, "Video yourself eating a tablespoon of butter and send it to me",id);
        } else  if(number788 === 38){      client.reply(from, "Lick your own armpit. Record yourself",id);
        } else  if(number788 === 39){      client.reply(from, "Prank call someone and try to talk for 15 minutes straight. Take a screenshot of the call",id);
        } else  if(number788 === 40){      client.reply(from, "Eat a spoonful of any condiment of my choosing",id);
        } else  if(number788 === 41){      client.reply(from, "Tell your crush you like them over text. Screenshot the conversation",id);
        } else  if(number788 === 42){      client.reply(from, "Wrap your head with toilet paper like a mummy, take a picture, and make it your profile pic",id);
        } else  if(number788 === 43){      client.reply(from, "Use a picture of me as your phone background for 3 days",id);
        } else  if(number788 === 44){      client.reply(from, "Text a friend and tell them their hair is on backward",id);
        } else  if(number788 === 45){      client.reply(from, "Call someone and confess your new love of Justin Beiber",id);
        } else  if(number788 === 46){      client.reply(from, "Send me the link of the last YouTube video you watched",id);
        } else  if(number788 === 47){      client.reply(from, "Write a short love poem",id);
        } else  if(number788 === 48){      client.reply(from, "Find some lipstick and put it on",id);
        } else  if(number788 === 49){      client.reply(from, "Write my name somewhere on your body (where it can be hidden) with a permanent marker",id);
        } else  if(number788 === 50){      client.reply(from, "Do a sexy dance with just one leg",id);
        } else  if(number788 === 51){      client.reply(from, "Voice record yourself singing your favorite love song and send it to me",id);
        } else  if(number788 === 52){      client.reply(from, "Send me the most unflattering picture of yourself on your phone",id);
        } else  if(number788 === 53){      client.reply(from, "Read me the first email in your inbox",id);
        } else  if(number788 === 54){      client.reply(from, "Video call me or record yourself dancing for 1 minute with no music",id);
        } else  if(number788 === 55){      client.reply(from, "Send me a screenshot of your text inbox without deleting anything",id);
        } else  if(number788 === 56){      client.reply(from, "Tell me all of the contents of your purse/wallet",id);
        } else  if(number788 === 57){      client.reply(from, "Take a video of yourself drinking pickle juice",id);
        } else  if(number788 === 58){      client.reply(from, "Go outside and do the chicken dance where people can see you for 1 minute",id);
        } else  if(number788 === 59){      client.reply(from, "Dip a bar of soap in sauce and lick it",id);
        } else  if(number788 === 60){      client.reply(from, "Go as far down in the splits as you can",id);
        } else  if(number788 === 61){      client.reply(from, "Write a status on Facebook praising me",id);
        } else  if(number788 === 62){      client.reply(from, "Do the macarena for 2 minutes straight",id);
        } else  if(number788 === 63){      client.reply(from, "Close your eyes and write a text without looking. Send it to someone random and screenshot the conversation for proof",id);
        } else  if(number788 === 64){      client.reply(from, "Write a break-up text message and send it to someone random in your contacts. Take a screenshot for proof",id);
        } else  if(number788 === 65){      client.reply(from, "Wear all your clothing inside-out for an hour",id);
        } else  if(number788 === 66){      client.reply(from, "Take a video of yourself drinking water like a dog",id);
        } else  if(number788 === 67){      client.reply(from, "Fill your mouth full of water and say your full name. Take a video and send it",id);
        } else  if(number788 === 68){      client.reply(from, "Call your crush and flirt with them",id);
        } else  if(number788 === 69){      client.reply(from, "Dial a random number and make meaningless conversation for 2 minutes",id);
        } else  if(number788 === 70){      client.reply(from, "Do 25 situps without stopping",id);
        } else  if(number788 === 71){      client.reply(from, "Take a video of yourself imitating a celebrity",id);
        } else  if(number788 === 72){      client.reply(from, "Crack two eggs on your head then take a selfie",id);
        } else  if(number788 === 73){      client.reply(from, "What’s your deepest secret?",id);
        } else  if(number788 === 74){      client.reply(from, "Call me and say my name in a loud voice",id);
        } else  if(number788 === 75){      client.reply(from, "Send a screenshot of your search history from the past two days",id);
        } else  if(number788 === 76){      client.reply(from, "Record a video of you singing a song with a mouthful of peanut butter",id);
        } else  if(number788 === 77){      client.reply(from, "Call a stranger and tell them a secret",id);
        } else  if(number788 === 78){      client.reply(from, "Call your mom and tell her you can’t find a boyfriend/girlfriend in a panicked voice",id);
        } else  if(number788 === 79){      client.reply(from, "Color one of your front teeth black and take a selfie (eyeliner works for this!)",id);
        } else  if(number788 === 80){      client.reply(from, "Send me the 11th picture in your photo gallery",id);
        } else  if(number788 === 81){      client.reply(from, "In what subject did you get the worst marks and when?",id);
        } else  if(number788 === 82){      client.reply(from, "Send me your favorite TikTok/YouTube video",id);
        } else  if(number788 === 83){      client.reply(from, "Put flour all over your face and take a selfie",id);
        } else  if(number788 === 84){      client.reply(from, "Send me a picture of your first crush",id);
    } else  if(number788 === 85){      client.reply(from, "Stand upside down for 15 seconds.",id);
} else  if(number788 === 86){      client.reply(from, "Drink a cup of hot tea/coffee without lifting down.",id);
} else  if(number788 === 87){      client.reply(from, "Brush your teeth with coal.",id);
} else  if(number788 === 88){      client.reply(from, "Sit on your hands for one minute.",id);
} else  if(number788 === 89){      client.reply(from, "Shave underarms immediately.",id);
} else  if(number788 === 90){      client.reply(from, "Apply shampoo to your dry hair and don’t rinse it for 30 minutes.",id);
} else  if(number788 === 91){      client.reply(from, "Send love letter through email to your class teacher.",id);
} else  if(number788 === 92){      client.reply(from, "Select one mobile number blindfolded from your contacts and send one breakup message to him/her.",id);
} else  if(number788 === 93){      client.reply(from, "Mix one egg yolk with sweet sauce and eat it.",id);
} else  if(number788 === 94){      client.reply(from, "Put your mouth full of ice cubes and keep them until they melt.",id);
} else  if(number788 === 95){      client.reply(from, "Taste your bath soap.",id);
} else  if(number788 === 96){      client.reply(from, "Open your wallet and explain all the things in it briefly.",id);
} else  if(number788 === 97){      client.reply(from, "Give a deep explanation of one item in front of you.",id);
} else  if(number788 === 98){      client.reply(from, "Paint your fingernails blindfolded with a pencil.",id);
} else  if(number788 === 99){      client.reply(from, "Touch any one of your friend’s elbow.",id);
} else  if(number788 === 100){      client.reply(from, "Let someone tie your hands with a plaster.",id);
} else  if(number788 === 101){      client.reply(from, "Write some text blindfolded on your Facebook timeline and post it.",id);
} else  if(number788 === 102){      client.reply(from, "Pour some sauce on your toes and let it dry.",id);
} else  if(number788 === 103){      client.reply(from, "Walk and dance at the corners of this room.",id);
} else  if(number788 === 104){      client.reply(from, "Do a prank call to your mother and tell “I’m expecting a baby soon”.",id);
} else  if(number788 === 105){      client.reply(from, "Put your handkerchief in your mouth until it completely turns wet.",id);
} else  if(number788 === 106){      client.reply(from, "Wear “Kiss me…It’s my Birthday” board over your neck for 20 minutes.",id);
} else  if(number788 === 107){      client.reply(from, "Do as many pushups you can.",id);
} else  if(number788 === 108){      client.reply(from, "Wear all your clothing inside out for 1 hour.",id);
} else  if(number788 === 109){      client.reply(from, "Drink a cup of tea/coffee like a dog.",id);
} else  if(number788 === 110){      client.reply(from, "Walk backward blindfolded until you find something.",id);
} else  if(number788 === 111){      client.reply(from, "Go outside and belly dance.",id);
} else  if(number788 === 112){      client.reply(from, "Peel banana using your toes.",id);
} else  if(number788 === 113){      client.reply(from, "Dip your t-shirt in soap water and keep it in the fridge for 20 minutes and wear it.",id);
} else  if(number788 === 114){      client.reply(from, "Rub your face with chocolate cream keep it for 20 minutes without rinsing it.",id);
} else  if(number788 === 115){      client.reply(from, "Take a selfie blindfolded and post it on your facebook timeline.",id);
} else  if(number788 === 116){      client.reply(from, "Go and hug to the first tree you saw outside.",id);
} else  if(number788 === 117){      client.reply(from, "Open your fridge and taste each and every item you find in that fridge.",id);
} else  if(number788 === 118){      client.reply(from, "Sing your favorite rhyme with child voice along with actions.",id);
} else  if(number788 === 119){      client.reply(from, "Imitate your class teacher’s voice and with actions.",id);
} else  if(number788 === 120){      client.reply(from, "Do cartwheel by holding your mobile.",id);
} else  if(number788 === 121){      client.reply(from, "Drink any pickle oil.",id);
} else  if(number788 === 122){      client.reply(from, "Put your mobile on your toes and walk backward blindfolded for 20 seconds.",id);
} else  if(number788 === 123){      client.reply(from, "Select one person here and rub their thigs.",id);
} else  if(number788 === 124){      client.reply(from, "Let someone roar like a lion nearer to your ear.",id);
} else  if(number788 === 125){      client.reply(from, "Sing your favorite song loudly while bathing.",id);
} else  if(number788 === 126){      client.reply(from, "Reveal your deepest secret.",id);
} else  if(number788 === 127){      client.reply(from, "Imagine your enemy is in front of you, now do war with him.",id);
} else  if(number788 === 128){      client.reply(from, "Squeeze lemon juice on your elbow and lick it.",id);
} else  if(number788 === 129){      client.reply(from, "Stop the next person you saw on road and tell “I Love You” to him or her.",id);
} else  if(number788 === 130){      client.reply(from, "Taste the ink of any pen in front of you.",id);
} else  if(number788 === 131){      client.reply(from, "Clean your sink using your toothbrush.",id);
} else  if(number788 === 132){      client.reply(from, "Fill your mouth completely with water and say your name.",id);
} else  if(number788 === 133){      client.reply(from, "Imagine you’re a spiderman and do some simple stunts like him.",id);
} else  if(number788 === 134){      client.reply(from, "Wear your opposite gender’s clothes.",id);
} else  if(number788 === 135){      client.reply(from, "Go to your neighbor’s house and have a meaningless conversation with them for 10 minutes.",id);
} else  if(number788 === 136){      client.reply(from, "Do manicure to your best friend.",id);
} else  if(number788 === 137){      client.reply(from, "Let someone tickle you for 20 seconds.",id);
} else  if(number788 === 138){      client.reply(from, "Eat two boiled eggs at a time.",id);
} else  if(number788 === 139){      client.reply(from, "Bite someone’s hand.",id);
} else  if(number788 === 140){      client.reply(from, "Watch one horror movie alone and ask someone to check your temperature.",id);
} else  if(number788 === 141){      client.reply(from, "Go outside and beg a stranger for money.",id);
} else  if(number788 === 142){      client.reply(from, "Select one song from Youtube and write lyrics of that song.",id);
} else  if(number788 === 143){      client.reply(from, "Walking along the road with wet white clothes for 1 minute.",id);
} else  if(number788 === 144){      client.reply(from, "Remove any one of your friend’s socks and smell his/her feet.",id);
} else  if(number788 === 145){      client.reply(from, "Let someone draw your face on your back with lipstick.",id);
} else  if(number788 === 146){      client.reply(from, "Wear your socks over your head for 10 minutes.",id);
} else  if(number788 === 147){      client.reply(from, "Eat a mouthful of unboiled noodles.",id);
} else  if(number788 === 148){      client.reply(from, "Imitate your friend crush’s voice.",id);
} else  if(number788 === 149){      client.reply(from, "Switch off your mobile for one hour.",id);
} else  if(number788 === 150){      client.reply(from, "Explain your first day of school with actions only.",id);
} else  if(number788 === 151){      client.reply(from, "Wear your shoes without wearing socks.",id);
} else  if(number788 === 152){      client.reply(from, "Guess everyone’s age here, if it was wrong they will tickle for 30 seconds.",id);
} else  if(number788 === 153){      client.reply(from, "Take a selfie while picking your nose and post that picture on your Facebook timeline.",id);
} else  if(number788 === 154){      client.reply(from, "Let someone kiss on your forehead with full of lipstick on his/her lips.",id);
} else  if(number788 === 155){      client.reply(from, "Go to your nearby tree and argue with it for 20 minutes.",id);
} else  if(number788 === 156){      client.reply(from, "Let someone kiss you under your chin for 30 seconds.",id);
} else  if(number788 === 157){      client.reply(from, "Act like a dead body",id);
} else  if(number788 === 158){      client.reply(from, "Explain your worst bathroom experience.",id);
} else  if(number788 === 159){      client.reply(from, "Ask someone to prank you.",id);
} else  if(number788 === 160){      client.reply(from, "Bite someone’s lefthand fingernails.",id);
} else  if(number788 === 161){      client.reply(from, "Stand on your hands and drink one glass of water.",id);
} else  if(number788 === 162){      client.reply(from, "Give a body massage to someone here for few minutes.",id);
} else  if(number788 === 163){      client.reply(from, "Spit as far as you can.",id);
} else  if(number788 === 164){      client.reply(from, "Let someone give you a hairstyle and you have to be with that style for one day.",id);
} else  if(number788 === 165){      client.reply(from, "Call your crush and flirt him/her.",id);
} else  if(number788 === 166){      client.reply(from, "Put your finger on someone’s ear.",id);
} else  if(number788 === 167){      client.reply(from, "Open dial pad and type one random number and do meaningless conversation with them.",id);
} else  if(number788 === 168){      client.reply(from, "Give high-five to everyone you see on road for 10 minutes.",id);
} else  if(number788 === 169){      client.reply(from, "Do 25 situps and not to pause between them.",id);
} else  if(number788 === 170){      client.reply(from, "Place one glass with full of water and stand on a single leg for 5 minutes.",id);
} else  if(number788 === 171){      client.reply(from, "Try to stand on your toes for at least 30 seconds.",id);
} else  if(number788 === 172){      client.reply(from, "Do four back cartwheel in a row.",id);
} else  if(number788 === 173){      client.reply(from, "Let someone shave your beard.",id);
} else  if(number788 === 174){      client.reply(from, "Eat one watermelon with seeds.",id);
} else  if(number788 === 175){      client.reply(from, "Imagine you’re a rat and act how you will escape from the cat.",id);
} else  if(number788 === 176){      client.reply(from, "Let someone play music and you will guess that song name. if wrong they will give a small punch on your head.",id);
} else  if(number788 === 177){      client.reply(from, "Let someone send one message to anyone from your contacts.",id);
} else  if(number788 === 178){      client.reply(from, "Taste one drop of coconut oil.",id);
} else  if(number788 === 179){      client.reply(from, "Do break dance for a slow song up to 3 minutes.",id);
} else  if(number788 === 180){      client.reply(from, "Select one person in the room and dance with him/her.",id);
} else  if(number788 === 181){      client.reply(from, "Select one movie name and act until your friends guess that movie name.",id);
} else  if(number788 === 182){      client.reply(from, "Make every person smile here, if not keep going until everyone smile.",id);
} else  if(number788 === 183){      client.reply(from, "Write any funny words on your forehead and keep it for half day.",id);
} else  if(number788 === 184){      client.reply(from, "Take the dustbin from the kitchen and sell it to an unknown person.",id);
} else  if(number788 === 185){      client.reply(from, "Crack two eggs on your head.",id);
} else  if(number788 === 186){      client.reply(from, "Select one prank video from youtube and do exactly what they do in that video.",id);
} else  if(number788 === 187){      client.reply(from, "Close your eyes, let someone kiss you and you have to guess who he/she is.",id);
} else  if(number788 === 188){      client.reply(from, "Attempt to do one magic trick.",id);
} else  if(number788 === 189){      client.reply(from, "Select one person of your same gender and talk with him/her for 10 minutes.",id);
} else  if(number788 === 190){      client.reply(from, "Act like someone’s pet for 30 minutes.",id);
} else  if(number788 === 191){      client.reply(from, "Let someone give you one object and compose a poem on that object.",id);
} else  if(number788 === 192){      client.reply(from, "Select one person blindfolded and get slapped.",id);
} else  if(number788 === 193){      client.reply(from, "Imitate your favorite celebrity and make everyone laugh.",id);
} else  if(number788 === 194){      client.reply(from, "Eat one spoon of garlic paste.",id);}
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
                  
             
            
