/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name": "Anh Le",
  "role": "Security Engineer",
  "contacts": {
    "mobile": "(415)xxx-xxxx",
    "email": "anhhoangle93@gmail.com",
    "github": "anhhoangle93",
    // "twitter": "",
    "location": "San Francisco"
  },
  "welcomeMessage": "Welcome to my page!",
  "skills": ["eDiscovery", "Data Loss Prevention", "Phishing Response", "Email Security", "Scripting (PowerShell, HTML, CSS, JavaScript)"],
  "biopic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAqbAAAAJGRkYWI3ZDg0LWY5NGYtNGE3OC1iOWZkLWY2ODVmYTg1ODZiYw.jpg",

  "display": function () {
    var top = HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(top);

    for (var contact in bio.contacts) {
      $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]));
      $("#footerContacts").append(HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]));
    }

    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill){
      $("#skills").append(HTMLskills.replace("%data%", skill));
    });



  }
};

var education = {
  "schools": [
    {
      "name": "City College of San Francisco",
      "location": "San Francisco, CA",
      "degree": "N/A",
      "majors": ["Computer Science"],
      "dates": "2017",
      "url": "https://www.ccsf.edu/"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Crash Course",
      "school": "Udacity",
      "dates": "2017",
      "url": "https://www.udacity.com/"
    }
  ],

  "display": function () {
    education.schools.forEach(function(school){
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors));
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course){
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
    });
  }
};

var work = {
  "jobs": [
    {
      "employer": "Gap Inc.",
      "title": "eDiscovery/Forensic Security Engineer",
      "location": "Pleasanton, CA",
      "dates": "March 2017 - Present",
      "description": "Perform eDiscovery work, DLP deployment and operation, phishing response, and email security"
    },
    {
      "employer": "Federal Home Loan Bank of San Francisco",
      "title": "Security Analyst Intern",
      "location": "San Francisco, CA",
      "dates": "August 2016 - January 2017",
      "description": "Monitored privileged accounts, phishing education, security tools testing."
    }
  ],

  "display": function () {
    work.jobs.forEach(function(job){
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
    });
  }
};

var projects = {
  "projects": [
    {
      "title": "project 1",
      "dates": "2017",
      "description": "project description",
      "images": ""
    }
  ],

  "display": function () {
    projects.projects.forEach(function(project){
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.images));
    });
  }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
