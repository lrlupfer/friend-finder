// storing data in friendData array

var friendData = [
	{
	name: "Lindsey Lupfer",
	photo: "http://web.spcollege.edu/instructors/uploads/6573dc0223/IMG_3397.jpg",
	scores: [ "5", "5", "5", "5", "5", "5", "5", "5", "5", "5" ]
	},
	{
	name: "Cutest Puppy",
	photo: "http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg",
	scores: [ "2", "2", "2", "2", "2", "2", "2", "2", "2", "2" ]
	}
];

module.exports = friendData;

function calculateBestMatch() {
var totalScores = [];
for (var i = 0; i < friendData[friendData.length - 1].scores.length; i++) {
    var latestInput = parseInt((friendData[friendData.length-1].scores[i]))
}

for (var k = 0; k < friendData.length - 1; k++) {
	var result = (friendData[k].scores)
	var total = 0;
		for (var j = 0; j < result.length; j++) {
        var calculateDifference = Math.abs(parseInt(result[j]) - latestInput);
		var totalDifference = total += calculateDifference;


        }
		totalScores.push(totalDifference);
}

		 var min = Math.min.apply(null, totalScores);
		 console.log(min);
		 var index = totalScores.indexOf(Math.min(...totalScores));
		 var bestMatch = friendData[index];
         return bestMatch;
}

calculateBestMatch();