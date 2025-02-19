const burgerIcon = document.getElementById('burger-icon');
const sidebar = document.getElementById('sidebar');

const videoDetails = [
    { "title": "Kuromi", "channelName": "Kuromi TV", "views": "2M", "posted": "2 hours ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "Cinnamoroll", "channelName": "Sanrio Fun", "views": "1.5M", "posted": "5 hours ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "Hello Kitty", "channelName": "Sanrio Official", "views": "3M", "posted": "1 day ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "My Melody", "channelName": "Melody Tunes", "views": "900K", "posted": "3 hours ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "Pochacco", "channelName": "Puppy Vibes", "views": "750K", "posted": "6 hours ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "Bad Badtz-Maru", "channelName": "Badtz-Maru Clips", "views": "2.5M", "posted": "12 hours ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "Gudetama", "channelName": "Lazy Egg", "views": "1.2M", "posted": "4 hours ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "Tuxedo Sam", "channelName": "Penguin Vibes", "views": "2.1M", "posted": "8 hours ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "Keroppi", "channelName": "Frog Life", "views": "1.9M", "posted": "10 hours ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "Little Twin Stars", "channelName": "Kiki & Lala", "views": "3.2M", "posted": "2 days ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "Chococat", "channelName": "Smart Kitty", "views": "870K", "posted": "1 hour ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "Pompompurin", "channelName": "Golden Retriever Club", "views": "2.8M", "posted": "5 days ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "Aggretsuko", "channelName": "Metal Panda", "views": "4.5M", "posted": "1 week ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "Hangyodon", "channelName": "Funny Fish", "views": "670K", "posted": "9 hours ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "Keroppi", "channelName": "Frog Life", "views": "1.9M", "posted": "10 hours ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" },
    { "title": "Marumofubiyori", "channelName": "Cozy Bear", "views": "720K", "posted": "11 hours ago", "thumbnail": "https://i.ytimg.com/vi/C1AZheIqXcw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oWTAP&rs=AOn4CLBzwPSRSaYBJ19QgHg3T47qUvMxog" }
];


burgerIcon.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar-open');
    sidebar.classList.toggle('sidebar-closed');
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchButton").addEventListener("click", function () {
        let searchTerm = document.getElementById("searchInput").value;
        console.log("Search term:", searchTerm);
    });
});

const videoContainer = document.getElementById("videoContainer");

videoDetails.forEach(video => {
    videoContainer.innerHTML += `
        <div class="col-md-3 mt-3">
            <div class="card cursor-pointer xy-box-shadow w-100 pb-2">
                <img src="${video.thumbnail}" class="card-img-top p-2" alt="${video.title}">
                <div class="card-body py-1">
                    <h6 class="card-title m-0 d-flex align-items-center justify-content-between">
                        ${video.title}
                        <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" focusable="false" aria-hidden="true">
                            <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
                        </svg>
                    </h6>
                    <div class="card-text font-size-12 ms-1 font-color-dull hover-text">${video.channelName}</div>
                    <div class="card-text font-size-12 font-color-dull">${video.views} views • ${video.posted}</div>
                </div>
            </div>
        </div>
    `;
});


