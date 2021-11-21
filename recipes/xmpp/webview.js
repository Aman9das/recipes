// xmpp integration
/*jshint esversion: 6 */
module.exports = (Franz) => {
    function getMessages() {
        let direct = 0;
        let indirect = 0;
        document.querySelectorAll('.msgs-indicator').forEach(indicator => {
            direct += parseInt(indicator.innerText, 10)
        })
        
        direct = direct / 2 // as the messages are provided in 2 different locations..
        Franz.setBadge(direct, indirect);
    }

    Franz.loop(getMessages);
};
