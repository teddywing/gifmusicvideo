function PlayerCtrl($scope) {
    // Get GIF data for the song
    $http.get(appConfig.context + '/1/song/').success(function(data) {
        $scope.phones = data;
    });


    // Get GIF data for the song
    $http.get(appConfig.context + '/1/fetchgifs/').success(function(data) {
        $scope.suggest = data;
    });

    // Render player
    
}
