import dispatcher from '../Dispatcher'

export const COLOR_APP_ACTIONS = {
    CHANGE_COLOR: 'colorAppActions.ChangeColor'
}

export function changeColor(color) {
    dispatcher.dispatch({
        type: COLOR_APP_ACTIONS.CHANGE_COLOR,
        value: color
    })
}