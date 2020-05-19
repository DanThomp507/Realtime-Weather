const argv = require('yargs')

  .options({
    location: {
      alias: '-l',
      describe: 'Please enter a location',
      type: 'string',
      nargs: 1,
      demand: true
    }
  })
  .help()
  .argv

module.exports = {
  argv
}