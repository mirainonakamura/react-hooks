import React, {useContext} from "react";

import { DELETE_EVENT } from '../actions'
import AppContext from "../contexts/AppContext";

const Event = ( {event} ) => {
  const {dispatch} = useContext(AppContext)
  const id = event.id
  const handleClickDeleteButton = () => {
    if (window.confirm(`id:"+ ${id} + "のイベントを削除しますか?`)){
      dispatch({
        type: DELETE_EVENT,
        id
      })
    }
  }
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td>
          <button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button>
        </td>
      </tr>
    </>
)
}
export default Event
