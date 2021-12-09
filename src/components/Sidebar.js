import React from 'react'
// import axios from 'axios'
// import { Button, Card, Form, FormControl, Modal } from 'react-bootstrap'
import CreateSub from './CreateSub'
import CreatePost from './CreatePost'
import Subreaddit from '../pages/Subreaddit';
// import SingleModalForm from './SingleModalForm'

export default function Sidebar(props) {
console.log({props})
  return Subreaddit ? (
    <>
      <CreatePost subId={props.subId} 
			subName={props.posts}
			/>
      <CreateSub />
    </>
  ) : <CreateSub />
}
