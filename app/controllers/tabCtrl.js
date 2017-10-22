cvApp.controller('tabCtrl', function($scope, toastService, utilService, $location, $log) {

    //if the user has filled in the details before then, look for the information in local Storage
    //and if found then populate it in the text boxes
    if(localStorage.getItem('basicInfoObject')!==null){
      var retrievedObject = localStorage.getItem('basicInfoObject');
      var basicInfoObject =  JSON.parse(retrievedObject);

      $scope.fullname = basicInfoObject.fullname;
      $scope.email = basicInfoObject.email;
      $scope.phonenumber = basicInfoObject.phonenumber;
      $scope.website = basicInfoObject.website;
    }

    if(localStorage.getItem('biographyObject')!==null){
      var retrievedObject = localStorage.getItem('biographyObject');
      var biographyObject =  JSON.parse(retrievedObject);

      $scope.biography = biographyObject.biography;
    }

    $scope.saveBasicInfo = function() {
      var fullname = this.fullname || ''; //fullname if present else empty
      var email = this.email || '';
      var phonenumber = this.phonenumber || '';
      var website = this.website || '';

      var basicInfoObject = {
        'fullname': fullname,
        'email': email,
        'phonenumber': phonenumber,
        'website': website
      };


      // Put the object into storage
      localStorage.setItem('basicInfoObject', JSON.stringify(basicInfoObject));

      $scope.fullname = fullname;
      $scope.email = email;
      $scope.phonenumber = phonenumber;
      $scope.website = website;

      toastService.showSimpleToast();
    }


    //how is it globally accessible without exporting => is it because it is in the same app ####
    $scope.saveSummery = function(){//summary ka spelling sahi karo har jagah
      var biography = this.biography || '';

      var biographyObject = {'biography': biography};

      localStorage.setItem('biographyObject', JSON.stringify(biographyObject));

      $scope.biography = this.biography;

      toastService.showSimpleToast();
    }

    this.topDirections = 'left';
    this.bottomDirections = 'down';

    this.isOpen = false;
    this.selectedMode = 'md-fling';
    this.selectedDirection = 'up';
})
