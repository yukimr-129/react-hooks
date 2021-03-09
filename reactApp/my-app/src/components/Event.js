import React from 'react'
// import reducer from '../reducers';

const Event = (props) => {
    const { event, dispatch } = props
    const handleClickDelete = (index) => {
        const result = window.confirm(`【Title: ${event.title}】のイベントを削除しますか？`)
        if (result) {
            dispatch({
              type: 'DELETE_EVENT',
              id: index
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