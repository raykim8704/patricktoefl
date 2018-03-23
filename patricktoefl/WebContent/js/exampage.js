

var questionInfo = [{
      text: "<p><b>In</b> an effort to improve marine environments, artificial reefs are frequently used.  These artificial reefs can be built by using manmade objects that were previously built to serve other purposes such as metal structures, decommissioned ships, and even outdated tanks. The primary goal of artificial reefs is to protect marine life by providing a shelter under the water which in turn will increase the proliferation of fish. Whether the shelters provide adequate living environments for the ailing marine life impacted by human wastes is closely observed and analyzed.</p><p> The state of Florida in the United States is home to many artificial reefs.  With the inception of the Florida Artificial Reef Program in 1982, more than 8,426 miles of coastal areas of Florida have been a part of the artificial reef development. Many of them have been implemented to boost commercial fisheries by providing an ideal habitat for valuable fishes such as groupers and snappers. Researchers currently lack information to draw a conclusion on the effects of these reefs because they are still analyzing the reef’s influence on northern red snappers in the Gulf of Mexico. The resulting population of the northern red snappers will prove to be a conclusive evidence on the efficacy of the reefs since they are relatively long-lived fish commonly found near natural and artificial reefs as they age.</p>",
      details: [
        {
          question: "The word proliferation in the 1st paragraph is closest in meaning to",
          answers: ["(A) preference", "(B) problem", "(C) growth", "(D) damage", "(E) health "]
        },
        {
          question: "The word decommissioned in the 1st paragraph is closest in meaning to",
          answers: ["(A) compressed", "(B) ordered ", "(C) active ", "(D) deactivated", "(E) added"]
        },
        {
          question: "The word outdated in the 1st paragraph is closest in meaning to",
          answers: ["(A) massive", "(B) old", "(C) stylistic", "(D) powerful", "(E) broken"]
        },
        {
          question: "The word draw in the 2nd paragraph is closest in meaning to",
          answers: ["(A) argue", "(B) give up", "(C) seduce", "(D) reach", "(E) get rid of"]
        },
        {
          question: "The word age in the 2nd paragraph is closest in meaning to",
          answers: ["(A) mature","(B) become young","(C) generate","(D) establish","(E) change"]
        },
      ],
      cAnswer :[3,4,2,4,1]
    },
    {
      text:"<p>The advent of the magazine can be traced back as early as the 1600’s and has been serving a crucial role in spreading information as well as new ideas ever since. At first, its very existence was considered somewhat out of place. They did not contain enough news to be considered a newspaper and they were not classified under the category of casual or fun reading. Hence, they occupied a grey area in between the two, tailoring to enthusiasts who showed interests in very specific areas. At some point in the 17th century, publishers realized that a regularly, recurring distribution was needed. This is why magazines were also referred to as periodicals.</p><p>The introduction of the Gutenberg printing press in around 1450 set the stage for an entirely new spectrum of media distribution. Now, magazines were able to be mass-produced and were readily available for the common person to read. Prior to the use of the printing press, magazines were, for the most part, available only to a select few who could afford them. Not only were they limited to a few people, but they were also made available when the select few wanted them to be available. With Gutenberg’s creation, however, newspapers and magazines began to flourish among the common people, spreading information about important events and issues.</p>" +
      		"<p>When discussing the origin of magazines, historians turn to a German theologian and poet Johann Rist who was responsible for creating the \“Erbauliche Monaths-Unterredungen\”, or \“Edifying Monthly Discussions,\” which is widely considered the world\’s very first modern magazine. The Edifying Monthly Discussions were periodicals released from 1663 to 1668. It included a wide array of philosophical analysis that were designed mainly for an intellectual audience. Although it was written for a limited amount of people, Rist\’s periodical soon inspired others to write more literary journals throughout Europe.  In France, consumer magazines played an important part in spreading political ideologies. Despite governmental censorship of religious and political periodicals, they frequently criticized the abuse of the Church as well as the incompetence of the bureaucracy. In this way, they somewhat contributed to the start of the French Revolution. While French magazines focused on the religious and political aspects, British magazines targeted the middle and working classes.</p>"+
      		"<p>In the early 18th century, British magazines gained momentum. Some of the most famous publications included Daniel Defoe’s The Review, Joseph Addison and Steele’s the Spectator, and Sir Richard Steele’s the Tatler, all of which focused on delivering domestic and international political issues and opinions on a regular basis. These early publications would later be joined by magazines covering amusement and entertainment for the general public, gaining popularity that continues till this day.  </p>",
      details: [
        {
          question: "The word crucial in the 1st paragraph is closest in meaning to",
          answers: ["(A) typical","(B) important","(C) unnecessary","(D) harmful","(E) new"]
        },
        {
          question: "The word flourish in the 2nd paragraph is closest in meaning to",
          answers: ["(A) overcome","(B) scare","(C) thrive","(D) decorate","(E) influence"]
        },
        {
          question: "The word intellectual in the 3rd paragraph is closest in meaning to",
          answers: ["(A) sophisticated","(B) ignorant","(C) appealing","(D) simple","(E) average"]
        },
        {
          question: "The word incompetence in the 4th paragraph is closest in meaning to",
          answers: ["(A) determination","(B) inability","(C) qualified","(D) responsibility","(E) intrusion"]
        },
        {
          question: "The word covering in the 5th paragraph is closest in meaning to",
          answers: ["(A) protecting","(B) hiding","(C) referring","(D) concealing","(E) handling"]
        },
      ],
      cAnswer :[2,3,1,2,5]
    }
];

