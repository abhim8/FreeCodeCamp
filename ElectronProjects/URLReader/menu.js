
// Modules
const {Menu, shell, app} = require('electron')


//Module function to create main app menu
module.exports = appWin => {

    // menu template
    let template = [
        {
            label: 'Items',
            submenu: [
                {
                    label: 'Add New',
                    accelerator: 'CmdOrCtrl+O',
                    click: () => {
                        appWin.send('menu-show-modal')
                    }
                },
                {
                    label: 'Read Item',
                    accelerator: 'CmdOrCtrl+Enter',
                    click: () => {
                        appWin.send('menu-open-item')
                    }
                },
                {
                    label: 'Delete Item',
                    accelerator: 'CmdOrCtrl+Backspace',
                    click: () => {
                        appWin.send('menu-delete-item')
                    }
                },
                {
                    label: 'Open in Browser',
                    accelerator: 'CmdOrCtrl+Shift+Enter',
                    click: () => {
                        appWin.send('menu-open-item-native')
                    }
                },
                {
                    label: 'Search Items',
                    accelerator: 'CmdOrCtrl+S',
                    click: () => {
                        appWin.send('menu-focus-search')
                    }
                }
            ]
        },
        {
            role: 'editMenu'
        },
        {
            role: 'windowMenu'
        },
        {
            role: 'help',
            submenu: [
                {
                    label: 'Learn More',
                    click: () => {
                        shell.openExternal('https://www.electronjs.org/')
                    }
                }
            ]
        }
    ]

    // create MAC app menu
    if( process.platform === 'darwin' ) template.unshift({role: 'appMenu'})

    // build menu 
    let menu = Menu.buildFromTemplate(template)


    // set as main app menu
    Menu.setApplicationMenu(menu)

}