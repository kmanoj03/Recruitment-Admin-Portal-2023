const questionMod = require('../models/webQuestions.js');

async function retrieveData(req, res){
  try{
    // console.log(req.body[0])
    for (let i = 0 ; i < req.body.length ; i++){
      var Sno = req.body[i].Sno;
      var Question = req.body[i].Question;
      var OptionA = req.body[i].OptionA;
      var OptionB = req.body[i].OptionB;
      var OptionC = req.body[i].OptionC;
      var OptionD = req.body[i].OptionD;
      var Answer = req.body[i].Answer;
      var DiffLevel = req.body[i].DiffLevel;
  
      // console.log(sNo, question, optA, optB, optC, optD, ans);
      try{
        const qn = questionMod.create({
          Sno,
          Question,
          OptionA,
          OptionB,
          OptionC,
          OptionD,
          Answer,
          DiffLevel
        })
    
        console.log("Question Added: ");
      }catch (error){

        console.log(error)
        throw error
      }
      
    }
  }catch (err) {
    console.log(err)
    res.status(400).send({
        message: err.message
    })
}

}


module.exports = {retrieveData}