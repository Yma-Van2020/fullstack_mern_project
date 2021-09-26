var Sentiment = require('sentiment');
var sentiment = new Sentiment();

module.exports = {
  analyzeAnsSentiment (ans1, ans2, ans3, ans4, ans5, ans6, ans7) {
    let answer1 = sentiment.analyze(ans1).score;
    let answer2 = sentiment.analyze(ans2).score;
    let answer3 = sentiment.analyze(ans3).score;
    let answer4 = sentiment.analyze(ans4).score;
    let answer5 = 0
    let answer6 = 0
    let answer7 = 0
   console.log(ans5)
    if(ans5 == true){
      answer5 = -2
    }
    if(ans6 == true){
      answer6 = -2
    }
    if(ans7 == true){
      answer7 = -2
    }

    let sentimentScore = (answer1 + answer2 + answer3+ answer4 + answer5 + answer6 + answer7) 

    return sentimentScore.toFixed(1)
    }
}
