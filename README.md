WProofreader
=====================
WebSpellChecker Proofreader (WProofreader) is a new ultimate multi-language proofreading tool. It provides both instant and on-click proofreading modes in a new convenient UI. End users just need to hover on the marked words for instant correction suggestions or click the dialog icon in the bottom right corner to have the whole text proofread at once.

Here’s why to choose WProofreader for your web app:
* Both instant spelling and grammar checking, and proofreading in a dialog are now available simultaneously.
* You’ll need a single script to integrate in all types of editable fields. 
* The Auto-search takes care of detecting new editable fields and enabling proofreading in them automatically.
* New clean and comfy UI includes intuitive suggestion boxes, proofreading on hover, and more.
* The powerful engine checks spelling in over 150 and grammar – in 18 languages in all modern browsers.
* WProofreader is WAI-compliant, up to WCAG 2.1 and Section 508 accessibility standards. The features like keyboard navigation and improved UI readability were added to allow the users, regardless of the limitations they might be facing, to easily proofread their texts in a most convenient manner.
* Personal user dictionaries. Some rare or field-specific words may be not recognized by our proofreading engine and reported as a mistake. If the word is spelled correctly a user can add it to his or her own dictionary, to prevent it from being reported in the future.
* Global custom dictionaries are company-wide vocabularies, which are created and set at an admin level on top of the base languages. 

Demo
------------
* [WProofreader Demos](https://webspellchecker.com/wsc-proofreader/#demos)
* [WProofreader for HTML Editable Controls (Textarea)](https://webspellchecker.com/wsc-proofreader/#proofreader-textarea)
* [WProofreader for HTML Editable Controls (Div)](https://webspellchecker.com/wsc-proofreader/#proofreader-div)
* [WProofreader for CKEditor 4 Demo](https://webspellchecker.com/wsc-proofreader/#proofreader-ckeditor4)
* [WProofreader for CKEditor 5 Demo](https://webspellchecker.com/wsc-proofreader/#proofreader-ckeditor5)
* [WProofreader for TinyMCE Demo](https://webspellchecker.com/wsc-proofreader/#proofreader-tinymce4)
* [WProofreader for Froala Editor Demo](https://webspellchecker.com/wsc-proofreader/#proofreader-froala-editor)
* [WProofreader for Kendo UI Demo](https://webspellchecker.com/wsc-proofreader/#proofreader-kendo-ui)
* [WProofreader for Textbox.io](https://webspellchecker.com/wsc-proofreader/#proofreader-textbox-io)
* [WProofreader for Redactor](https://webspellchecker.com/wsc-proofreader/#proofreader-redactor)
* [WProofreader for Quill](https://webspellchecker.com/wsc-proofreader/#proofreader-quill)
* [WProofreader for ProseMirror](https://webspellchecker.com/wsc-proofreader/#proofreader-prosemirror)
* [WProofreader for Trix](https://webspellchecker.com/wsc-proofreader/#proofreader-trix)

Integrations
------------
Here is list of most common uses cases of the WProofreader integration in your web app:

* HTML editable controls such as <input> or <textarea> and elements with contenteditable attribute set to ‘true’ e.g. <div>, <iframe>;
* Modern WYSIWYG editors such as CKEditor 4, CKEditor 5, TinyMCE, Froala Editor, Kendo UI, Quill, Redactor, Summernote, RadEditor - Telerik ASP.NET Editor, ProseMirror, Scribe, Trix, etc.

Supported Languages
------------
By default WProofreader supports 16 languages: American English, British English, Brazilian Portuguese, Canadian English, Canadian French, Danish, Dutch, English, Finnish, French, German, Greek, Italian, Norwegian Bokmal, Portuguese, Spanish, Swedish.

There are also over 150 additional languages and specialized dictionaries such as Medical and Legal available, you can check the full list [here](https://webspellchecker.com/additional-dictionaries/). 

Get Started
------------

WProofreader Cloud

1. Sign up for the [trial](https://www.webspellchecker.net/signup/hosted-signup.html#webspellchecker-proofreader-trial) or [paid](https://www.webspellchecker.net/signup/hosted-signup.html#webspellchecker-proofreader-paid) version here to get started with WProofreader Cloud. On the subscription, you will receive an email with your service ID, an activation key, that is required for the WProofreader service activation. 

2. Specify the path to the service.

```
<script type="text/javascript" src="https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js"></script>
```
3. Add a configuration script with the default WProofreader options.

```
<script>
  window.WEBSPELLCHECKER_CONFIG = {
    autoSearch: true,
    enableGrammar: true,
    serviceId: 'your-service-ID'
   };
</script>
```

You can adjust the default settings with the extra API options.

Check the full version of Get Started with Cloud WProofreader (autoSearch) guide for more details.

WProofreader Server

1. [Request a 30-day trial version of WebSpellChecker Server](https://webspellchecker.com/free-trial/).
2. [Setup a WebSpellChecker Server package on your server](https://docs.webspellchecker.net/display/WebSpellCheckerServer53x).
3. Specify the path to the service.

```
<script type="text/javascript" src="http(s)://your_host_name/spellcheck/wscbundle/wscbundle.js"></script>
```

4. Add a configuration script with the default WProofreader options.

```
<script>
  window.WEBSPELLCHECKER_CONFIG = {
    autoSearch: true,
    enableGrammar: true,
    servicePort: '2880',
    servicePath: '/'
   };
</script>
```

Check the full version of [Get Started with Server WProofreader (autoSearch)](https://docs.webspellchecker.net/pages/viewpage.action?pageId=449970306) guide for more details.

Browser Support
------------

This is the list of officially supported browsers. WProofreader may also work in other browsers and environments but we unable to check all of them and guarantee proper work.

* Chrome (the latest)
* Firefox (the latest)
* Safari (the latest)
* MS Edge (the latest)
* Internet Explorer 11.0+ (close to full support)
* Mobile Chrome (the latest)
* Mobile Safari (the latest)

Note: All browsers are to be supported for web pages that work in Standards Mode.

Resources
------------

* [WProofreader Official Page](https://webspellchecker.com/wsc-proofreader/)
* [Documentation](https://docs.webspellchecker.net/)
* [Term of Service](https://webspellchecker.com/terms-of-service/)

Reporting Issues
------------

We use GitHub Issues as the official public bug tracker for WProofreader. Here are some recommendations to take into account when reporting an issue:

* Provide steps which help us to reproduce an issue. A sample page or JSFiddle is always welcomed.
* Some issues may be browser and integration-specific.  So, please specify what browser and integration you encountered the issue.

Technical Support or Questions
------------

Holders of an active subscription to the services or a commercial license have access to professional technical assistance directly from the WebSpellChecker team. [Contact us here](https://webspellchecker.com/contact-us/).

License
------------

In order to use WProofreader you have to purchase one of the following licenses according to your needs. You can find more about that on our website on the [pricing plan page](https://webspellchecker.com/pricing/).
