import React, { useState, useContext} from "react";
import { CREATE_EVENT, DELETE_ALL_EVENT } from '../actions'
import AppContext from "../contexts/AppContext";

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e) => {
    e.preventDefault()
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })

    setTitle('')
    setBody('')
  }

  const deleteAllEvents = (e) => {
    e.preventDefault()
    if (window.confirm("全て削除してもよろしいでしょうか?")){
      dispatch({type: DELETE_ALL_EVENT})
    }
  }

  const unCreatable = title === '' || body === ''

  return (
    <>
    <form>
      <div className="form-group">
        <label htmlFor="forEventTitle">タイトル</label>
        <input className="form-control" name="title" id="forEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="forEventBody">ボディー</label>
        <textarea className="form-control" name="forEventBody" id="forEventBody" value={body} onChange={e => setBody(e.target.value)}/>
      </div>
      <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
      <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
    </form>
    </>
  )
}

export default EventForm