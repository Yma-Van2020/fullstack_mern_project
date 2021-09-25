

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    greet() {
        const greetingMsg = this.createChatBotMessage("Welcome to Mood Score Today.")
        this.updateChatbotState(greetingMsg)
    }

    usage(){
        const usageMsg = this.createChatBotMessage("To use the app, you first need to fill out the form from the sidebar and we will analyze the mood score for you in the detail report. Do you need any further assistance? (yes/no)")
        this.updateChatbotState(usageMsg)
    }

    form(){
        const assistMsg = this.createChatBotMessage("You should fill out the form daily for a week for us to do a comprehensive mood analysis. You may also view and modify the past forms.")
        this.updateChatbotState(assistMsg)
    }

    end(){
        const endMsg = this.createChatBotMessage("Enjoy the experince! After you got your mood report, you can come back to me for more guidance by typing 'next step'!")
        this.updateChatbotState(endMsg)
    }

    calen(){
        const calenMsg = this.createChatBotMessage("The calender is to keep track of the days you have submitted the form. Do you need any further assistance? (yes/no)")
        this.updateChatbotState(calenMsg)
    }

    next(){
        const nextMsg = this.createChatBotMessage("Welcome back! Is your mood score positive or negative?(positive/negative)")
        this.updateChatbotState(nextMsg)
    }

    handleAbove(){
        const message = this.createChatBotMessage(
          "Glad to know that you have recently been in a good mood! Here are some helpful resources for you to maintian in a good mood!",
          {
            widget: "aboveLinks",
          }
        );
    
        this.updateChatbotState(message);
      };

    handleBelow(){
        const message = this.createChatBotMessage(
          "I'm sorry to hear that you have recently been down! Don't giveHere are some helpful resources to lighten up your mood!",
          {
            widget: "belowLinks",
          }
        );
    
        this.updateChatbotState(message);
      };
    

    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
  }
  
  export default ActionProvider;