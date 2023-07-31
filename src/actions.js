import {firebaseapp}  from './firebase'
import * as firebase  from 'firebase'
import 'firebase/firestore'

const db = firebase.firestore(firebaseapp)

export const getCollection = async (collection) => {
    const result = { statusResponse : false, data: null, error : null }
    try{
        const data = await db.getCollection( collection).get()
    }catch (error){
        result.error = error
    }
    return result
}
