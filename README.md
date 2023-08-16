This a game developed on Java Script DOM Manipulation

Things I Learned :

1. DOM Manipulation
2. CSS var method
3. Basic JavaScript

Challenges Faced

1. favicon.ico error

Error : GET
http://127.0.0.1:5500/favicon.ico
[HTTP/1.1 404 Not Found 0ms]
Resolution :
https://stackoverflow.com/questions/1321878/how-to-prevent-favicon-ico-requests#

2. Footer

I encountered an issue with my footer: when there's less content, the footer doesn't remain at the bottom; however, with more content, the footer sticks to the bottom.

To address this, I've adopted the sticky footer approach. I've set the parent container to have a minimum height of 100vh, which ensures that it occupies at least the full viewport height. Additionally, I've applied the following styles to the footer:

css

footer {
position: sticky;
top: 100%;
/_ ...other styles... _/
}

The position: sticky; property makes the footer behave as a sticky element. When content pushes the footer beyond the viewport, it sticks to the bottom of the container. The top: 100%; rule ensures that the footer initially starts at the bottom of the container.

Overall, my approach aims to maintain a consistent layout: the footer remains at the bottom regardless of the content's height. This provides a clean and predictable user experience across various content scenarios.
