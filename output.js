//Thu Oct 03 2024 20:13:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const authorizedDomains = ["xjj.xvaln.cn", "xjj.7xnn.cn"];
function isDomainAuthorized(c) {
  return authorizedDomains.includes(c);
}
function getDomainFromUrl(c) {
  const d = document.createElement("a");
  return d.href = c, d.hostname;
}
function checkDomainAuthorization() {
  const d = getDomainFromUrl(window.location.href);
  if (!isDomainAuthorized(d)) {
    document.body.innerHTML = "<h1>当前域名未被授权访问此页面。</h1>";
    throw new Error("Unauthorized domain");
  }
}
checkDomainAuthorization();
function isPC() {
  return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function inIframe() {
  return window.self !== window.top;
}
isPC() && !inIframe() && (window.location.href = "/pc");
let videos = [],
  currentVideoIndex = 0,
  touchStartY = 0,
  touchStartX = 0,
  isFirstPlay = true,
  isInitialLoad = true,
  isLoading = false;
const CACHE_SIZE = 5;
let videoCache = new Map(),
  currentCategory = "suiji";
document.getElementById("categorySelect").addEventListener("change", c => {
  currentCategory = c.target.value;
  videos = [];
  currentVideoIndex = 0;
  videoCache.clear();
  document.getElementById("videoContainer").innerHTML = "";
  loadVideos();
});
async function ensureCachedVideos() {
  while (videoCache.size < CACHE_SIZE && videos.length > videoCache.size) {
    const d = videoCache.size;
    await cacheVideo(d);
  }
}
async function cacheVideo(c) {
  if (videoCache.has(c) || c >= videos.length) return;
  const e = document.querySelector(".video-wrapper:nth-child(" + (c + 1) + ") video");
  if (!e) return;
  return new Promise(f => {
    e.preload = "auto";
    e.load();
    const h = () => {
      e.readyState >= 3 ? (videoCache.set(c, true), f()) : setTimeout(h, 200);
    };
    h();
  });
}
async function fetchVideosWithRetry(c, d, e = 1000) {
  try {
    const g = await fetch("../fetch_videos.php?category=" + c + "&count=10"),
      h = await g.json();
    if (!Array.isArray(h) || h.length === 0) {
      throw new Error("No valid video data received");
    }
    return h;
  } catch (j) {
    return console.error("加载视频时出错:", j), await new Promise(k => setTimeout(k, e)), fetchVideosWithRetry(c, d, e);
  }
}
async function loadVideos(c = 3) {
  if (isLoading) return;
  isLoading = true;
  isInitialLoad && showLoading();
  try {
    const e = await fetchVideosWithRetry(currentCategory, c);
    videos = videos.concat(e);
    renderNewVideos(e);
    await ensureCachedVideos();
  } finally {
    isInitialLoad && (hideLoading(), isInitialLoad = false);
    isLoading = false;
  }
}
function showLoading() {
  document.getElementById("loadingOverlay").style.display = "flex";
}
function hideLoading() {
  document.getElementById("loadingOverlay").style.display = "none";
}
function renderNewVideos(c) {
  const e = document.getElementById("videoContainer");
  c.forEach((f, g) => {
    const h = document.createElement("div");
    h.className = "video-wrapper " + (videos.length === c.length && g === 0 ? "active" : "");
    h.innerHTML = "\n                    <video src=\"" + f.url + "\" class=\"video-player\" loop playsinline webkit-playsinline x5-playsinline preload=\"metadata\">\n                        Your browser does not support the video tag.\n                    </video>\n                    <div class=\"video-overlay " + (isFirstPlay ? "" : "hidden") + "\">\n                        <button class=\"play-button\">▶</button>\n                    </div>\n                    <div class=\"video-controls\">\n                        <button class=\"control-button play-pause-button\">\n                            <svg viewBox=\"0 0 24 24\">\n                                <path d=\"M8 5v14l11-7z\"/>\n                            </svg>\n                        </button>\n                    </div>\n                    <div class=\"video-info\">\n                        <h2>@" + f.username + "</h2>\n                        <p>" + f.description + "</p>\n                    </div>\n                    <div class=\"video-actions\">\n                        <button onclick=\"likeVideo(" + (videos.length - c.length + g) + ")\" class=\"action-button\">\n                            <svg class=\"action-icon\" viewBox=\"0 0 24 24\" fill=\"" + (f.liked ? "red" : "none") + "\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                                <path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path>\n                            </svg>\n                            <span>" + f.likes + "</span>\n                        </button>\n                        <button onclick=\"toggleComments()\" class=\"action-button\">\n                            <svg class=\"action-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                                <path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path>\n                            </svg>\n                            <span>" + f.comments.length + "</span>\n                        </button>\n                        <button onclick=\"shareVideo(" + (videos.length - c.length + g) + ")\" class=\"action-button\">\n                            <svg class=\"action-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                                <circle cx=\"18\" cy=\"5\" r=\"3\"></circle>\n                                <circle cx=\"6\" cy=\"12\" r=\"3\"></circle>\n                                <circle cx=\"18\" cy=\"19\" r=\"3\"></circle>\n                                <line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line>\n                                <line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line>\n                            </svg>\n                            <span>分享</span>\n                        </button>\n                    </div>\n                ";
    e.appendChild(h);
  });
  setupVideoInteractions();
}
function setupVideoInteractions() {
  const d = document.querySelectorAll(".video-wrapper");
  d.forEach((e, f) => {
    const i = e.querySelector("video"),
      k = e.querySelector(".play-button"),
      l = e.querySelector(".play-pause-button");
    k && k.addEventListener("click", m => {
      m.stopPropagation();
      startPlayback();
    });
    l && l.addEventListener("click", m => {
      m.stopPropagation();
      togglePlayPause(i, l);
    });
    e.addEventListener("click", () => {
      togglePlayPause(i, l);
    });
    i.addEventListener("play", () => {
      updatePlayPauseButton(l, false);
    });
    i.addEventListener("pause", () => {
      updatePlayPauseButton(l, true);
    });
  });
}
function togglePlayPause(c, d) {
  c.paused ? c.play() : c.pause();
  updatePlayPauseButton(d, c.paused);
}
function updatePlayPauseButton(c, d) {
  d ? c.innerHTML = "\n                    <svg viewBox=\"0 0 24 24\">\n                        <path d=\"M8 5v14l11-7z\"/>\n                    </svg>\n                " : c.innerHTML = "\n                    <svg viewBox=\"0 0 24 24\">\n                        <path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\"/>\n                    </svg>\n                ";
}
function startPlayback() {
  isFirstPlay = false;
  const d = document.querySelectorAll(".video-wrapper");
  d.forEach(e => {
    const f = e.querySelector(".video-overlay");
    f && f.classList.add("hidden");
  });
  playCurrentVideo();
}
async function playCurrentVideo() {
  const d = document.querySelectorAll(".video-player"),
    e = document.querySelectorAll(".play-pause-button");
  d.forEach((f, g) => {
    g === currentVideoIndex ? (f.play().catch(k => {
      console.error("自动播放失败:", k);
      const m = f.parentElement.querySelector(".video-overlay");
      m && (m.style.display = "flex");
    }), updatePlayPauseButton(e[g], false)) : (f.pause(), f.currentTime = 0, updatePlayPauseButton(e[g], true));
  });
  for (let f = 0; f < currentVideoIndex; f++) {
    videoCache.delete(f);
  }
  await ensureCachedVideos();
}
document.addEventListener("touchend", c => {
  const e = c.changedTouches[0].clientY,
    f = c.changedTouches[0].clientX,
    g = touchStartY - e,
    h = touchStartX - f;
  if (Math.abs(g) > Math.abs(h) && Math.abs(g) > 50) {
    if (g > 0) currentVideoIndex++, currentVideoIndex >= videos.length - 2 && loadVideos(3);else g < 0 && currentVideoIndex > 0 && currentVideoIndex--;
    document.querySelectorAll(".video-wrapper").forEach((j, k) => {
      j.classList.toggle("active", k === currentVideoIndex);
    });
    playCurrentVideo();
  }
});
function likeVideo(c) {
  const e = videos[c],
    f = document.querySelectorAll(".video-actions .action-button")[c * 3],
    g = f.querySelector("svg"),
    h = f.querySelector("span");
  !e.liked ? (e.likes++, e.liked = true, g.setAttribute("fill", "red")) : (e.likes--, e.liked = false, g.setAttribute("fill", "none"));
  h.textContent = e.likes;
}
function toggleComments() {
  const d = document.getElementById("commentsOverlay");
  d.classList.toggle("show");
  if (d.classList.contains("show")) {
    renderComments();
  }
}
function renderComments() {
  const d = document.getElementById("commentsList"),
    e = document.getElementById("commentCount"),
    f = videos[currentVideoIndex];
  d.innerHTML = "";
  f.comments.forEach(g => {
    const j = document.createElement("div");
    j.className = "comment";
    j.textContent = g.username + ": " + g.text;
    d.appendChild(j);
  });
  e.textContent = f.comments.length;
}
function addComment() {
  const d = document.getElementById("newCommentInput"),
    e = d.value.trim();
  e && (videos[currentVideoIndex].comments.push({
    "username": "我",
    "text": e
  }), d.value = "", renderComments(), updateCommentCount());
}
function updateCommentCount() {
  const d = document.querySelectorAll(".video-actions .action-button")[currentVideoIndex * 3 + 1],
    e = d.querySelector("span");
  e.textContent = videos[currentVideoIndex].comments.length;
}
function shareVideo(c) {
  alert("分享功能待实现");
}
document.addEventListener("touchstart", c => {
  touchStartY = c.touches[0].clientY;
  touchStartX = c.touches[0].clientX;
});
document.addEventListener("touchmove", c => {
  c.preventDefault();
}, {
  "passive": false
});
let preloadDistance = 3;
async function preloadVideos(c) {
  for (let e = c; e < c + preloadDistance && e < videos.length; e++) {
    if (!videos[e].preloaded) {
      const f = document.querySelector(".video-wrapper:nth-child(" + (e + 1) + ") video");
      f && (f.load(), videos[e].preloaded = true);
    }
  }
}
async function loadVideos(c = 3) {
  if (isLoading) return;
  isLoading = true;
  if (isInitialLoad) {
    showLoading();
  }
  try {
    const f = await fetchVideosWithRetry(currentCategory, c);
    videos = videos.concat(f);
    renderNewVideos(f);
    await preloadVideos(videos.length - f.length);
  } finally {
    isInitialLoad && (hideLoading(), isInitialLoad = false);
    isLoading = false;
  }
}
document.addEventListener("wheel", c => {
  if (c.deltaY > 0) {
    currentVideoIndex++;
    if (currentVideoIndex >= videos.length - 2) {
      loadVideos(3);
    }
  } else {
    if (c.deltaY < 0 && currentVideoIndex > 0) {
      currentVideoIndex--;
    }
  }
  document.querySelectorAll(".video-wrapper").forEach((h, i) => {
    h.classList.toggle("active", i === currentVideoIndex);
  });
  !isFirstPlay && playCurrentVideo();
  preloadVideos(currentVideoIndex + 1);
});
async function playCurrentVideo() {
  const d = document.querySelectorAll(".video-player"),
    e = document.querySelectorAll(".play-pause-button");
  d.forEach((f, g) => {
    g === currentVideoIndex ? (f.play(), updatePlayPauseButton(e[g], false)) : (f.pause(), f.currentTime = 0, updatePlayPauseButton(e[g], true));
  });
  preloadVideos(currentVideoIndex + 1);
}
window.addEventListener("load", () => {
  const d = /MicroMessenger/i.test(navigator.userAgent);
  if (d) {
    document.getElementById("wechatOverlay").style.display = "flex";
  } else loadVideos().then(() => {
    preloadVideos(0);
  });
});
window.addEventListener("message", c => {
  if (c.data.direction === "up") window.scrollBy(0, window.innerHeight);else c.data.direction === "down" && window.scrollBy(0, -window.innerHeight);
});