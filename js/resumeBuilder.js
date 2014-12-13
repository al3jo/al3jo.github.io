//=====================================
//============ BIOGRAPHY ==============
//=====================================
// Biography object. Contains general information about me.
var bio = {
  name: 'Alejandro Castro',
  role: 'Software Developer',
  contacts: {
    mobile: '+(506) 6043-3337',
    email: 'me@al3j0.com',
    web: 'http://al3j0.com',
    twitter: '@al3j0_27',
    skype: 'acastro2703',
    facebook: '/alejandro.castro',
    github: 'al3jo',
    linkedin: '/acastro',
    location: 'Costa Rica'
  },
  pictureUrl: 'images/me.jpg',
  welcomeMessage: 'Profesional Software Developer / Amateur athlete',
  skills: ['self learner', 'proactive', 'creative']
};

// This function added to the bio object, know how to display itself into the page
bio.displayHeader = function() {
  var id = '#header';

  $(id).append(HTMLheaderName.replace(/%data%/g, this.name));
  $(id).append(HTMLheaderRole.replace(/%data%/g, this.role));
  $(id).append(HTMLbioPic.replace(/%data%/g, this.pictureUrl));
  $(id).append(HTMLWelcomeMsg.replace(/%data%/g, this.welcomeMessage));

  $(id).append(HTMLskillsStart);
  this.skills.forEach(function(skill) {
    $('#skills').append(HTMLskills.replace(/%data%/g, skill));
  });

  $(id).append(internationalizeButton);
};

// This function on the bio object know how to display contact information.
// It gets an 'id' as a parameter, as it is used for both the header and footer
bio.displayContacts = function(id) {
  $(id).append(HTMLmobile.replace(/%data%/g, this.contacts.mobile));
  $(id).append(HTMLemail.replace(/%data%/g, this.contacts.email));
  $(id).append(HTMLtwitter.replace(/%data%/g, this.contacts.twitter));
  $(id).append(HTMLcontactGeneric.replace(/%class%/g, 'zocial-skype').replace(/%contact%/g, '').replace(/%data%/g, this.contacts.skype));
  $(id).append(HTMLcontactGeneric.replace(/%class%/g, 'zocial-facebook').replace(/%contact%/g, '').replace(/%data%/g, this.contacts.facebook));
  $(id).append(HTMLcontactGeneric.replace(/%class%/g, 'zocial-linkedin').replace(/%contact%/g, '').replace(/%data%/g, this.contacts.linkedin));
  $(id).append(HTMLgithub.replace(/%data%/g, this.contacts.github));
  $(id).append(HTMLblog.replace(/%data%/g, this.contacts.web));
  $(id).append(HTMLlocation.replace(/%data%/g, this.contacts.location));
};

