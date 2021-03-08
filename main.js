//메뉴 버튼
const btn = document.querySelector(".menuIcon"),
     menu = document.querySelector(".navbarMenu");

btn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
});

//배너 이미지 슬라이드
const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
});

// 영화차트 이미지 슬라이드
const swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 4,
    spaceBetween: 15,
});

// 영화차트 탭 메뉴
const movieBtn = $(".movieTitle > ul > li"),
  movieCont = $(".movieChart > div");

movieCont.hide().eq(0).show();
movieBtn.click(function(e){
    e.preventDefault();
    const target = $(this),
      index = target.index();
    movieBtn.removeClass("active");
    target.addClass("active");
    movieCont.css("display", "none");
    movieCont.eq(index).css("display", "block");
});

// 공지사항 탭 메뉴
const tabMenu = $(".notice");
tabMenu.find("ul > li >ul").hide();
tabMenu.find("li.active > ul").show();

function tabList(e){
    e.preventDefault();
    const target = $(this);
    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
}

tabMenu.find("ul> li > a").click(tabList).focus(tabList);