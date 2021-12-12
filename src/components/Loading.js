import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
// import Loader from 'react-loader-spinner'
import bread from '../img/breadditLogoOnly.png'

export default function Loading() {
	return (
		<Container className="h-50">
			<Col className="text-center">
				{/* <Row>
					<Loader color="#FF5700" />
				</Row> */}
				<Row >
					<Col></Col>
					<Col>
						<img className='load-spinner'
							style={{ maxHeight: '200px', width: '200px' }}
							src={bread}
							alt="spinning breaddit logo"
						>
						</img>
					</Col>
					<Col></Col>
				</Row>
				<Row ><h1>LOAFING</h1></Row>
			</Col>
		</Container>
	)
}
