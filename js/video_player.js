var listOfChapters = [];
var urlIndexChapters = 'https://api.multimedia.xarxacatala.cat/shows/1/seasons/2/episodes';

$(document).ready(function () {
  prepareListOfChapters(obtainJSONFromIndex());
  buildList();

  console.log(listOfChapters);
});

function obtainJSONFromIndex() {

  $.ajax({
    type: 'GET',
    url: urlIndexChapters,
    dataType: 'JSONP',
    success: function (data, status, xhr) {
        alert(xhr.getResponseHeader('Location'));
      },
  });

  return '[{"id":14,"name":"","number":0,"show_id":1,"season_id":2,"url":"https://multimedia.xarxacatala.cat/DW/S2/DW-02x00.mp4","prequels":null,"sequels":null},{"id":15,"name":"","number":1,"show_id":1,"season_id":2,"url":"https://multimedia.xarxacatala.cat/DW/S2/DW-02x01.mp4","prequels":null,"sequels":null},{"id":16,"name":"","number":2,"show_id":1,"season_id":2,"url":"https://multimedia.xarxacatala.cat/DW/S2/DW-02x02.mp4","prequels":null,"sequels":null},{"id":17,"name":"","number":3,"show_id":1,"season_id":2,"url":"https://multimedia.xarxacatala.cat/DW/S2/DW-02x03.mp4","prequels":null,"sequels":null},{"id":18,"name":"","number":4,"show_id":1,"season_id":2,"url":"https://multimedia.xarxacatala.cat/DW/S2/DW-02x04.mp4","prequels":null,"sequels":null},{"id":19,"name":"","number":5,"show_id":1,"season_id":2,"url":"https://multimedia.xarxacatala.cat/DW/S2/DW-02x05.mp4","prequels":null,"sequels":null},{"id":20,"name":"","number":6,"show_id":1,"season_id":2,"url":"https://multimedia.xarxacatala.cat/DW/S2/DW-02x06.mp4","prequels":null,"sequels":null},{"id":21,"name":"","number":7,"show_id":1,"season_id":2,"url":"https://multimedia.xarxacatala.cat/DW/S2/DW-02x07.mp4","prequels":null,"sequels":null},{"id":22,"name":"","number":8,"show_id":1,"season_id":2,"url":"https://multimedia.xarxacatala.cat/DW/S2/DW-02x08.mp4","prequels":null,"sequels":null},{"id":23,"name":"","number":9,"show_id":1,"season_id":2,"url":"https://multimedia.xarxacatala.cat/DW/S2/DW-02x09.mp4","prequels":null,"sequels":null},{"id":24,"name":"","number":10,"show_id":1,"season_id":2,"url":"https://multimedia.xarxacatala.cat/DW/S2/DW-02x10.mp4","prequels":null,"sequels":null},{"id":25,"name":"","number":11,"show_id":1,"season_id":2,"url":"https://multimedia.xarxacatala.cat/DW/S2/DW-02x11.mp4","prequels":null,"sequels":null},{"id":26,"name":"","number":12,"show_id":1,"season_id":2,"url":"https://multimedia.xarxacatala.cat/DW/S2/DW-02x12.mp4","prequels":null,"sequels":null},{"id":27,"name":"","number":13,"show_id":1,"season_id":2,"url":"https://multimedia.xarxacatala.cat/DW/S2/DW-02x13.mp4","prequels":null,"sequels":null}]';
}

function prepareListOfChapters(json) {
  $.each(JSON.parse(json), function (key, value) {
    listOfChapters.push(value);
  });
}

function buildList() {
  let $list = $('#video_player_chapters');
  $.each(listOfChapters, function (key, value) {
    console.log('key: ' + key);
    console.log('value: ' + value.number + ' - ' + value.name);
    console.log('url: ' + value.url);
    $list.append('<li id="' + value.id + '" data-source="' + value.url + '">'
      + value.number + ' - ' + value.name + '</li>');
  });
}
