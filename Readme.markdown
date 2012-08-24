<img src="https://github.com/photo/frontend/raw/master/files/creative/logo.png" style="width:234px; height:43px; margin:auto;">

### What is OpenPhoto?

1.  [FAQ](http://theopenphotoproject.org/documentation/faq/Faq), Answers to the most common questions.


### Examples

First, include the `OpenPhoto.js` script.

    <script src="OpenPhoto.js" data-site="http://your-site.com"></script>

Second, write a function that does something with the API response.

    <script>
      /*
       * The render function takes a response and loops over the result (in this case, photos)
       *  For each photo we create an IMG element and append it to the BODY
       *  This is can be made much easier using a JavaScript library.
       */
      function render(response) {
        var photos = response.result,
            photo,
            body = document.getElementsByTagName('body')[0],
            img;
        for(i in photos) {
          if(photos.hasOwnProperty(i)) {
            photo = photos[i];
            img = document.createElement('img');
            img.src = photo["path100x100xCR"];
            body.appendChild(img);
          }
        }
      }
    </script>

Third, call any [API endpoint](http://theopenphotoproject.org/documentation) and pass the callback function we defined above.

    <script>
      OpenPhoto.Api.load('/photos/tags-favorites/list.json?pageSize=45&returnSizes=40x40xCR,800x600', render);
    </script>

This is a pure JavaScript example which doesn't rely on any third party libraries.

Enjoy!
