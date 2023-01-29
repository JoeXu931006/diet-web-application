import {get,cloneDeep,isEqual,omit,set} from 'lodash'


export const writeData = (data:{[key:string]:any},dataPath:string,newData:any)=>{
    let isDataChanged : boolean = false
    if(dataPath){
        //when DataPath is given , compare newData with the existingDataValue
        const existingDataValue = get(data,dataPath)
        //when the existingDataValue is an Object,array
        isDataChanged = !isEqual(existingDataValue,newData)
        return isDataChanged?set(cloneDeep(data),dataPath,newData):data
    }
    //when DataPath is NOT given, compare newData with the Data
    return isEqual(data,newData) || isEqual(data,{...data,...cloneDeep(newData as object)})
    ? data
    :{...data,...cloneDeep(newData as object)}
}

export const writeGroupData = (data:{[key:string]:any},payLoads:any[])=>{
    for (let index = 0; index < payLoads.length; index++) {
        const payload = payLoads[index];
        const {dataPath,dataValue} = payload
        let isDataChanged:boolean = false
        if(dataPath){
            //when DataPath is given, compare newData with the existingDataValue
            const existingDataValue = get(data,dataPath)
            //when the existingDataValue is an object, array
            isDataChanged = !isEqual(existingDataValue,dataValue)
            data = isDataChanged?{...data,...set(cloneDeep(data),dataPath,dataValue)}:data
        }else{
            data = isEqual(data,dataValue)||isEqual(data,{...data,...(dataValue as object)})
            ?data
            :{...data,...(dataValue as object)}
        }
        
    }
    return data
}

export const removeData = (data:{[key:string]:any},dataPath:string)=>{
    let updatedData = cloneDeep(data)
    updatedData = omit(updatedData,[dataPath])
    return isEqual(data,updatedData)?data:updatedData
}