var answerInfo =[];
var questionCount =1;



function renderQuestions(){


	jQuery.each(questionInfo, function(index, value) {
	$('.content-wrapper').append($('<div/>',{
		class:'main-text',
		id:'main-text-'+index,
		html:value.text
	}
	));

	jQuery.each(value.details,function(qIndex,qValue){
		$('.content-wrapper').append($('<div/>',{
			class:'answer-title',
			id:'answer-title-'+index+qIndex,
			text:questionCount+'. '+qValue.question
		}));
		$('.content-wrapper').append($('<div/>',{
			class:'answers',
			id:'answers'+index+qIndex
		}));


		jQuery.each(qValue.answers,function(aIndex,aValue){
			$('#answers'+index+qIndex).append($('<input/>',{
				type:'radio',
        class:'selectedanswer',
				id:'answer'+index+qIndex+aIndex,
				name:'answer'+index+qIndex,
				value:aIndex+1,
        textnum : index,
        qIndex : qIndex,
        questionNum:questionCount-1
			}));
			$('#answers'+index+qIndex).append($('<label/>',{
				for:'answer'+index+qIndex,
				text:aValue
			}));
			$('#answers'+index+qIndex).append('<br>');
		});
	    questionCount++;
  });
});
$('.selectedanswer').click(function(){
  var selectedValue = $(this).val();
  var textnum = $(this).attr('textnum');
  var qIndex = $(this).attr('qIndex');
  var questionNum = $(this).attr('questionNum');
  console.log(selectedValue);
  console.log('textNum:'+textnum);
  console.log(qIndex);
  var result = isCorrect(textnum,qIndex,selectedValue);
  answerInfo[questionNum]={
    'qNum':qIndex,
    'yourChioceNum' :selectedValue,
    'result':result
  };
  console.log('result:'+result);
  console.log(answerInfo);
});

$('.summit-button').click(function(){
	$('.body-wapper').empty();
	$('.body-wapper').load('contents/result.html');
	renderResult();
});

}
function renderResult(){
	var numOfquestion = questionCount-1;
	var correctCount = 0;
	 var resultArray = answerInfo;
	 console.log(resultArray);
	 
	jQuery.each(resultArray, function(index, value) {
		if(value){
			if(value.result){
				correctCount++;				
			}
		}
		
	});
	console.log("correctCount:"+correctCount);
	
}


function isCorrect(textnum,qIndex,selectedValue){
  var cA = questionInfo[textnum].cAnswer[qIndex];
  var sA = parseInt(selectedValue);
  console.log(cA);
  console.log(sA);
  if(cA==sA){
    return true;
  }else{
    return false;
  }
}
