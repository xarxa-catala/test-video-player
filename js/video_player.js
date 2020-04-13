var video;
var configVideoPlayerId = 'video_player';
var configChaptersListId = 'video_player_chapters';
var configChapterClass = 'video_player_chapter';
var configDataSource = 'vsource';

$(document).ready(function () {
  video = document.getElementById(configVideoPlayerId);
  let $vidosrc = $('#' + configChaptersListId + ' li:first-child .' + configChapterClass);
  loadVideo($vidosrc.data(configDataSource));
});

$(document).on('click', '#' + configChaptersListId + ' .' + configChapterClass, function (e) {
  e.preventDefault();
  loadVideo($(this).data(configDataSource));
  video.play();
});

function loadVideo(source)
{
  $('#' + configVideoPlayerId + ' #mp4').attr('src', source);
  video.load();
}
