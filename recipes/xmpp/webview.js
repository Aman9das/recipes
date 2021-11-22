// xmpp integration
/*jshint esversion: 6 */
module.exports = (Ferdi) => {
    function getMessages() {
        let direct = 0;
        let indirect = 0;
        document.querySelectorAll('.msgs-indicator').forEach(indicator => {
            direct += Ferdi.safeParseInt(indicator.innerText, 10)
        })
        
        direct = direct / 2 // as the messages are provided in 2 different locations..
        Ferdi.setBadge(direct);
    }

    Ferdi.loop(getMessages);
};
