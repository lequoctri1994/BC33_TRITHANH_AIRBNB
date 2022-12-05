import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        state: (state = 1) => {
            return state
        }
    }
})

//type của dispatch và state tổng
export type RootState = ReturnType<typeof store.getState>

export type DispatchType = typeof store.dispatch;