
import { useMemo } from "react"

export const useNavRoutes = () =>{

    const routes = useMemo(()=>[
        {
            label : 'Most Recent',
            tabname : 'most-recent',

        },
        {
            label : 'Feed',
            tabname : 'feed',
            
        },
        {
            label : 'Trending',
            tabname : 'trending',
            
        },
        {
            label : 'Random',
            tabname : 'random',
            
        }

    ],[])

    return routes
}