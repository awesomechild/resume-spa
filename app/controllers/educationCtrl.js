cvApp.controller('educationCtrl', function($scope, toastService, utilService, $location, $log) {

  //should prevent it from minification do $inject on it instead
  var educationList = this;
  educationList.educations = [];

  if(JSON.parse(localStorage.getItem('addEducationObject'))){
    var resolveAddEducationObject = JSON.parse(localStorage.getItem('addEducationObject'));
    for(var i = 0; i < resolveAddEducationObject.length; i++) {
        var obj = resolveAddEducationObject[i];


        educationList.educations.push({id: obj.id, school_name: obj.school_name, degree: obj.degree, duration: obj.duration});
        //console.log(obj.id);
    }
  }


  //export these functionalities and require it here
  educationList.addEducation = function(){
    if(educationList.school_name==undefined
      || educationList.degree==undefined
      ||educationList.duration==undefined
      || educationList.school_name==''
        || educationList.degree==''
        ||educationList.duration=='')
      return false;

    var eduId = utilService.guid();//globally unique id, can be used for retrieving from 
                                    //database or as a primary key in schema based dbs
    if(educationList.id!=undefined && educationList.id!=''){
      var addEducationObject = JSON.parse(localStorage.getItem('addEducationObject'));
      for (i=0;i<addEducationObject.length;i++){
        if (addEducationObject[i].id == educationList.id) {
          addEducationObject[i].school_name = educationList.school_name;
          addEducationObject[i].degree = educationList.degree;
          addEducationObject[i].duration = educationList.duration;
        }
      }
      localStorage.setItem('addEducationObject', JSON.stringify(addEducationObject));

      // Update the selected Project
      angular.forEach(educationList.educations, function (p) {

        //if that id has been added already, then update the information, else 
        //push the new object 
        if (p.id == educationList.id) {
          p.school_name = educationList.school_name;
          p.degree = educationList.degree;
          p.duration = educationList.duration;
        }
      });
    }else{
      educationList.educations.push({id:eduId, school_name: educationList.school_name, degree: educationList.degree, duration: educationList.duration});

      var addEducationObject = JSON.parse(localStorage.getItem('addEducationObject')) || [];
      var addEducationNewItem = {'id': eduId, 'school_name': educationList.school_name, 'degree': educationList.degree, 'duration': educationList.duration};

      addEducationObject.push(addEducationNewItem);
      localStorage.setItem('addEducationObject', JSON.stringify(addEducationObject));
    }

    //empty all the variables so they dont show up again in the text boxes when we click add more
    educationList.school_name = '';
    educationList.degree = '';
    educationList.duration = '';
    educationList.id = '';

    toastService.showSimpleToast();//md-toast
  }



  //on clicking delete, this method is fired and it expects you to send the education object
  //in the educations array, then from local storage you will look for it and if found delete that object
  educationList.removeEducation = function(education) {
    var _index = educationList.educations.indexOf(education);
    var id = education.id;
    //console.log(education);
    educationList.educations.splice(_index, 1);//delete one object from the specified index
                                              //in the educations array

    var addEducationObject = JSON.parse(localStorage.getItem('addEducationObject'));
    for (i=0;i<addEducationObject.length;i++)
                if (addEducationObject[i].id == id) addEducationObject.splice(i,1);
    localStorage.setItem('addEducationObject', JSON.stringify(addEducationObject));
  }


  // incase you want to update an education detail that you have filled earlier you will click addEducationNewItem
  // button of the list item and that will fire up this function and will pass as the argument that
  // object you want to edit
  educationList.bindSelectedEducation = function(education) {
    educationList.school_name = education.school_name;
    educationList.degree = education.degree;
    educationList.duration = education.duration;
    educationList.id = education.id;
  }


})
