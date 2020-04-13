var video;
var configVideoPlayerId = 'video_player';
var configChaptersListId = 'video_player_chapters';
var configChapterClass = 'video_player_chapter';

$(document).ready(function () {
  video = document.getElementById(configVideoPlayerId);
  let $vidosrc = $('#' + configChaptersListId + ' li:first-child .' + configChapterClass);
  loadVideo($vidosrc.data('vsource'));
});

$(document).on('click', '#' + configChaptersListId + ' .' + configChapterClass, function (e) {
  e.preventDefault();
  loadVideo($(this).data('vsource'));
  video.play();
});

function loadVideo(source)
{
  $('#' + configVideoPlayerId + ' #mp4').attr('src', source);
  video.load();
}
