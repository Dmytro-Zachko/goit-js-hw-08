import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = "videoplayer-current-time"

player.on('timeupdate', throttle(OnPlayerData, 1000));
function OnPlayerData(data) {
    localStorage.setItem(LOCAL_KEY, data.seconds)
} 
const PlayerCurrentValue = localStorage.getItem(LOCAL_KEY)
if (PlayerCurrentValue) {
player.setCurrentTime(PlayerCurrentValue)
}
