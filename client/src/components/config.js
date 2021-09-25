import { createChatBotMessage } from "react-chatbot-kit";
import LinkList from "./LinkList";


const config = {
  botName:"GuidingBot",
  initialMessages:[createChatBotMessage("Hello, I'm here to help you navigate through the site! "),
],
  widgets: [
    {
      widgetName: "aboveLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Maintain a good mood all the time",
            url:
              "https://www.lifehack.org/articles/communication/little-things-you-can-keep-you-good-mood-all-the-time.html",
            id: 1,
          },
          {
            text: "How to stay in a good mood",
            url:
              "https://www.wikihow.com/Stay-in-a-Good-Mood",
            id: 2,
          },
          {
            text: "9 secrets of always in a good mood",
            url: "https://www.self.com/story/9-secrets-of-women-who-are-always-in-a-good-mood",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "belowLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Bust a bad mood in 10 minutes",
            url:
              "https://greatist.com/happiness/34-ways-bust-bad-mood-ten-minutes#1",
            id: 1,
          },
          {
            text: "Scientifically Proven ways to improve mood",
            url:
              "https://greatist.com/happiness/34-ways-bust-bad-mood-ten-minutes#1",
            id: 2,
          },
          {
            text: "Boosting your mood",
            url: "https://www.hopkinsmedicine.org/health/wellness-and-prevention/boosting-your-mood",
            id: 3,
          },
        ],
      },
    },
  ],
}


export default config