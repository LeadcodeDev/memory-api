import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Game from "App/Models/Game";

export default class GamesController {
  public async index ({}: HttpContextContract) {
    return Game.query().orderBy('created_at', 'desc')
  }

  public async store ({ request }: HttpContextContract) {
    const data = await request.validate({
      schema: schema.create({
        score: schema.number(),
        essais: schema.number(),
      })
    })

    await Game.create(data)
  }
}
