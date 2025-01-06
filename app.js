const art = new Artplayer({
    container: '#player',
    url: './assets/video.mp4',
    poster: './assets/poster.jpg',
    subtitle: {
        url: './assets/subtitles.vtt',
        style: {
            color: '#fff',
            fontSize: '16px',
        },
    },
    theme: '#ffad00',
});

document.getElementById('toggleTheme').addEventListener('click', () => {
    const themeLink = document.getElementById('theme');
    themeLink.href = themeLink.href.includes('dark-theme.css')
        ? 'themes/light-theme.css'
        : 'themes/dark-theme.css';
});
