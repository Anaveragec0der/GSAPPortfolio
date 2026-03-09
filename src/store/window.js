import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@constants"
import { immer } from "zustand/middleware/immer"
import { create } from "zustand"

const useWindowStore = create(immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) => set(({ windows, nextZIndex }) => {
        const win = windows[windowKey]
        if (!win) return
        win.isOpen = true
        win.zIndex = nextZIndex,
            win.data = data ?? win.data
        nextZIndex++
    }),

    closeWindow: (windowKey) => set(({ windows, nextZIndex }) => {
        const win = windows[windowKey]
        if (!win) return
        win.isOpen = false
        win.zIndex = INITIAL_Z_INDEX,
        win.data = null
    }),

    focusWindow: (windowKey) => set(({ windows, nextZIndex }) => {
        const win= windows[windowKey]
        if (!win) return
        win.zIndex=nextZIndex++
    })
}))
)

export default useWindowStore