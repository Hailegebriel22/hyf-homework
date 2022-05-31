 // Flight booking fullname function
 
 
  let  fullname1 = ["Benjamin", "Hughes", true,"male"];
  let fullname2 = ["Lukas", "Andrias",false,"male"]; 
  let fullname3 = ["Sofia", "Larsen",true,"female"]; 
   function getFullname (firstname, surname) {  
    if (firstname=="" || surname=="" || typeof firstname !== "string" ||
         typeof surname !== "string"){
    return `Please enter a valid name.`
       }
    return  ` ${firstname} ${surname}` ; 
 }
 console.log(getFullname(fullname1[0], fullname1[1]));
 console.log(getFullname(fullname2[0], fullname2[1])); 
    
 // Formal fullname 
 
 
   function getFullname (firstname, surname, useFormalName) { 
    if (firstname=="" || surname=="" || typeof firstname !== "string" ||
         typeof surname !== "string"){
    return `Please enter a valid name.`
       }
     else if (useFormalName) { 
     return `Lord ${firstname} ${surname}` ; 
  }
  else 
  return  `${firstname} ${surname}` ; 
 };
 console.log(getFullname(fullname1[0], fullname1[1],fullname1[2]));
 console.log(getFullname(fullname2[0], fullname2[1],fullname2[2]));  
 
 //  Formal fullname gender specific 
 
   function getFullname (firstname, surname, useFormalName,gender) { 
     if (firstname=="" || surname=="" || typeof firstname !== "string" ||
         typeof surname !== "string"){
    return `Please enter a valid name.`
     }
    else if (gender=="female" && useFormalName){
         return  `Lady ${firstname} ${surname}` ; 
     }
     else if (gender=="male" && useFormalName) { 
     return `Lord ${firstname} ${surname}`   ; 
  }
  else 
  return   `${firstname} ${surname}` ;  
 }
 console.log(getFullname(fullname1[0], fullname1[1],fullname1[2],fullname1[3]));
 console.log(getFullname(fullname2[0], fullname2[1],fullname2[2],fullname2[3])); 
 console.log(getFullname(fullname3[0], fullname3[1],fullname3[2],fullname3[3])); 
 
  
     //   Weather wear
 
     function myFunction (temp){
     if ( temp <= 5) {
  return console.log('Wear winter jacket and winter shoe.');
     }
     else if ( temp > 5 && temp <= 10) {
      return console.log('Wear light jacket.');
     }
     else if ( temp > 10 && temp <= 19) {
         return console.log('Wear sweater.');
      }
      else 
      return console.log('shorts and a t-shirt.');
 
 };
 clothesToWear = myFunction(0);
  
 
 
  // Event application 
 
   var today = new Date();
 console.log(today.getDay());
 let weekDayOfToday=today.getDay();
 
 const weekDays=["sunday","monday","tuseday","wednesday","thursday","friday","saturday"];
 
 function eventDate(x){
  if(( weekDayOfToday+x)<7){ 
     console.log(weekDays[ weekDayOfToday+x]);
     }
 else ((weekDayOfToday+x)>=7) 
    /*If sum of weekDayOfToday and event date larger than 7, 
      use reminder value  to get the value from array weekDays */
      
       let rem= (weekDayOfToday+x)%7; 
         console.log(weekDays[rem]);
 }
 eventDate(10);  
  
 
 
  // Student manager
 
   const class07Students = [ ];
 function addStudentToClass(studentName) {
    
   if (studentName=="" ) {
    console.log(`cannot be  empty`);
     }
    else if (class07Students.length >= 6 && studentName=="Queen"){
       class07Students.push (studentName);
   }
    else if (class07Students.length >= 6){
       console.log("Cannot add more students to class 07")
    }
    else if(class07Students.indexOf(studentName) !== -1){  
        console.log( `Student ${studentName} is already in the class`);
    }
     
        else 
          return class07Students.push(studentName)
       }
 
    addStudentToClass ("Mercury");
    addStudentToClass ("Venus");
    addStudentToClass ("Earth");
    addStudentToClass ("Mars");
    addStudentToClass ("Jupiter");
    addStudentToClass ("Saturn");
    addStudentToClass ("Queen");
 
    console.log(class07Students);
 
 
  function getNumberOfStudents() {
    return class07Students.length;
    } 
    console.log(getNumberOfStudents()) 
      
   
   // Candy helper 
   let boughtCandyPrices = [];
   
   candyType =["sweet", "chocolate" , "toffee", "chewing-gum"];
   pricePerWeight=[0.5, 0.7, 1.1, 0.03];
 
   // addCandy function
 
    function addCandy( candyType, weight){
      if (candyType=="sweet"){
      return boughtCandyPrices.push(0.5*weight);
      }
      else if (candyType=="chocolate"){
       return boughtCandyPrices.push(0.7*weight);
       }
       else if (candyType=="toffee"){
          return boughtCandyPrices.push(1.1*weight);
          }
          else 
          return boughtCandyPrices.push(0.03*weight);
    } 
    // Adding to candy types sweet (40g) and Chocolate(50g)
 
    addCandy( "sweet", 40);
    addCandy( "chocolate", 50);
    console.log(boughtCandyPrices) 
 
    
    const amountToSpend = Math.random() * 100;
 
    let totalPriceCandy=0;
       for(i=0; i< boughtCandyPrices.length; i++) { 
          totalPriceCandy+=boughtCandyPrices[i];
       }
 
      function canBuyMoreCandy(amountToSpend,boughtCandyPrices){
         
             if (boughtCandyPrices< amountToSpend ){
                console.log(` You still have ${amountToSpend-totalPriceCandy} cash to spend.You can buy more, so please do!`);
             }
             else 
             console.log(`You are about to spend ${totalPriceCandy-amountToSpend} more. Enough candy for you!`);
     } 
 
    canBuyMoreCandy(amountToSpend,40)
 
     