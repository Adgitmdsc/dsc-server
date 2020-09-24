require("dotenv").config();
const admin = require("firebase-admin");
require("dotenv").config();
var serviceAccount = require("../dsc-adgitm-firebase-adminsdk-46rtd-c396df0d21.json");

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  apiKey: `${process.env.apiKey}`,
  authDomain: `${process.env.authDomain}`,
  databaseURL: `${process.env.databaseURL}`,
  projectId: `${process.env.projectId}`,
  storageBucket: `${process.env.storageBucket}`,
  messagingSenderId: `${process.env.messagingSenderId}`,
  appId: `${process.env.appId}`,
  measurementId: `${process.env.measurementId}`,
};

const firebase = require("firebase");
admin.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
var db = admin.firestore();

async function routes(fastify, options) {

  fastify.get("/", async (request, reply) => {
    reply.code(200).send({ msg: "Hello World" });
  });

  fastify.get("/certificate/:id", async (request, reply) => {

    let id = request.params.id;
    await db
      .collection("certificates")
      .doc(`${id}`)
      .get()
      .then((firebase_data) => {
        if (firebase_data.data() == undefined) {
          reply.code(404).send("error");
        } else {
          let data = JSON.stringify(firebase_data.data());
          reply.code(200).send(data);
        }
      })
      .catch((error) => {
        reply.code(404).send("error");
      });
      
  });
}

module.exports = routes;
