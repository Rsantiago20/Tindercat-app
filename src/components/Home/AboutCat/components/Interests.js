import React, { useEffect, useState } from 'react'
import { InterestOne } from './InterestOne'
// import { INTERESTS } from '../../../../data/db'
import { HTTP_CONSTANTS } from '../../../../config/http-constants'
import { requestHttp } from '../../../../config/http-server'

export const Interest = ({ interestCat = [] }) => {

    const [interestList, setInterestList] = useState([])
    const [interestListCat, setInterestListCat] = useState(interestCat)
    const [interestWithStatus, setInterestWithStatus] = useState([])

    const getInterestList = async () => {
        try {
            const endpoint = HTTP_CONSTANTS.interests
            const response = await requestHttp('get', endpoint)
            const { interests } = response
            setInterestList(interests)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getInterestList()

        return () => {}
    }, [])

    const mergeInterestList = () => {
        for(let i = 0; i < interestList.length; i++ ){
            const interestItem = interestList[i]
            const found = interestListCat.find(e => e === interestItem._id)
            if (found){
                interestItem.status = true
            }
        }
        setInterestWithStatus([...interestList])
    }

    useEffect(() => {
        mergeInterestList()
        return () => {}
    }, [interestList, interestListCat])

    return (
        <div className="interest-container">
            <h3> Interest List </h3>
            <hr />
            <div className="interests-box">
                {
                    interestWithStatus.map( (item, key) => <InterestOne key={ key } name={ item.interest } status={ item.status } /> )
                }
            </div>
        </div>
    )
}