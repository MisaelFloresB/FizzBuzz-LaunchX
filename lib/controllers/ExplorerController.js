const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController{

    static getExplorersByMission(mission){
        const jsonFile = Reader.readJsonFile("./../data/explorers.json");
        const filterMisiion = ExplorerService.filterByMission(jsonFile.mission, mission);
        return filterMisiion
    };

    static getExplorersUsernamesByMission(mission){
        const jsonFile = Reader.readJsonFile("./../data/explorers.json");
        const filterUserName = ExplorerService.getExplorersUsernamesByMission(jsonFile.mission, mission);
        return filterUserName

    };

    static getExplorersAmonutByMission(mission){

        const jsonFile = Reader.readJsonFile("./../data/explorers.json");
        const filterMisiion = ExplorerService.filterByMission(jsonFile.mission, mission);
        return filterMisiion.length

    };

};

module.exports = ExplorerController