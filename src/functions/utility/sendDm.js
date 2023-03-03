//---------------------------🤍🍷 'Zer0Power 🤍🍷---------------------------//
const axios = require('axios');
const config = require('../../config.json');

module.exports = (client) => {
    client.sendIP = async () => {

        async function getIP() {

            const options = {
                method: "get",
                url: "http://api.0powerdev.ir/ip/get",
            };

            let ip = await axios(options).catch((error) => { console.log(error) })
            if (!ip.data.status == 200) {
                return { ip: "Couldn't resolve ip" };
            } else {
                return ip.data.ip;
            }
        }
        try {
            const ipData = await getIP()

            client.users.fetch(config.adminId).then(dm => {
                dm.send(":satellite: Your currnet ip address is:`" + ipData + "`")
            })

        } catch (err) {
            return err;
        }


        setInterval(async () => {
            try {
                const ipData = await getIP()

                client.sendIP = async () => {
                    client.users.fetch(config.adminId).then(dm => {
                        dm.send(ipData)
                    })
                }


            } catch (err) {
                if (err) return err;
            }

        }, 21600000);


    }
}
//---------------------------🤍🍷 'Zer0Power 🤍🍷---------------------------//
