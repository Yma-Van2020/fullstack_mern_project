var Sentiment = require('sentiment');
var sentiment = new Sentiment();

module.exports = {
  analyzeAnsSentiment (ans1, ans2, ans3, ans4) {
    let answer1 = sentiment.analyze(ans1).score;
    let answer2 = sentiment.analyze(ans2).score;
    let answer3 = sentiment.analyze(ans3).score;
    let answer4 = sentiment.analyze(ans4).score;

    let sentimentScore = (answer1 + answer2 + answer3+ answer4) 
    console.log(sentimentScore)
    return sentimentScore.toFixed(1)
    }
}
