const config = {
    user: "admin",
    password: "Biz#Cal$2022",
    server: "imenca.c0ecn0ih86sl.ap-southeast-1.rds.amazonaws.com",
    database: "fci",
    options: {
      //encrypt: true // if using Azure, set to true
      //instanceName: 'RIDDHI',
      //enableArithAbort: true
      trustedConnection: true,
      trustServerCertificate: true
    },
    port: 1433
  };
  module.exports=config;