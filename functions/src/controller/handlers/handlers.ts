import * as express from 'express';
import { db, auth } from '../../middleware/admin'
import { isValidUsr } from '../../utils/validators'
import { firebaseConfig } from "../../middleware/config"

interface Users {
    email: String,
    password: String,
    confirmPassword: String,
    handle: String,
    cred: String
}

export const getTest = async (req: express.Request, res: express.Response) => {
    res.json({ hello: "hello" })
}

export const signup = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password: password, confirmPassword, handle } = req.body
        const newUser = {
            email,
            password,
            confirmPassword,
            handle
        } as Users;
        const errors = await isValidUsr(newUser);
        if (Object.keys(errors).length) {
            return res.status(400).json(errors);
        }
        const doc = await db.doc(`/users/${handle}`).get();

        if (doc.exists) {
            return res.status(400).json({ handle: `this handle is already take` });
        }
        const data = await auth.createUserWithEmailAndPassword(
            email,
            password
        );
        if (data.user) {
            const userId = data.user.uid;
            const token = await data.user.getIdToken();

            const userCredentials = {
                handle,
                email,
                createdAt: new Date().toISOString(),
                imageUrl: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/no-img.png?alt=media`,
                userId,
            };

            await db.doc(`/users/${newUser.handle}`).set(userCredentials);
            return res.status(201).json({ token });
        }
        return res
            .status(500)
            .json({ general: "Something went wrong, please try again." })

    } catch (err) {
        console.error(err);
        if (err.code === "auth/email-already-in-use") {
            return res.status(400).json({ message: "Email is already in use" });
        }
        return res
            .status(500)
            .json({ general: "Something went wrong, please try again." });
    }
}

export const login = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body
        const user = {
            email,
            password
        } as Users;
        const errors = await isValidUsr(user);
        if (Object.keys(errors).length) {
            return res.status(400).json(errors);
        }

        const data = await auth.signInWithEmailAndPassword(
            email,
            password
        );
        if (data.user) {
            const token = await data.user.getIdToken();
            return res.status(201).json({ token });
        }
        return res
            .status(500)
            .json({ general: "Something went wrong, please try again." })

    } catch (err) {
        console.error(err);
        return res
            .status(403)
            .json({ general: "Wrong credentials, please try again" });
    }
}