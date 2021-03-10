import React, { useContext } from 'react'
import { DELETE_EVENT, ADD_OPERATION_LOG } from '../actions'
import AppContext from '../contexts/AppContext'
import { timecurrent } from '../utils'

const Event = (props) => {
    const { event } = props
    const { dispatch } = useContext(AppContext)

    const handleClickDelete = (index) => {
        const result = window.confirm(`【Title: ${event.title}】のイベントを削除しますか？`)
        
        if (result) {
            dispatch({
              type: DELETE_EVENT,
              id: index
            })

            dispatch({
                type: ADD_OPERATION_LOG,
                description: `【Title: ${event.title}】のイベントを削除しました`,
                opratedAt: timecurrent()
            })
        } else {
            return
        }
      }

    return (
        <tr>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button className="btn btn-danger" onClick={() => (handleClickDelete(event.id))}>削除</button></td>
        </tr>
    );
}

export default Event