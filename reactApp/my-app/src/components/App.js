import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <form className="mb-4">
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" id="formEventTitle"/>
          </div>

          <div className="form-group">
            <label htmlFor="formEventBody">ボディー</label>
            <textarea className="form-control" id="formEventBody"/>
          </div>

          <button className="btn btn-primary mr-1">イベント作成</button>
          <button className="btn btn-danger mr-1">全て削除</button>
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

          </tbody>
        </table>
      </div>
    </>
  );
}




export default App
