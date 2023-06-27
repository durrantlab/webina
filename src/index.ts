// This file is part of Webina, released under the Apache 2.0 License. See
// LICENSE.md or go to https://opensource.org/licenses/Apache-2.0 for full
// details. Copyright 2023 Jacob D. Durrant.

import * as UI from "./UI/UI";
import * as VueSetup from "./Vue/Setup";
import { VERSION } from "./Version";
declare let ga;

console.log("Webina Web App " + VERSION);

VueSetup.setup();
UI.setup();

// If the url has "durrantlab" in it, contact google analytics. Logging all
// usage would be ideal for grant reporting, but some users may wish to run
// versions of webina on their own servers specifically to maintain privacy
// (e.g., in case of proprietary data). Calls to google analytics in such
// scenarios could be alarming, even though I'm only recording basic
// demographics anyway.
if (window.location.href.indexOf("durrantlab") !== -1) {
    setTimeout(() => {
        (<any>window).dataLayer = (<any>window).dataLayer || [];
        function gtag() {
            (<any>window).dataLayer.push(arguments);
        }

        // @ts-ignore
        gtag("js", new Date());

        // Set your Google Analytics tracking ID here
        // @ts-ignore
        gtag("config", "UA-88790584-1");

        // Create a new script element
        const script = document.createElement("script");

        // Set the src to the Google Analytics script
        script.src =
            "https://www.googletagmanager.com/gtag/js?id=UA-88790584-1";

        // When the script has loaded, you can call gtag()
        script.onload = function () {
            // @ts-ignore
            gtag("event", "page_view", { send_to: "UA-88790584-1" });
        };

        // Add the script to the document
        document.body.appendChild(script);

        // // Load https://www.googletagmanager.com/gtag/js?id=UA-88790584-1 by
        // // adding it to the header
        // window.onload = () => {
        //     new Promise((resolve, reject) => {
        //         let script = document.createElement("script");
        //         script.src =
        //             "https://www.googletagmanager.com/gtag/js?id=UA-88790584-1";
        //         // script.setAttribute("async", "true");
        //         script.onload = resolve;
        //         script.onerror = reject;
        //         document.head.appendChild(script);
        //     })
        //         .then(() => {
        //             // Google tag (gtag.js)
        //             (<any>window).dataLayer = (<any>window).dataLayer || [];
        //             function gtag() {
        //                 (<any>window).dataLayer.push(arguments);
        //             }
        //             // @ts-ignore
        //             gtag("js", new Date());
        //             // @ts-ignore
        //             gtag("config", "UA-88790584-1");

        //             // TODO: Send event here? Might not be needed. Can't upload
        //             // right now to check.

        //             // gtag('event', 'Download: ' + href.replace("https://durrantlab.pitt.edu/", ""));

        //         })
        //         .catch((e) => {
        //             console.log("Error loading google analytics script.");
        //             console.log(e);
        //         });

        //     // <script async src="https://www.googletagmanager.com/gtag/js?id=UA-88790584-1"></script>

        //     // // Just to make sure it isn't blocking...
        //     // (function(i, s, o, g, r, a, m) {
        //     //     i['GoogleAnalyticsObject'] = r;
        //     //     i[r] = i[r] || function() {
        //     //         (i[r].q = i[r].q || []).push(arguments)
        //     //     }, i[r].l = 1 * new Date().getTime();
        //     //     // @ts-ignore
        //     //     a = s.createElement(o);
        //     //     // @ts-ignore
        //     //     m = s.getElementsByTagName(o)[0];
        //     //     // @ts-ignore
        //     //     a.async = 1;
        //     //     // @ts-ignore
        //     //     a.src = g;
        //     //     // @ts-ignore
        //     //     m.parentNode.insertBefore(a, m)
        //     // })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        //     // ga('create', 'UA-144382730-1', {
        //     //     'name': 'webina'
        //     // });

        //     // // UA-144382730-1 reports to pcaviz account.
        //     // ga('webina.send', {
        //     //     "hitType": 'event',
        //     //     "eventCategory": 'webina',
        //     //     "eventAction": 'pageview',
        //     //     "eventLabel": window.location.href
        //     // });
        // };
    }, 0);
}