//=====================================
//============= WORK ==================
//=====================================
// This is the object that contains all the information from my jobs
var work = {
  jobs: [
    {
      employer: 'SecureLink',
      location: ['San José, Costa Rica', 'Austin, Texas, US'],
      from: 'February, 2014',
      current: true,
      title: 'Software Developer / Team Lead',
      description: 'Lead the Costa Rica Development Team.<br>Bacon ipsum dolor amet short loin hamburger pork belly pig, tongue beef ribs venison turducken shankle salami flank. Bacon meatball t-bone ham hock, corned beef pastrami biltong rump strip steak. Spare ribs prosciutto filet mignon beef, pastrami picanha kielbasa jowl strip steak porchetta cupim. Bresaola flank salami ground round cupim. Fatback spare ribs shoulder doner. T-bone porchetta bacon, tongue tenderloin corned beef strip steak capicola kevin salami filet mignon beef doner tri-tip swine.'
    },
    {
      employer: 'Backcountry',
      location: ['Santa Ana, Costa Rica', 'Park City, Utah, US'],
      from: 'November, 2010',
      to: 'January, 2014',
      title: 'Software Developer / Team Lead',
      description: 'Lead the Community Team and the Mobile Team.<br>Bacon ipsum dolor amet short loin hamburger pork belly pig, tongue beef ribs venison turducken shankle salami flank. Bacon meatball t-bone ham hock, corned beef pastrami biltong rump strip steak. Spare ribs prosciutto filet mignon beef, pastrami picanha kielbasa jowl strip steak porchetta cupim. Bresaola flank salami ground round cupim. Fatback spare ribs shoulder doner. T-bone porchetta bacon, tongue tenderloin corned beef strip steak capicola kevin salami filet mignon beef doner tri-tip swine.'
    },
    {
      employer: 'Roundbox Media',
      location: ['San José, Costa Rica', 'San Francisco, California, US', 'Atlanta, Georgia, US'],
      from: 'March, 2008',
      to: 'November, 2010',
      title: 'Software Developer / Team Lead',
      description: 'Lead the Edusoft Team.<br>Bacon ipsum dolor amet short loin hamburger pork belly pig, tongue beef ribs venison turducken shankle salami flank. Bacon meatball t-bone ham hock, corned beef pastrami biltong rump strip steak. Spare ribs prosciutto filet mignon beef, pastrami picanha kielbasa jowl strip steak porchetta cupim. Bresaola flank salami ground round cupim. Fatback spare ribs shoulder doner. T-bone porchetta bacon, tongue tenderloin corned beef strip steak capicola kevin salami filet mignon beef doner tri-tip swine.'
    },
    {
      employer: 'Isthmus',
      location: ['San José, Costa Rica', 'Raleigh, North Carolina, US', 'Herndon, Virginia, US'],
      from: 'February, 2006',
      to: 'February, 2008',
      title: 'Software Developer / Team Lead',
      description: 'Lead the Motricity and Digital Focus Team.<br>Bacon ipsum dolor amet short loin hamburger pork belly pig, tongue beef ribs venison turducken shankle salami flank. Bacon meatball t-bone ham hock, corned beef pastrami biltong rump strip steak. Spare ribs prosciutto filet mignon beef, pastrami picanha kielbasa jowl strip steak porchetta cupim. Bresaola flank salami ground round cupim. Fatback spare ribs shoulder doner. T-bone porchetta bacon, tongue tenderloin corned beef strip steak capicola kevin salami filet mignon beef doner tri-tip swine.'
    },
    {
      employer: 'Independent Consultor',
      location: ['San José, Costa Rica', 'Panamá, Panamá'],
      from: 'January, 2005',
      to: 'January, 2006',
      title: 'Software Developer',
      description: 'Several projects for different customers.<br>Bacon ipsum dolor amet short loin hamburger pork belly pig, tongue beef ribs venison turducken shankle salami flank. Bacon meatball t-bone ham hock, corned beef pastrami biltong rump strip steak. Spare ribs prosciutto filet mignon beef, pastrami picanha kielbasa jowl strip steak porchetta cupim. Bresaola flank salami ground round cupim. Fatback spare ribs shoulder doner. T-bone porchetta bacon, tongue tenderloin corned beef strip steak capicola kevin salami filet mignon beef doner tri-tip swine.'
    },
    {
      employer: 'Cypress Creek Technologies',
      location: ['San José, Costa Rica', 'Newark, New Jersey, US'],
      from: 'January, 2003',
      to: 'January, 2005',
      title: 'Software Developer',
      description: 'Enterprise software developer.<br>Bacon ipsum dolor amet short loin hamburger pork belly pig, tongue beef ribs venison turducken shankle salami flank. Bacon meatball t-bone ham hock, corned beef pastrami biltong rump strip steak. Spare ribs prosciutto filet mignon beef, pastrami picanha kielbasa jowl strip steak porchetta cupim. Bresaola flank salami ground round cupim. Fatback spare ribs shoulder doner. T-bone porchetta bacon, tongue tenderloin corned beef strip steak capicola kevin salami filet mignon beef doner tri-tip swine.'
    }
  ]
};

