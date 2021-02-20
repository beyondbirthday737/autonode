module.exports = (toolbox) => {
    const { filesystem, template, print: { success, error } } = toolbox

    async function generateExpress(folder) {
        async function generateSubfolder(subfolder, subfolder2, file) {
                await template.generate({
                    template: `${file}.ejs`,
                    target: `${folder}/${subfolder}/${subfolder2}/${file}`
                })

        }

        await template.generate({
            template: 'app.js.ejs',
            target: `${folder}/app.js`
        })

        await template.generate({
            template: 'routes.js.ejs',
            target: `${folder}/routes.js`
        })

        // generate app folder
        await generateSubfolder('app', 'controllers', 'index.js')
        await generateSubfolder('app', 'middlewares', 'index.js')
        await generateSubfolder('app', 'models', 'index.js')

        await generateSubfolder('config', "", 'databaseConfig.js')
        await generateSubfolder('database', "", 'database.js')

    }
    

    toolbox.generateExpress = generateExpress
}