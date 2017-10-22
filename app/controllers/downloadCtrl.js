cvApp.controller('downloadCtrl', function($scope, $location, $log, $mdToast) {
  var downloadList = this;        //download list references the current object,
  downloadList.elem = [];         //attach an element array to this object
  downloadList.skill = [];        //element and skills array have been attached to the object, so
                                  //they will show up in the scope of this object

  $scope.resumeSelection = 'Resume1';   //default resume selection, can we not use downloadList in place of scope??
                                        //try that
  downloadList.noContent = '';
  var i = 0;


  //get the variable basicInfoObject from the local storage, If it was created before it will come up
  if(localStorage.getItem('basicInfoObject')!==null){//if it is there then store it
            //in retrievedObject the take its json representation and store it in a variable called basicInfoObject


            //instead parse and store it in the same place
    var retrievedObject = localStorage.getItem('basicInfoObject');//temp variable to
    var basicInfoObject =  JSON.parse(retrievedObject);

    downloadList.fullname = basicInfoObject.fullname;       //download list has the ref to current object, as a scope
    downloadList.email = basicInfoObject.email;
    downloadList.phonenumber = basicInfoObject.phonenumber;
    downloadList.website = basicInfoObject.website;

    if(basicInfoObject.fullname=='')  //check this ########### i goes up anyhow, need a better implementation 
                                      //if there is no fullname it should throw an error, shouldnt it
                                      //use html5 required validation instead and do i++ anyways
      i++;
    }else{
      i++;
    }

  if(localStorage.getItem('biographyObject')!==null){
    var retrievedObject = localStorage.getItem('biographyObject');
    var biographyObject =  JSON.parse(retrievedObject);
    downloadList.summary = biographyObject.biography;

    if(biographyObject.biography=='')
      i++;
  }else{
    i++;
  }

  if(localStorage.getItem('addExperienceObject')!==null){
    var retrievedObject = localStorage.getItem('addExperienceObject');
    downloadList.elem = JSON.parse(retrievedObject);

    if(JSON.parse(retrievedObject).length==0)
      i++;
  }else{
    i++;
  }

  if(localStorage.getItem('addProjectObject')!==null){
    var retrievedObject = localStorage.getItem('addProjectObject');
    downloadList.projects = JSON.parse(retrievedObject);

    if(JSON.parse(retrievedObject).length==0)
      i++;
  }else{
    i++;
  }

  if(localStorage.getItem('addSkillsObject')!==null){
    var retrievedObject = localStorage.getItem('addSkillsObject');
    downloadList.skill = JSON.parse(retrievedObject);

    if(JSON.parse(retrievedObject).length==0)
      i++;
  }else{
    i++;
  }

  if(localStorage.getItem('addEducationObject')!==null){
    var retrievedObject = localStorage.getItem('addEducationObject');
    downloadList.education = JSON.parse(retrievedObject);

    if(JSON.parse(retrievedObject).length==0)
      i++;
  }else{
    i++;
  }
console.log(i);
  downloadList.noContent = i;
});
