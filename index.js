function showContent(id) {
    var content = document.getElementById('content').children;

    for (var i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
    }

    var activeContent = document.getElementById(id);
    activeContent.classList.add('active');
}