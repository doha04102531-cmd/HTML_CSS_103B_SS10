const players = [
  "Messi - Forward - 25 - 15 - 34",
  "Ronaldo - Forward - 30 - 10 - 38",
  "Neymar - Forward - 18 - 20 - 32",
  "De Bruyne - Midfielder - 8 - 25 - 35",
  "Kante - Midfielder - 2 - 5 - 36",
  "Van Dijk - Defender - 5 - 3 - 33",
  "Alisson - Goalkeeper - 0 - 1 - 37",
];

const filterPlayerByPosition = ( pos , players) => {
    let listPlayer = players.filter((player) => {
        return player.toLowerCase().includes(pos.toLowerCase().trim());
    });
    return listPlayer;
    
};


const reportByPosition = (players) => {
    let listPlayerByTd = filterPlayerByPosition("Forward" , players);
    console.log(listPlayerByTd);
    console.log(`Số lượng cầu thủ : ${listPlayerByTd.length}`);

    let newListPlayerForTd = newListPlayerByTd.map((players) => {
        return player.split(" - ");
    });

    let totalGoal = newListPlayerByTd.reduce((acc , player) => {
        return (acc += Number(player[2]))
    }, 0);
    console.log(`Tổng số bàn thắng : ${totalGoal}`);
    
};
reportByPosition(players);