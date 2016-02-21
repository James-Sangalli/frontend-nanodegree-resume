/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 
 var formattedName = HTMLheaderName.replace("%data%","James");
 var formattedJob = HTMLheaderRole.replace("%data%","Dev");

 $("#header").prepend(formattedName,formattedJob);
 
var work = {
	"jobs": [{
		"Title": "MOJ",
		"date": 2015,
		"location":"Wellington, NZ"
	}, {
		"Title": "RBNZ",
		"date": 2014,
		"location":"Wellington, NZ"
	}]
}

var education = {
	"schools": [{
		"name": "WC",
		"date": 2012,
		"location": "Wellington, New Zealand"
	}, {
		"name": "EDA",
		"date": 2016,
		"location": "Wellington, New Zealand"
	}]

}

var projects = {
	"projects": [{
		"name": "BitVerify.co",
		"description": "A website which allows businesses to authenticate their bitcoin addresses to the public",
		"date": "2015-present",
		"image": "images/btc-mono-ring-orange.png"
	}, {
		"name": "My github page",
		"description": "www.james-sangalli.github.io",
		"date": "2016",
		"image": "images/GitHub-Logo.png"
	}]

}


var bio = {
 	"name": "James",
 	"role": "Student",
 	"contacts": {
 		"mobile": "(123)456789",
 		"github": "james-sangalli",
 		"location": "Wellington"
 	},
 	"welcomeMessage": "Hello!",
 	"skills": ["CSS", "C#", "HTML", "JS"]
 }



if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart); 
	
	var formatSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formatSkill);
	var formatSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formatSkill);
	var formatSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formatSkill);
	var formatSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formatSkill);

}
/*
	$("#header").append(HTMLmobile); 
	$("#header").append(HTMLgithub);
	$("#header").append(location);
	
	var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#mobile").append(mobile);
	
	var git = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#github").append(github);

	var location = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#location").append(location);

*/


function displayWork(){
	for (var job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].Title);
	var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].date);
	var formattedLocation = HTMLlocation.replace("%data%",work.jobs[job].location);
	var formattedData = formattedDate + formattedTitle;
	$(".work-entry:last").append(formattedData);
   }
}

displayWork();

$("#main").append(internationalizeButton);

function inName(firstName,lastName){
    var finalName = firstName + lastName;
	
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");

    return finalName;
};


projects.display = function(){
	
	for (project in projects.projects){
	
	$("#projects").append(HTMLprojectStart);
	
	var name = HTMLprojectTitle.replace("%data%",projects.projects[project].name);
	$(".project-entry:last").append(name);
	var d = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	$(".project-entry:last").append(d);
	var date = HTMLprojectDates.replace("%data%",projects.projects[project].date);
	$(".project-entry:last").append(date);
    var img = HTMLprojectImage.replace("%data%",projects.projects[project].image);
    $(".project-entry:last").append(img);
        
	}

}

projects.display();


$("#mapDiv").append(googleMap);


/*
var formatSkill = {};

	for (i = 0; i < bio.skills.length; i ++){
		formatSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formatSkill);
	}
	*/
	/*
	for(var c in bio.skills){
		var formatSkill = HTMLskills.replace("%data%",bio.skills[c]);
		$("#skills").append(formatSkill);
	}
	*/
	
