import { IBaseService } from "../../services/common/interfaces/IBaseBusiness";
import { IReadController } from "./IReadController";
import { IWriteController } from "./IWriteController";

export interface IBaseController<T extends IBaseService<Object>> extends IReadController, IWriteController {
}