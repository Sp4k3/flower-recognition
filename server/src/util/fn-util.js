import * as fs from 'fs'
import path from 'path'

// Shuffle an array
export const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)

// Browse all images path from a given image folder
export const walk = async (dir) => {
  console.log(dir)
  let files = await fs.readdir(dir)
  files = await Promise.all(
    files.map(async file => {
      const filePath = path.join(dir, file)
      const stats = fs.stat(filePath)
      if (stats.isDirectory()) {
        return walk(filePath)
      } else if (stats.isFile()) {
        return filePath
      }
    }))
  console.log('files : ', await files)
  return files.reduce((all, folderContents) => all.concat(folderContents), [])
}
