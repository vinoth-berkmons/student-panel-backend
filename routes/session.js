const services = require('../services');
const config = require('../config')


async function login(req, res) {
    try {
        const user = await services.users.checkPassword(req.body.userName, req.body.password);
        const session = await services.sessions.createSession(user.id);
        res.cookie('Authorization', 'Bearer ' + session.sessionId, {
            expires: session.expiry,
        })
        res.json({ success: true, data: user });
    }
    catch (err) {
        console.error(`error logging in: ${err}`);
        res.status(500);
        res.json({ success: false, error: err });
    }
}

function session() {
    return {
        login: login,
    }
}

module.exports = session();