module.exports = {
    // sessionActive: req => (req.session?.currentUser ? true : false),

    // role: (req, ...rolesToCheck) => rolesToCheck.includes(req.session.currentUser?.role),

    // randomToken: () => {
    //     let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //     let randomToken = ''
    //     for (let i = 32; i > 0; --i) randomToken += str[Math.floor(Math.random() * str.length)]
    //     return randomToken
    // },

    // currentUser: (req) => {
    //     if (req.session.currentUser) return req.session.currentUser
    //     // return req.session ? req.session?.currentUser : null
    // },

    randomToken(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    },


    emails: (userObj, req) => {


        // const baseUrl = req.protocol + '://' + req.get('host')
        const baseUrl = req.protocol + '://localhost:3000'


        return {
            from: 'Space Booking',
            to: userObj.email,
            subject: 'Reset your password ',
            text: '',
            html: `'<h1> reset password</h1><br>
                <a href="${baseUrl}/reset/password/${userObj.token}">Get confirmed</a>`,
        }

    },
}
