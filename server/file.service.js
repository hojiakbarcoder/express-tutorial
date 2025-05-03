import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

class FileService {
	save(file) {
		try {
			const fileName = uuidv4() + '.jpg'
			const currentDir = __dirname
			const staticDir = path.join(currentDir, '..', 'static')
			const filePath = path.join(staticDir, fileName)

			if (!fs.existsSync(staticDir)) {
				fs.mkdirSync(staticDir, { recursive: true })
			}

			file.mv(filePath)
			return fileName
		} catch (error) {
			throw new Error(`error saving file: ${error}`)
		}
	}
}

const fileService = new FileService()

export default fileService
