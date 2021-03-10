import React, { useContext } from 'react'
import reducer from '../reducers/index';
import AppContext from '../contexts/AppContext'
import OperationLog from './OperationLog'

const OperationLogs = () => {
    const { state } = useContext(AppContext)
    return (
        <>
            <h4>捜査ログ一覧</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>内容</th>
                        <th>日時</th>
                    </tr>
                </thead>
                <tbody>
                    {state.oparationLogs.map((log, index) => {
                    return (
                        <OperationLog key={index} log={log} />
                    )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default OperationLogs