<?php
$arr_video_ids = array(
    'https://www.youtube.com/watch?v=Pzv_lUp3iOQ',
    'https://www.youtube.com/watch?v=zRtU8dpTEXg',
    'https://www.youtube.com/watch?v=EfSfLyeREMc',
    'https://www.youtube.com/watch?v=C-nypyy4pLg',
    'https://www.youtube.com/watch?v=OJpMT3odXtQ',
    'https://www.youtube.com/watch?v=WBnzOyBVwdg',
);
 
function getYouTubeThumbnailImage($video_id) {
    return "http://i3.ytimg.com/vi/$video_id/hqdefault.jpg";
}
 
function extractVideoID($url){
    $regExp = "/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/";
    preg_match($regExp, $url, $video);
    return $video[7];
}
?>