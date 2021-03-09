import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import Event from './Event';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
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
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  const DleteAllEvents = (e) => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを削除しますか？')
    if (result) {
      dispatch({
        type: 'DELETE_ALL_EVENT'
      }) 
    } else {
      return
    }
  }

const unCreatetable = title === '' || body === ''
const unDletetable = state.length === 0

  return (
    <>
      <div className="container-fluid">
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
          <button className="btn btn-danger">全てのログを削除</button>
        </form>

        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state.map((event, index) => {
              return (
                <Event key={index} event={event} dispatch={dispatch}/>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}




export default App
