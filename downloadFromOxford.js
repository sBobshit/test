var curent = 1;
var pages = [];
$(".prev-page-move-icon").click(function () {
console.log("current", current);
var pg1 = $(`book-image-${current}`).attr("src");
var pg2 = $(`book-image-${current + 1}`).attr("src");
pages.push(pg1, pg2);
console.log(pages);
current++;
current++;
})
