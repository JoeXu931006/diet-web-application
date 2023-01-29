export interface IAppContext {
    appData?:IAppData;
    updateAppData?: IUpdateAppData;
    removeAppData?:IRemoveAppData;
    updateAppGroupData?:IUpdateAppGroupData;
}

export interface IUseAppProps {
    dataPath?: string;
    appData?: IAppData;
    updateAppData?: IUpdateAppData;
    removeAppData?:IRemoveAppData;
    updateAppGroupData?:IUpdateAppGroupData;
}

export interface IAppContextProvider {
    initialAppData?: IAppData;
    children: React.ReactElement;
}

export interface IAppData {
    [path:string]:IDataValue;
}


export interface IUpdateGroupData {
    dataPath:string;
    dataValue:any;
}

export declare type IRemoveAppData = (args: {dataPath:string}) => void;
export declare type IUpdateAppData = (args:{ dataPath?:string; dataValue?:IDataValue; payLoads?:any }) => void ;
export declare type IUpdateAppGroupData = (payLoads:IUpdateGroupData[]) => void;
export declare type IDataValue = any;