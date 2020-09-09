/**
 *  reducer 数据处理
 * */
import {type} from './../action'

const initialState = {
    menuName: '首页'
}

export default (state = initialState, action) => {
    switch (action) {
        case type.SWITCH_MENUS:
            return {
                ...state,
                menuName: action.menuName
            }
            break;
        default:
            break;
    }
}