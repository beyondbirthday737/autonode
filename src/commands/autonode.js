

const command = {
  name: 'autonode',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to autonode')
  },
}

module.exports = command