// This function of the work object gets an id and a class, and knows how to render the jobs on the page
// This is not to say that they will be displayed somewhere else, but I thought it was handy to not hardcode
// those values here. Later on, when this function is called, it's easier to know where it will be rendered
// id: The name of the id for the job container
// clazz: The name of the class for each individual job
work.display = function(id, clazz) {
  var clazz = clazz + ':last';

  this.jobs.forEach(function(job) {
    $(id).append(HTMLworkStart);
    $(clazz).append(HTMLworkEmployer.replace(/%data%/g, job.employer) + HTMLworkTitle.replace(/%data%/g, job.title));
    var dates = job.current ? HTMLworkDates.replace(/%data%/g, job.from + ' - current') : HTMLworkDates.replace(/%data%/g, job.from + ' - ' + job.to);
    $(clazz).append(HTMLworkDates.replace(/%data%/g, dates));
    $(clazz).append(HTMLworkLocation.replace(/%data%/g, job.location[0]));
    $(clazz).append(HTMLworkDescription.replace(/%data%/g, job.description));
  });
};

//=====================================
// =========== EDUCATION ==============
//=====================================
// The education object holds information about both schools and online courses
var education = {
  schools: [
    {
      name: 'Universidad de Costa Rica',
      degree: 'BA',
      major: ['CompSci'],
      dates: '1999 - 2003',
      location: 'San José, Costa Rica',
      url: 'http://www.ucr.ac.cr'
    },
    {
      name: 'CENFOTEC',
      degree: 'CDS',
      major: ['SW'],
      dates: '2000 - 2001',
      location: 'San José, Costa Rica',
      url: 'http://www.ucenfotec.ac.cr'
    },
    {
      name: 'Universidad Latina de Costa Rica',
      degree: 'BA',
      major: ['CS'],
      dates: '2006 - 2009',
      location: 'San José, Costa Rica',
      url: 'http://www.ulatina.ac.cr'
    }
  ],
  onlineCourses: [
    {
      title: 'Artificial Inteligence for Robotics',
      school: 'Udacity',
      dates: 2012,
      url: 'http://www.udacity.com/course/cs373-old'
    },
    {
      title: 'Intro to Computer Science',
      school: 'Udacity',
      dates: 2012,
      url: 'http://www.udacity.com/course/cs101-old'
    },
    {
      title: 'Visualizing Algebra',
      school: 'Udacity',
      dates: 2013,
      url: 'http://www.udacity.com/course/ma006'
    },
    {
      title: 'Intro to Design of Everyday Things',
      school: 'Udacity',
      dates: 2013,
      url: 'http://www.udacity.com/course/design101'
    },
    {
      title: 'Intro to Hadoop and MapReduce',
      school: 'Udacity',
      dates: 2014,
      url: 'http://www.udacity.com/course/ud-617'
    },
    {
      title: 'Applied Cryptography',
      school: 'Udacity',
      dates: 2014,
      url: 'http://www.udacity.com/course/cs387'
    },
    {
      title: 'JavaScript Basics',
      school: 'Udacity',
      dates: 2014,
      url: 'http://www.udacity.com/course/ud804'
    }
  ]
};

// This function deals with rendering the schools on the page
// id: The name of the id for the school container
// clazz: The name of the class for each individual school
education.displaySchools = function(id, clazz) {
  var clazz = clazz + ':last';
  this.schools.forEach(function(school) {
    $(id).append(HTMLschoolStart);
    $(clazz).append(HTMLschoolName.replace(/%data%/g, school.name).replace(/%url%/g, school.url) +
      HTMLschoolDegree.replace(/%data%/g, school.degree));
    $(clazz).append(HTMLschoolDates.replace(/%data%/g, school.dates));
    $(clazz).append(HTMLschoolLocation.replace(/%data%/g, school.location));
    $(clazz).append(HTMLschoolMajor.replace(/%data%/g, school.major));
  });
};

