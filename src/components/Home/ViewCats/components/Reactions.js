import React, { useContext } from 'react'
import { ReactionIcon } from './Reaction-icon'
import { CatContext } from '../../../../contexts/CatContext'
import { HTTP_CONSTANTS } from '../../../../config/http-constants'
import { requestHttp } from '../../../../config/http-server'

export const Reactions = () =>  {

    const { catInteraction, setCatInteraction, setReloadCats } = useContext(CatContext)
    console.log(catInteraction)

    const LikedCat = async () => {
        try{
            const endpoint = HTTP_CONSTANTS.liked
            const data = { catIdLiked:catInteraction }
            const response = await requestHttp('post', endpoint, data)
            setReloadCats(true)
            console.log(response)
        }catch(err){
            console.error(err)
        }
    }

    const UnlikedCat = async () => {
        try{
            const endpoint = HTTP_CONSTANTS.unliked
            const data = { catIdUnliked:catInteraction }
            const response = await requestHttp('post', endpoint, data)
            setReloadCats(true)
            console.log(response)
        }catch(err){
            console.error(err)
        }
    }

     return (
    <div className="reactions">
        <div>
            <ReactionIcon name="heart-dislike" onPress={ UnlikedCat } />
        </div>
        <div>
            <ReactionIcon color="#C800AA" name="heart" onPress={ LikedCat } />
        </div>
    </div>
     )
}