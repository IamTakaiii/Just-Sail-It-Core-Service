import Drive from '@ioc:Adonis/Core/Drive'
import fs from 'fs'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Project from 'App/Models/Project'

export default class ProjectsController {
	public async getById({ request, response }: HttpContextContract) {
		const projectId: string = request.params().id
		const project: Project = await Project.findByOrFail('id', projectId)
		return response.send(project)
	}

	public async getByUserId({ request, response }: HttpContextContract) {
		const { page, limit }: Record<string, number> = request.qs()
		const userId:string = request.params().userId
		const allProject: Project[] = await Project
			.query()
			.where('user_id', userId)
			.orderBy('end_date', 'asc')
			.paginate(page, limit)
		return response.send(allProject)
	}

  public async create({ request, response }:HttpContextContract) {
    const images = request.files('images')
    images.map(async image => {
      if (image) {
        const slugFileName = "project-" + Math.random()
        const fileNames = `${slugFileName}.${image.extname}`
        const fileStream = fs.createReadStream(image.tmpPath!)
        await Drive.putStream(fileNames, fileStream, {
          contentType: image.headers['content-type']
        })
      }
    })
  }

	// public async updateById({ request, response }: HttpContextContract) {
	// }

  // public async removeById({request, response}: HttpContextContract) {
  // }

}

