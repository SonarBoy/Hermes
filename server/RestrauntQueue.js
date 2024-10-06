function Restraunt(name,sect){
    this.restrauntName = name; 
    this.sections = sect;
}


function TableQuery(restId,sectId,tblId){
    this.restrauntId = restId;
    this.sectionId = sectId;
    this.tableId = tblId;
};


exports.Restraunt = {Restraunt};
exports.TableQuery = {TableQuery};

module.exports = {Restraunt , TableQuery};