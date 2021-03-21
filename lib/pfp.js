async function profilepic(contact, message, fs, groupAdmins, client) {
    try {      var ban = JSON.parse(fs.readFileSync('./lib/banned.json'))
       
                 var person = await client.getContact(contact)
                 var pfp = await client.getProfilePicFromServer(contact)
                 if (pfp === undefined) {
            var pic = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
                 } else {
                    var pic = pfp
                 } 
             const role = 'none'
             await client.sendFileFromUrl(message.from, pic, 'pfp.jpg',)} catch(err) {
                console.log(err)
                await client.reply(message.from, 'An error occured', message.id)
                
                }
                }
                
                module.exports = {
                  profilepic
                }
                   