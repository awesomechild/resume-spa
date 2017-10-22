cvApp.controller('skillsCtrl', function($scope, toastService, utilService, $location, $log) {
  //prevent minification

  var skillsList = this;
  skillsList.skills = [];



  // To populate the skills list, If addSkillsObject exists iterate through and add them to the list
  // Do the same for educationCtrl also
  if(JSON.parse(localStorage.getItem('addSkillsObject'))){
    var resolveAddSkillsObject = JSON.parse(localStorage.getItem('addSkillsObject'));
    for(var i = 0; i < resolveAddSkillsObject.length; i++) {
        var obj = resolveAddSkillsObject[i];
        skillsList.skills.push({id: obj.id, name: obj.name});
        //After this loop is over skills.html can use ng-repeat directive to populate the list
        //console.log(obj.id);
    }
  }

  skillsList.addSkill = function(){
    //   ng-input="skillsList.name"
    console.log(skillsList.name);

    // if the user didnot input anything or if undefined
    if(skillsList.name==undefined || skillsList.name=='')
      return false;

    var skillId = utilService.guid();
    console.log(skillsList.id);


    if(skillsList.id!=undefined && skillsList.id!=''){
        // skillsList already exists -- id is assigned
      var addSkillsObject = JSON.parse(localStorage.getItem('addSkillsObject'));

    }else{
      console.log('here');
      skillsList.skills.push({id:skillId, name: skillsList.name});

      var addSkillsObject = JSON.parse(localStorage.getItem('addSkillsObject')) || [];
      var addSkillNewItem = {'id': skillId, 'name': skillsList.name};

      addSkillsObject.push(addSkillNewItem);
      localStorage.setItem('addSkillsObject', JSON.stringify(addSkillsObject));
    }
    skillsList.name = '';
    skillsList.id = '';

    toastService.showSimpleToast();
  }

  skillsList.removeSkill = function(skill) {
    var _index = skillsList.skills.indexOf(skill);
    var id = skill.id;
    //console.log(education);
    skillsList.skills.splice(_index, 1);

    var addSkillsObject = JSON.parse(localStorage.getItem('addSkillsObject'));
    for (i=0;i<addSkillsObject.length;i++)
                if (addSkillsObject[i].id == id) addSkillsObject.splice(i,1);
    localStorage.setItem('addSkillsObject', JSON.stringify(addSkillsObject));
  }

  skillsList.bindSelectedSkill = function(skill) {
    skillsList.name = skill.name;
    skillsList.id = skill.id;
  }

})
