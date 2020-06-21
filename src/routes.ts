import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
    
    const user = createUser({ 
        email: 'jaozeiro@gmail.com', 
        password: '123456',
        languages: ['portuguese', 'english'], 
        techs: ['Nodejs', 'Reactjs', 'React native', {title: 'Javascript', experience: 1000}]
    })
    
    return response.json({ message: 'Hello World' })
}

