const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = Reader.ReadJsonFile("data/explorers.json");
        const filterMisiion = ExplorerService.filterByMission(explorers, mission);
        return filterMisiion;
    };

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.ReadJsonFile("data/explorers.json");
        const filterUserName = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return filterUserName;

    };

    static getExplorersAmonutByMission(mission){

        const explorers = Reader.ReadJsonFile("data/explorers.json");
        const explorersAmount = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersAmount;

    };

    static getClientNumber(number){


        const clientNumbers = FizzbuzzService.applyValidationInNumber(number);
        return clientNumbers;
    };

    static getExplorerStack(stack){
        const dataExplorers = Reader.ReadJsonFile("data/explorers.json");
        const stackExplorers = ExplorerService.getExplorersByStack(dataExplorers, stack);
        return stackExplorers;

    };
};

module.exports = ExplorerController;