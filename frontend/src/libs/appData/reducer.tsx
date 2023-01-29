import { APP_DATA_ACTIONS } from "../../utils/constants/appData";
import { writeData, writeGroupData, removeData } from "../../helper";

export default function appDataReducer(appData: any, action: any) {
  const { type, dataPath, dataValue, payLoads } = action;

  switch (type) {
    case APP_DATA_ACTIONS.UPDATE:
      return writeData(appData, dataPath, dataValue);
    case APP_DATA_ACTIONS.UPDATE_GROUP:
      return writeGroupData(appData, payLoads);
    case APP_DATA_ACTIONS.REMOVE:
      return removeData(appData, dataPath);

    default:
      throw new Error(`appData action type ${type} does not exist`);
  }
}
