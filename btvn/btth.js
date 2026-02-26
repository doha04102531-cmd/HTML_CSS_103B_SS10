let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },
    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }
];

//Chức năng 1
const displayListFoolball = (listPlayer) =>{
    listPlayer.forEach((player) => {
        console.log(`Mã ${player.id} - ${player.name} (${player.position}):${player.goals} Bàn`);
        
    });
};



//Chức năng 2
const addNewPlayer = (listPlayer) => {
    let name = prompt("Nhập tên cầu thủ:");
    let goals = +prompt("Nhập số bàn thắng:");
    let position = prompt("Nhập vị trí (FW/MF/DF/GK):");

    let newPlayer = {
        id: listPlayer.length + 1,
        name: name,
        goals: goals,
        position: position
    };

    listPlayer.push(newPlayer);
    console.log("Đã thêm cầu thủ!");
};

//Chức năng 3
const findPlayerById = (listPlayer) => {

    let idFind = +prompt("Nhập ID cầu thủ cần tìm:");

    let player = listPlayer.find((item) => {
        return item.id === idFind;
    });

    if (player) {
        console.log(`Tìm thấy cầu thủ : Mã ${player.id} - ${player.name} (${player.position}): ${player.goals} bàn`);
    } else {
        console.log(" Không tìm thấy!");
    }
};


//Chức năng 4
const updateGoals = (listPlayer) => {

    let idUpdate = +prompt("Nhập ID cầu thủ vừa ghi bàn:");

    let player = listPlayer.find((item) => {
        return item.id === idUpdate;
    });

    if (player) {
        player.goals = player.goals + 1;

        console.log(`Đã cập nhật bàn thắng cho cầu thủ ${player.name} thành ${player.goals}`);
    } else {
        console.log("Không tìm thấy cầu thủ");
    }
};


let choice;
const displayMenu = () =>{
    choice = +prompt(`
        --- FOOTBALL MANAGER PRO ---
        1. Xem đội hình
        2. Thêm cầu thủ
        3. Tìm kiếm (theo ID)
        4. Cập nhật bàn thắng
        5. Xóa cầu thủ (Chuyển nhượng)

0. Thoát`)
};
do {
    displayMenu();
    switch (choice) {
        case 1:
        displayListFoolball(squad);
            break;

        case 2:
        addNewPlayer(squad);
            break;
        
        case 3:
        findPlayerById(squad);
            break;

        case 4:
        updateGoals(squad);
            break;
        default:
            break;
    }
} while (choice != 0);