// this function deals with rendering the online courses on the page
// id: The name of the id for the course container
// clazz: The name of the class for each individual course
education.displayOnlineCourses = function(id, clazz) {
  $(id).append(HTMLonlineClasses);
  $(id).append(HTMLschoolStart);
  var clazz = clazz + ':last';
  this.onlineCourses.forEach(function(course) {
    var oc = HTMLonlineTitle.replace(/%data%/g, course.title).replace(/%url%/g, course.url) +
      HTMLonlineSchool.replace(/%data%/g, course.school) +
      HTMLonlineDates.replace(/%data%/g, course.dates) +
      HTMLonlineURL.replace(/%data%/g, course.url).replace(/%url%/g, course.url);

    $(clazz).append(oc);
  });
};

//=====================================
// =========== PROJECTS ===============
//=====================================
// The projects object holds information regarding several projects I have worked on
var projects = {
  projects: [
    {
      title: 'Project 1',
      date: 'February 2014',
      description: 'Bacon ipsum dolor amet short loin hamburger pork belly pig, tongue beef ribs venison turducken shankle salami flank. Bacon meatball t-bone ham hock, corned beef pastrami biltong rump strip steak. Spare ribs prosciutto filet mignon beef, pastrami picanha kielbasa jowl strip steak porchetta cupim. Bresaola flank salami ground round cupim. Fatback spare ribs shoulder doner. T-bone porchetta bacon, tongue tenderloin corned beef strip steak capicola kevin salami filet mignon beef doner tri-tip swine.',
      image: 'images/project1.jpg'
    },
    {
      title: 'Project 2',
      date: 'April 2014',
      description: 'Meatloaf ham beef ribs, pork chop jowl frankfurter ribeye brisket tongue short loin drumstick t-bone prosciutto porchetta. Flank ham hock sausage turkey shankle, fatback meatball capicola. Short loin t-bone turducken frankfurter swine. Swine chuck kevin fatback jowl meatloaf flank meatball kielbasa salami pork shank drumstick porchetta. Tongue brisket swine, alcatra turkey boudin turducken. Sausage porchetta venison meatloaf cupim. Jowl bacon venison tongue biltong pastrami.',
      image: 'images/project2.jpg'
    },
    {
      title: 'August 3',
      date: 'February 2014',
      description: 'Pork chop short loin ham picanha, ball tip biltong bacon tri-tip cupim. Brisket sausage pastrami turducken flank. Kielbasa pork loin tongue jerky andouille short ribs corned beef. Alcatra meatball meatloaf tri-tip sirloin, chuck pork belly flank brisket porchetta. Prosciutto short loin alcatra pork pork chop cow chuck shankle beef ribs cupim porchetta shank. Doner beef corned beef short loin pancetta. Pork chop jowl bresaola, pork loin flank ribeye shankle prosciutto biltong kevin ball tip jerky picanha.',
      image: 'images/project3.jpg'
    }
  ]
};

// This function knows how and where to display the projects
// id: The name of the id for the project container
// clazz: The name of the class for each individual project
projects.display = function(id, clazz) {
  clazz = clazz + ':last';

  this.projects.forEach(function(project, idx) {
    $(id).append(HTMLprojectStart);
    $(clazz).append(HTMLprojectTitle.replace(/%data%/g, project.title));
    $(clazz).append(HTMLprojectDates.replace(/%data%/g, project.date));
    $(clazz).append(HTMLprojectDescription.replace(/%data%/g, project.description));
    $(clazz).append(HTMLprojectImage.replace(/%data%/g, project.image).replace(/%id%/g, 'project' + (idx + 1) + '-image'));
  });
};

// This is then how the information is rendered on the page.
// I find easier to read and relate each function name with the id and class they are acting on
bio.displayHeader();
bio.displayContacts('#topContacts');
bio.displayContacts('#footerContacts');
education.displaySchools('#education', '.education-entry');
education.displayOnlineCourses('#education', '.education-entry');
work.display('#workExperience', '.work-entry');
projects.display('#projects', '.project-entry');
