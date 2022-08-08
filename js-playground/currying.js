console.log("Inside Curraying");

// function addToMember(comic, team, memberName) {
//   return {
//     comic: comic,
//     team: team,
//     memberName: memberName,
//   };
// }

// console.log(addToMember("Marvel", "Avenger", "IronMan"));
// console.log(addToMember("DC", "Justice League", "Batman"));
// console.log(addToMember("Marvel", "Avenger", "Captain America"));

function addToComic(comic) {
  return function (teamName) {
    return function (member) {
      return {
        comic: comic,
        teamName: teamName,
        member: member,
      };
    };
  };
}

const addToMarvel = addToComic("Marvel");
const addToMarvelName = addToMarvel("Avenger");

console.log(addToMarvelName("Iron Man"));
console.log(addToMarvelName("Captain America"));
