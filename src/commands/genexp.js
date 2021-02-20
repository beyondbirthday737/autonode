  module.exports = {
    name: 'genexp',
    alias: ['gxp'],
    description: 'Create an express structure',
    run: async toolbox => {
      const {
        parameters,
        generateExpress,
        print: { info },
      } = toolbox
  
      await generateExpress('src/')
  
      info(`Generated`)
    },
  }
  