let sidebarManager = apply => key => state => {
    return {
        [key]: apply(state[key]),
    }
}

const toggleSidebar = sidebarManager(previous => !previous);

export default toggleSidebar;