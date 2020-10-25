$(function(){
    $.get("https://private-anon-e3f0ec5c7e-wad20postit.apiary-mock.com/posts", function(response) {
        for (item of response) {
            let post = $('<div class="post">');
            let author = $('<div class="post-author">');
            let authorInfo = $('<span class="post-author-info">');
            let likeButton = $('<div class="post-actions">');
            let content = null;
            if (item.media != null){
                content = $('<div class="post-image">');
                if (item.media.type == "video"){
                    content.append($('<video controls>').append($('<source type="video/mp4">').attr('src', item.media.url)));
                } else {
                    content.append($('<img>').attr('src', item.media.url));
                }
            }
            let button = $('<button type="button" name="like" class="like-button">').text(item.likes);
            button.click(function(){
                if (!button.hasClass("liked")) {
                    button.addClass("liked");
                } else {
                    button.removeClass("liked");
                }
            });
            likeButton.append(button);
            authorInfo
                .append($('<img>').attr('src', item.author.avatar))
                .append($('<small>').text(item.author.firstname + " " + item.author.lastname));
            author
                .append(authorInfo)
                .append($('<small>').text(item.createTime));
            post
                .append(author)
                .append($('<div class="post-title">').append($('<h3>').text(item.text)))
                .append(content)
                .append(likeButton);
            $('.main-container').append(post);
        }
    });
});
