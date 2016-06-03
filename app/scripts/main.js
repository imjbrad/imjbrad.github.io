var projectsMiniApp = angular.module('projectsMiniApp', []);

projectsMiniApp.controller('projectsController', function($scope){

  $('.browser-button').on('touchstart click', function(){
    console.log('ta');
    $('.browser').toggleClass('minimize');
  });

  $scope.posts = [
    {
      name: 'Pi Daily, 2016',
      type: 'Web App',
      url: 'http://www.pidaily.xyz',
      description: 'Pi is a visual day planning app with the philosophy that wellness is key to sustainable, every day productivity. As you plan your todos and assignments, Pi focuses on sleep, exercise, and healthy eating to keep you on track. As a health conscious productivity platform, Pi aims to change the culture of work to be more considerate of wellness for students and young professionals. (Angular)',
      image: 'images/pi.png',
      postInfoBackgroundColor: '#e3c686',
      postInfoTextColor: '#393a3a'
    },
    {
      name: 'The Critical Reader, 2015',
      type: 'Chrome Extension',
      url: 'http://www.cr-app.heroku.com',
      description: 'The Critical Reader is an experimental platform for learning about and responding to complex events in the news. A Chrome extension helps users easily compare media perspectives, understand a journalist’s position on a story, and ask questions. (Heroku, Django, and Angular)',
      image: 'images/cr.jpg',
      postInfoBackgroundColor: '#BF433B',
      postInfoTextColor: 'white'
    },
    {
      name: 'Crowds, 2014',
      type: 'iOS App',
      url: 'http://technical.ly/baltimore/2013/12/12/mica-sophomores-look-siphon-users-facebook-events-new-app/',
      description: 'Crowds is an early project for starting parties, hangouts, and spontaneous events on campus. Design by Zak Crapo. (Currently Offline)',
      image: 'images/crowds.jpg',
      postInfoBackgroundColor: '#f2f2f2',
      postInfoTextColor: 'black'
    },
    {
      name: 'Sendasock, 2013',
      type: 'iOS App (Phone Gap)',
      url: 'https://www.buzzfeed.com/katienotopoulos/the-rise-of-the-hookup-app?utm_term=.sp2dYlngL#.bodW5y3bn',
      description: 'Sendasock is a clever product of my freshmen year at MICA. The app is a cute, modern implementation of the classic sock (or tie) on the door knob. Design by Zak Crapo.',
      image: 'images/sendasock.png',
      postInfoBackgroundColor: 'black',
      postInfoTextColor: 'white'
    }
  ];


  $scope.selectPost = function(i){
    if($scope.selectedPost == i){
      return $scope.selectedPost = null;
    }
    $scope.selectedPost = i;
  }

});

projectsMiniApp.directive('showLater', function($timeout){
  return {
    restrict: 'A',
    link: function($scope, $el, $attr) {
      $timeout(function(){
        $el.css('display', 'block');
      });
    }
  }
});
