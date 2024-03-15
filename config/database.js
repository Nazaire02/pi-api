var urlLocalhostDatabase = "mongodb://127.0.0.1:27017/pi-bd";
var urlDockerDatabase="";

if (process.env.NODE_ENV === 'prod'){
    module.exports={
        database:urlDockerDatabase,
        secret: 'gfdhjgèhgj144',
        mongo_user:process.env.MONGO_USER,
        mongo_password:process.env.MONGO_PASSWORD,
    };
}
else if (process.env.NODE_ENV === 'dev'){
    module.exports={
        database:urlDockerDatabase,
        secret: 'gfdhjgèhgj144',
        mongo_user:process.env.MONGO_USER,
        mongo_password:process.env.MONGO_PASSWORD,
    };
}
else {
    module.exports={
        database:urlLocalhostDatabase,
        secret: '',
        mongo_user:process.env.MONGO_USER,
        mongo_password:process.env.MONGO_PASSWORD,
    };
}