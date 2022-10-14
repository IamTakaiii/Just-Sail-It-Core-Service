import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        id: "125diwhduuijcn589Wdwojlakwdmw",
        email: "bot1@hotmail.com",
        username: "bot1",
        profile: {
          shortIntroduce: "this is example file",
          moreInfo: {
            img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%99%E0%B8%B8%E0%B8%81%E0%B9%84%E0%B8%AD%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%A1%E0%B8%88%E0%B8%B5%E0%B9%80%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B8%94%E0%B9%8C%E0%B8%AD%E0%B8%AD%E0%B8%9F%E0%B9%81%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C(IMGWorldsofAdventure).webp",
            text: "boboboboboobobobobobobobob"
          },
        },
      },
      {
        id: "475258xlpokdwopmdwoinanfowfnowfnwofnonoifnwfown",
        email: "bot2@hotmail.com",
        username: "bot2",
        profile: {
          shortIntroduce: "this is example file",
          moreInfo: {
            img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%99%E0%B8%B8%E0%B8%81%E0%B9%84%E0%B8%AD%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%A1%E0%B8%88%E0%B8%B5%E0%B9%80%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B8%94%E0%B9%8C%E0%B8%AD%E0%B8%AD%E0%B8%9F%E0%B9%81%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C(IMGWorldsofAdventure).webp",
            text: "boboboboboobobobobobobobob"
          },
        },
      },
    ]);
  }
}
