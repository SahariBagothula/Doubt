import {useContext} from 'react';
import {EmailContext} from '../contexts/EmailContexts';


const Inbox = () => {

    const {state, dispatch} = useContext(EmailContext);

    return(
        <>
            <h1>Inbox page</h1>
            <label>
                <input type='checkbox' checked={state.starredStatus} onChange={() => dispatch({type: 'starred'})}/>Show starred emails
            </label>
            <label>
                <input type='checkbox' checked={state.unreadStatus} onChange={() => dispatch({type: 'unread'})}/>Show unread emails
            </label>
            <ol>
                {
                    state?.data?.map(({ mId,
                        unread,
                        isStarred,
                        subject,
                        content}) => {
                            return(
                                <li key={mId} style={{border: '1px solid black', padding: '5px', margin: '10px'}}>
                                    <p>Subject: {subject}</p>
                                    <p>Starred status: {isStarred ? 'Starred' : 'Not starred'}</p>
                                    <p>Unread status: {unread ? 'Unread' : 'Not unread'}</p>
                                    <button></button>
                                </li>
                            )
                        })
                }
            </ol>
        </>
    )
}

export default Inbox;