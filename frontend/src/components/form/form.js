import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import Filebase from 'react-file-base64'
import { useDispatch } from 'react-redux'

import { addImage } from '../../actions/action'
import './css/form.css'


const Form = () => {
	const defaultState = { author: '', title: '', description: '', tags: '', image: '' }
	const [formData, setFormData] = useState(defaultState)
	const dispatch = useDispatch()
	
	const handleSubmit = e => {
		e.preventDefault()

		dispatch(addImage(formData))
	}
	
	return(
		<form noValidate onSubmit={handleSubmit}>
			<TextField label="Author" variant="outlined" name="Author" value={formData.author} onChange={e => setFormData({ ...formData, author: e.target.value })} />
			<br /><br />
			<TextField label="Title" variant="outlined" name="Title" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
			<br /><br />
			<TextField label="Description" variant="outlined" name="Description" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
			<br /><br />
			<TextField label="Tags" variant="outlined" name="Tags" value={formData.tags} onChange={e => setFormData({ ...formData, tags: e.target.value })} />
			<br /><br />
			<Filebase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, image: base64 })} />
			<br /><br />
			<Button type="submit" variant="outlined">Submit</Button>
		</form>
	)
}

export default Form