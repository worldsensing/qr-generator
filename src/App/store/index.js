export const QRS = 'QRS',
  THEME = 'THEME',
  INPUT_OPTION = 'INPUT_OPTION'

class Store {
  static set = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))
  static get = key => JSON.parse(window.localStorage.getItem(key))
  static remove = key => window.localStorage.removeItem(key)
  static clear = () => window.localStorage.clear()
}

export default Store