import {createContext, useReducer} from 'react';

import {mails} from '../Data';

export const EmailContext = createContext();

export const EmailProvider = ({children}) => {

    const initialState = {data: mails, emailData: mails, starredStatus: false, unreadStatus: false, starUnstar: true}

    // const reducer = (state, action) => {
    //     switch(action.type){
    //         case 'starred':
    //             return {...state, starredStatus: !state.starredStatus, data: state.emailData.filter(({isStarred}) => isStarred)};
    //         case 'unread':
    //             return {...state, unreadStatus: !state.unreadStatus, data: state.emailData.filter(({unread}) => unread)};
    //         case 'starunstar':
    //             return {...state, data: state.data.map(() => {})}
    //         default:
    //             return state;
    //     }
    // }


    const reducer = (state, action) => {
        switch (action.type) {
            case 'starred':
                return {
                    ...state,
                    starredStatus: !state.starredStatus,
                    data: state.emailData.filter(({ isStarred, unread }) => {
                        const starredFilter = !state.starredStatus ? isStarred : true;
                        const unreadFilter = state.unreadStatus ? unread : true;
                        return starredFilter && unreadFilter;
                    })
                };
            case 'unread':
                return {
                    ...state,
                    unreadStatus: !state.unreadStatus,
                    data: state.emailData.filter(({ isStarred, unread }) => {
                        const starredFilter = state.starredStatus ? isStarred : true;
                        const unreadFilter = !state.unreadStatus ? unread : true;
                        return starredFilter && unreadFilter;
                    })
                };
            default:
                return state;
        }
    };

   
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <EmailContext.Provider value={{state, dispatch}}>
            {children}
        </EmailContext.Provider>
    )
}
