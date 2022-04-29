const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = Reader.ReadJsonFile("data/explorers.json");
        const filterMisiion = ExplorerService.filterByMission(explorers, mission);
        return filterMisiion
    };

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.ReadJsonFile("data/explorers.json");
        const filterUserName = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return filterUserName

    };

    static getExplorersAmonutByMission(mission){

        const explorers = Reader.ReadJsonFile("data/explorers.json");
        const filterMisiion = ExplorerService.filterByMission(explorers, mission);
        return filterMisiion.length

    };

};

module.exports = ExplorerController