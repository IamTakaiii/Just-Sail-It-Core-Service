import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Project from 'App/Models/Project'

const genUserId = ():string => (Math.floor(Math.random() * 999999999)).toString()
const genString =  ( ):string => Math.random().toString(36).slice(2, 50);
const sameUserId = genUserId()

export default class extends BaseSeeder {
  public async run () {
    await Project.createMany([
      {
        user_id: sameUserId,
        name: "First Project",
        description: `
          ### Bob

          - dwdwdwd
        `,
        catagories: [1,2,3],
        funding_goal: 50000,
        start_date: new Date("2022-03-25"),
        end_date: new Date("2022-03-25"),
        status: "Funding",
        total: 0,
        backers: 0,
      },
      {
        user_id: genUserId(),
        name: "Second Project",
        description: `
          ### Bob

          - dwdwdwd
        `,
        catagories: [1, 2, 3],
        funding_goal: 50000,
        start_date: new Date("2022-03-25"),
        end_date: new Date("2022-03-25"),
        status: "Funding",
        total: 0,
        backers: 0,
      },
      {
        user_id: sameUserId,
        name: "Second Project",
        description: `
          ### Bob

          - dwdwdwd
        `,
        catagories: [1, 2, 3],
        funding_goal: 50000,
        start_date: new Date("2022-03-25"),
        end_date: new Date("2022-03-25"),
        status: "Funding",
        total: 0,
        backers: 0,
      }
    ])
  }
}
