function sendMsg(){
    const input=document.getElementById("user-input");
    const chatbox=document.getElementById("chatbot");
    const userText=input.value.trim();
     
    if(userText === "")
        return ;

    const userMsg=document.createElement("div");
    userMsg.className="user-msg";
    userMsg.textContent=userText;
    chatbox.appendChild(userMsg);
    chatbox.scrollTop=chatbox.scrollHeight;
    
    const typingMsg = document.createElement("div");
    typingMsg.className = "bot-msg typing";
    typingMsg.textContent = "Typing...";
    chatbox.appendChild(typingMsg);
    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {

    chatbox.removeChild(typingMsg);

    const botMsg=document.createElement("div");
    botMsg.className="bot-msg";
    botMsg.textContent=getBotReply(userText);
    chatbox.appendChild(botMsg);
    chatbox.scrollTop=chatbox.scrollHeight;
    },700);

    input.value="";
}

function getBotReply (input){
   const text=input.toLowerCase();

   if(/^hi+$/i.test(text)||text.includes("hello") || text.includes("hii")) {
    return "Hello!👋 How can I help you today ?";
   }
   else if(text.includes("skills")){
    return "I am skilled in programming languages like Java,C,C++ and developing languages like HTML,CSSS,JavaScript"
   }
   else if(text.includes("projects") || text.includes("work")){
   return "I've built Portfolio and TO - DO List and AMAZON clone using HTML &CSS";
   }
   else if(text.includes("education")){
   return "Iam a Information Science and Engineering Student at GAT,Bangalore";
   }
   else if(text.includes("contact") || text.includes("reach")) {
   return "You can reach me via 📧Email :kavyahat2005@gmail.com 💼LinkedIn :https://www.linkedin.com/in/kavyashree-bhat"
   }
   else if(text.includes("email") ){
   return "You can reach me via 📧Email :kavyahat2005@gmail.com";
   }
   else if (text.includes("linkedin")) {
    return "Here's my LinkedIn: https://www.linkedin.com/in/kavyashree-bhat 💼";

  // GitHub
  } else if (text.includes("github")) {
    return "Check out my GitHub: https://github.com/kavyashreegbhat👨‍💻";
  } 
  else if (
    text.includes("thanks") || 
    text.includes("thank you") || 
    text.includes("bye")
  ) {
    return "Thank you for chatting with me! 😊 Feel free to explore more or reach out anytime. Have a great day! 🌟";
  } else {
    return "Sorry, I didn't quite get that. 🤔 Try asking about my skills, projects, or contact info!";
}
} 
