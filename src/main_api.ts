import CalculateFreight from "./application/usecase/CalculateFreight";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import HttpController from "./infra/http/HttpController";

const calculateFreight = new CalculateFreight();
const httpServer = new ExpressAdapter();
// const httpServer = new HapiHttpServer();
new HttpController(httpServer, calculateFreight);
httpServer.listen(3011);
