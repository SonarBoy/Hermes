export interface Restraunt{
    restrauntName: String;
    currentQueue: Array<TableQuery>;
}

export interface TableQuery{
    restrauntId:String;
    sectionId:String;
    tableId:String;
};
