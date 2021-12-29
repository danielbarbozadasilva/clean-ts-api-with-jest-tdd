module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {

      // search version db machine
      version: '4.0.3',
      skipMD5: true
    },
    autoStart: false
  }
}
