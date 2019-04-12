import glob from 'glob'
import path from 'path'
import getConfig from './config'
import getConfigStore from './config.store'

const dirComponents = path.resolve(__dirname, '../components/')
const files = glob.sync(dirComponents + '/**/*.vue')
let configs = []
for (const key in files) {
  configs = [...configs, getConfig(files[key])]
}

const dirStores = path.resolve(__dirname, '../store/')
const storeFiles = glob.sync(dirStores + '/**/*.js')

for (const key in storeFiles) {
  configs = [...configs, getConfigStore(storeFiles[key])]
}
export default configs