export const storageService = {
    load,
    save,
    clear
}

const key = 'keep_DB'

function load() {
    const str = localStorage.getItem(key)
    return JSON.parse(str)
}

function save(val) {
    const str = JSON.stringify(val)
    localStorage.setItem(key, str)
}

function clear() {
    localStorage.removeItem(key)
}