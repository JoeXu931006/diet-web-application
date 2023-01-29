import * as React from "react";
import { get } from "lodash";
import {
  IAppContext,
  IUseAppProps,
  IAppContextProvider,
  IUpdateGroupData,
} from "../../utils/interfaces/appData";
import AppDataReducer from "./reducer";
import { APP_DATA_ACTIONS } from "../../utils/constants/appData";

const AppDataContext = React.createContext<Partial<IAppContext>>({});

export const useAppData = (props: IUseAppProps = {}) => {
  const { dataPath = "" } = props;
  const contextProps = React.useContext(AppDataContext);
  const appData = props.appData || contextProps.appData;
  const updateAppData = props.updateAppData || contextProps.updateAppData;
  const updateAppGroupData =
    props.updateAppGroupData || contextProps.updateAppGroupData;
  const removeAppData = props.removeAppData || contextProps.removeAppData;

  const dataValue = appData && dataPath ? get(appData, dataPath) : undefined;

  return {
    appData,
    updateAppData,
    removeAppData,
    updateAppGroupData,
    dataValue,
  };
};

export const AppDataProvider: React.FC<IAppContextProvider> = ({
  initialAppData = {},
  children,
}) => {
  const [appData, dispatch] = React.useReducer(AppDataReducer, initialAppData);

  function updateAppData({ dataPath, dataValue }: any) {
    dispatch({ type: APP_DATA_ACTIONS.UPDATE, dataPath, dataValue });
  }

  function updateAppGroupData(payLoads: IUpdateGroupData[]) {
    dispatch({ type: APP_DATA_ACTIONS.UPDATE_GROUP, payLoads });
  }

  function removeAppData({ dataPath }: any) {
    dispatch({ type: APP_DATA_ACTIONS.REMOVE, dataPath });
  }

  return (
    <AppDataContext.Provider
      value={{
        appData,
        updateAppData,
        removeAppData,
        updateAppGroupData,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
