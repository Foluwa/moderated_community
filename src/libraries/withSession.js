import { withIronSession } from "next-iron-session";

const withSession = (app) => {
    return withIronSession(app, {
        password: "bXlzcWxhc3N3b3JkMTIzNDU2Nzg5MA====",
        cookieName: "simple-nextjs-socketio-chat",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        }
    });
};

export default withSession;