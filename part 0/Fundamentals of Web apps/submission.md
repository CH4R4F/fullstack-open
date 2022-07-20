## 0.4: new note
note over browser
the form uses POST request method for submiting data
also it sends data to "/exampleapp/new_note"
end note
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
note over browser
by default, the browser start refreshing again when form is submitted
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server->browser: notes (HTML-code)
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->browser: main.css (CSS-code)
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server->browser: main.js (JS-code)

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->browser: data.json (JSON-code)

note over browser
then the browser start rendering the nes data
end not

## 0.5: single page app
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server->browser: spa (HTML-code)
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->browser: main.css (CSS-code)
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server->browser: main.js (JS-code)
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->browser: data.json (JSON-code)

## 0.6: New Note
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa {content: 'my message here', date: new Date()}
server->browser: {"message":"note created"}

note over browser
the browser prevents the default behavior of the form (which is to refresh the page and send data)
after the user clicks on save btn .. the browser sends a server request contains the content and date of creating the note
then it adds the not to the page using DOM API
end note