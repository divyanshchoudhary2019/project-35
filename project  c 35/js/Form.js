class Form
{
  constructor (){
this.input=createInput("name");
this.email=createInput("email");
  }
  display(){
    var title =createElement ( "h1");
    title.html ("corona survey");
    title.position(displayWidth/2,10);
    this.input.position(displayWidth/2,100);
    this.email.position(displayWidth/2,150);
    var question1=createElement("h4","Q2 Have you gone abroad in the last 15-20 days. ")
    question1.position(100,200);
    
    this.radio = createRadio('h3'); 
    this.radio.option('yes');
     this.radio.option('No');
     this.radio.position(100,250);


     var question2=createElement("h4","Q1 are you suffering any of the following diseases- ")
     question2.position(100,100);
     
     this.radio = createRadio('h3'); 
     this.radio.option('fever');
      this.radio.option('cough');
      this.radio.option('difficulty in breathing.');
      this.radio.option('none of these.');
      this.radio.position(100,150);


      var question3=createElement("h4","Q3 which of the apply to you - ")
     question3.position(100,300);
     
     this.radio = createRadio('h3'); 
     this.radio.option('I am a health care worker.');
      this.radio.option('i have interacted with a person who have been tested corona positive.');
      this.radio.option('none of these.');
      this.radio.position(100,350);
     

   var button = createButton ("save");
   button.position(200,500);

  button.mousePressed(()=>{
    
    user.name = this.input.value();
    user.email = this.email.value();
    userCount+=1;
    user.index = userCount;
    user.update();
    user.updateCount(userCount);
    var greeting =createElement ( "h1");
    greeting.html("thank you " + user.name+"for registering")
    greeting.position(300, 600);
  });



    
  }
}