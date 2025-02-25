import { Snack } from './models/Snacks.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  snacks = [
    new Snack({ snackName: 'candyBar', snackPrice: 2.00, snackPic: 'https://images.unsplash.com/photo-1626697556651-67ebdcb8cbd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNob2NvbGF0ZSUyMGJhcnxlbnwwfHwwfHx8Mg%3D%3D' }),
    new Snack({ snackName: 'lollypop', snackPrice: 1.00, snackPic: 'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuZHl8ZW58MHx8MHx8fDA%3D' }),
    new Snack({ snackName: 'chips', snackPrice: 2.50, snackPic: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoaXBzfGVufDB8fDB8fHww' }),
    new Snack({ snackName: 'sportsDrink', snackPrice: 2.00, snackPic: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNwb3J0cyUyMGRyaW5rfGVufDB8fDB8fHww' }),
    new Snack({ snackName: 'Soda', snackPrice: 3.00, snackPic: 'https://images.unsplash.com/photo-1605548230624-8d2d0419c517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29kYXxlbnwwfHwwfHx8Mg%3D%3D' }),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())