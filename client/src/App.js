import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Delete from './component/Delete'
import Get from './component/Get'
import Header from './component/Header'
import Main from './component/Main'
import Update from './component/Update'

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
			<Header />
				<Routes>
					<Route path='/' element={<Main/>}/>
					<Route path='/get' element={<Get/>}/>
					<Route path='/update' element={<Update/>}/>
					<Route path='/delete' element={<Delete/>}/>
				</Routes>
			</BrowserRouter>
		)
	}
}
