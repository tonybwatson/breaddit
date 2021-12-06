import React from 'react'
import {Col, Row } from 'react-bootstrap'
import Loader from 'react-loader-spinner'

export default function Loading() {
    return (
        <div>
            <Col className="text-center">
            <Row>
                <Loader color="#FF5700" />
            </Row>
            <Row><h1>LOAFING</h1></Row>
        </Col>
        </div>
    )
}
