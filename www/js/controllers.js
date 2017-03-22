angular.module('psalmstoday')

//_HomeController
.controller('HomeController', function($scope, PsalmsService, $stateParams) {
    PsalmsService.dados().then(function(dados){
      $scope.psalm = dados.psalm[$stateParams.psalmId-1];
    });

    function getRandomAll(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    };
    $scope.v_random = getRandomAll(1, 150);
    
})

//_PsalmGridController
.controller('PsalmGridController', function($scope, PsalmsService) {
    PsalmsService.dados().then(function(dados){
      $scope.psalms = dados.psalm;
    });

    //slider_functions
    $scope.sliderIndexOptions = {
        loop: false,
        speed: 300,
        initialSlide: 0
      };

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
      $scope.activeIndex = data.activeIndex;
      $scope.previousIndex = data.previousIndex;
    });    
})

//_PsalmController
.controller('PsalmController', function($scope, PsalmsService, $stateParams, $ionicPopup) {
    PsalmsService.dados().then(function(dados){
      $scope.psalm = dados.psalm[$stateParams.psalmId-1];
    });
    
    $scope.theText = 'share this';
/*    $scope.toShare = function() {
      window.plugins.socialsharing.share($scope.theText);
    };

    $scope.takeScreenshot = function() {
      navigator.screenshot.save((function(e, r) {
        if (e) {
          $ionicPopup.alert({ title: 'Error!'
                            , template: 'Screenshot unsuccessful' });
        } else {
          $ionicPopup.confirm({ title: 'Screenshot successful'
                              , template: 'Click OK to share'
          }).then(function(res) {
            if (res) {
              window.plugins.socialsharing.share(null, null, 'file://' + r.filePath);
            } else {
              $ionicPopup.alert({ title: 'Error!'
                                , template: 'Could not share'
              });
            }
          });
        }
      }), 'jpg', 50, 'randomScreenshot');
    };
    */

    //slider_functions
    $scope.sliderOptions = {
        loop: false,
        speed: 300,
        effect: 'coverflow',
        initialSlide: 0
      };
          
    $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
      // data.slider is the instance of Swiper
      $scope.slider = data.slider;
    });

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
      $scope.activeIndex = data.activeIndex;
      $scope.previousIndex = data.previousIndex;
    });
    
    

})
;