function PlayerCtrl($scope, $http) {
    
    var m = window.location.pathname.match(/\/song\/([^\/]+)\/([^\/]+)/);
    if (m.length < 2) {
        alert('Invalid song path')
        return;
    }
    var user = m[1];
    var songname = m[2];
    console.log(user, songname);
    
    // Get GIF data for the song
    //$http.get(appConfig.context + '/1/song/').success(function(data) {
    //    $scope.phones = data;
    //});


    // Get GIF data for the song
    song_api = appConfig.context + '/1/suggest/' + user + "/" + songname + "/";
    $http.get(song_api).success(function(data) {
        console.log(data);
        console.log('lol');
        $scope.suggest = data;
    });

    // Render player
    
}
