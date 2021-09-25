class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    //   this.state = state;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()

      if(lowerCaseMessage.includes("hi")) {
          this.actionProvider.greet()
      }

      if(lowerCaseMessage.includes("use")) {
        this.actionProvider.usage()
      }

      if(lowerCaseMessage.includes("yes")) {
        this.actionProvider.form()
      }

      if(lowerCaseMessage.includes("no")) {
        this.actionProvider.end()
      }

      if(lowerCaseMessage.includes("calendar")) {
        this.actionProvider.calen()
      }

      if(lowerCaseMessage.includes("next")) {
        this.actionProvider.next()
      }

      if(lowerCaseMessage.includes("positive")) {
        this.actionProvider.handleAbove()
      }

      if(lowerCaseMessage.includes("negative")) {
        this.actionProvider.handleBelow()
      }

    }
  }
  
  export default MessageParser;