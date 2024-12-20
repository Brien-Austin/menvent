import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

type NavigationType = {
    currentTab : string
}
const loadInitialTab = (): string => {
    try {
        const savedTab = localStorage.getItem('currentTab');
        return savedTab || 'most-recent';
    } catch {
        return 'most-recent';
    }
}
const initialState : NavigationType = {
    currentTab : loadInitialTab()
}

export const navigationSlice = createSlice({
    name : "navigation",
    initialState,
    reducers : {
        setCurrentTab : (state,action : PayloadAction<string>)=>{
            state.currentTab = action.payload
            if(typeof window != 'undefined'){
                localStorage.setItem('currentTab',action.payload)

            } 
           

        },
        initializeTabFromStorage:(state) =>{
            if(typeof window != 'undefined'){
                const savedTab = localStorage.getItem('currentTab')
                if(savedTab){
                    state.currentTab = savedTab
                }
            }
        }
    }

})

export const {setCurrentTab,initializeTabFromStorage} = navigationSlice.actions;
export default navigationSlice.reducer