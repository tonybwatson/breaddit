import React from 'react'
// import axios from 'axios'
// import { Button, Card, Form, FormControl, Modal } from 'react-bootstrap'
import CreateSub from './CreateSub'
import CreatePost from './CreatePost'
// import SingleModalForm from './SingleModalForm'

export default function Sidebar(props) {
// console.log({props})
  return  ( 
    <>
		{!props.home &&
      <CreatePost subId={props.subId} 
			subName={props.posts}
			getPosts={props.getPosts}
			/>
		}
      <CreateSub />
    </>
  ) 
}
