import React, { useState, useContext } from 'react'
import { CREATE_EVENT } from '../actions'
import { DELETE_ALL_EVENT } from '../actions'
import { ADD_OPERATION_LOG } from '../actions'
import { DLETE_ALL_OPERATION_LOG } from '../actions'
import AppContext from '../contexts/AppContext'
import { timecurrent } from '../utils'

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  const addTitle = (e) => {
    setTitle(e.target.value);
    
  }

  const addBody = (e) => {
    setBody(e.target.value)
  }

  const addEvent = (e) => {
    e.preventDefault()
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })

    dispatch({
        type: ADD_OPERATION_LOG,
        description: 'イベントを作成しました',
        opratedAt: timecurrent()
    })
    setTitle('')
    setBody('')
  }

  const DleteAllEvents = (e) => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを削除しますか？')
    if (result) {
      dispatch({
        type: DELETE_ALL_EVENT
      }) 

      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました',
        opratedAt: timecurrent()
      }) 
    } else {  
      return
    }
  }

  const dleteAllOparationLogs = (e) => {
      e.preventDefault()
      const result = window.confirm('全てログを削除しますか？')
      if (result) {
          dispatch({ type: DLETE_ALL_OPERATION_LOG })
      } else {
          return
      }
  }

    const unCreatetable = title === '' || body === ''
    const unDletetable = state.events.length === 0
    const unDletetableLogs = state.oparationLogs.length === 0
    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form className="mb-4">
            <div className="form-group">
                <label htmlFor="formEventTitle">タイトル</label>
                <input className="form-control" id="formEventTitle" value={title} onChange={addTitle}/>
            </div>

            <div className="form-group">
                <label htmlFor="formEventBody">ボディー</label>
                <textarea className="form-control" id="formEventBody" value={body} onChange={addBody}/>
            </div>

            <button className="btn btn-primary mr-1" onClick={addEvent} disabled={unCreatetable} >イベント作成</button>
            <button className="btn btn-danger mr-1" onClick={DleteAllEvents} disabled={unDletetable}>全て削除</button>
            <button className="btn btn-danger" onClick={dleteAllOparationLogs} disabled={unDletetableLogs}>全てのログを削除</button>
            </form>
        </>
    )
}

export default EventForm