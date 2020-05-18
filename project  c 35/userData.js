class User {
    constructor(){
      this.index = null;
      this.email = null;
      this.name = null;
      this.radio1=null;
      this.radio2=null;
      this.radio3=null;

    }
    getCount(){
        var userCountRef = database.ref('userCount');
        userCountRef.on("value",(data)=>{
            userCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
            userCount: count
        });
      }
    
      update(){
        var userIndex = "users/user" + this.index;
        database.ref(userIndex).set({
          name:this.name,
          email:this.email,
          radio1:this.radio1,
          radio2:this.radio2,
          radio3:this.radio3
        });
      }
}