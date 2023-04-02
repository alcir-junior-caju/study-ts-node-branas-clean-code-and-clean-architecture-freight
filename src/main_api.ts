import ZipCodeRepository from "./application/repository/ZipCodeRepository";
import CalculateFreight from "./application/usecase/CalculateFreight";
import ZipCode from "./domain/entity/ZipCode";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import HttpController from "./infra/http/HttpController";

const zipCodeRepository: ZipCodeRepository = {
  async get(code: string): Promise<ZipCode | undefined> {
    if (code === "22060030") {
      return new ZipCode("22060030", "", "", -27.5945, -48.5477);
    }
    if (code === "88015600") {
      return new ZipCode("88015600", "", "", -22.9129, -43.2003);
    }
  },
};
const calculateFreight = new CalculateFreight(zipCodeRepository);
const httpServer = new ExpressAdapter();
new HttpController(httpServer, calculateFreight);
httpServer.listen(3011);
