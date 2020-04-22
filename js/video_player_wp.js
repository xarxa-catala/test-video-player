var video;
var configVideoPlayerId = 'video_player';
var configChaptersListId = 'video_player_chapters';
var configChapterClass = 'video_player_chapter';
var configCurrentChapterClass = 'current';
var configDataSource = 'vsource';
var configCurrentChapterTitleClass = 'video_player_current_chapter_title';

jQuery(document).ready(function () {
  video = document.getElementById(configVideoPlayerId);
  let $vidosrc = jQuery('#' + configChaptersListId + ' li:first-child .' + configChapterClass);
  $vidosrc.addClass(configCurrentChapterClass);
  jQuery('.' + configCurrentChapterTitleClass).html($vidosrc.html());
  loadVideo($vidosrc.data(configDataSource));
});

jQuery(document).on('click', '#' + configChaptersListId + ' .' + configChapterClass, function (e) {
  e.preventDefault();
  if (!jQuery(this).hasClass(configCurrentChapterClass)) {
    jQuery('#' + configChaptersListId + ' .' + configChapterClass + '.' +
      configCurrentChapterClass).removeClass(configCurrentChapterClass);
    jQuery(this).addClass(configCurrentChapterClass);
    jQuery('.' + configCurrentChapterTitleClass).html(jQuery(this).html());
    loadVideo(jQuery(this).data(configDataSource));
    video.play();
  }
});

function loadVideo(source)
{
  jQuery('#' + configVideoPlayerId + ' #mp4').attr('src', source);
  video.load();
}
