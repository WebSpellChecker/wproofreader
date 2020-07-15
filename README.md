WProofreader
=====================

![WProofreader UI](https://webspellchecker.com/app/images/wproofreader-ui.png)


**WebSpellChecker Proofreader (WProofreader)** is multilingual proofreading tool for web applications. It enables grammar and spell check combining spelling and grammar suggestions while you type or work with your text in a dedicated dialog. End users just need to hover on the marked words for instant correction suggestions or click the dialog icon in the bottom right corner to have the whole text proofread at once.

Here’s why to choose WProofreader for your web app:
* Both instant spelling and grammar checking, and proofreading in a dialog are now available simultaneously.
* You’ll need a single script to integrate in all types of editable fields. 
* The auto-search takes care of detecting new editable fields and enabling proofreading in them automatically.
* New clean and comfy UI includes intuitive suggestion boxes, proofreading on hover, and more.
* The powerful engine checks spelling in over 150 and grammar – in 18 languages in all modern browsers.
* WProofreader is WAI-compliant, up to WCAG 2.1 and Section 508 accessibility standards. The features like keyboard navigation and improved UI readability were added to allow the users, regardless of the limitations they might be facing, to easily proofread their texts in a most convenient manner.
* Personal user dictionaries. Some rare or field-specific words may be not recognized by our proofreading engine and reported as a mistake. If the word is spelled correctly a user can add it to his or her own dictionary, to prevent it from being reported in the future.
* Global custom dictionaries are company-wide vocabularies, which are created and set at an admin level on top of the base languages. 

Demos
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
Here is a list of most common uses cases of the WProofreader integration in your web app:

* HTML editable controls such as ```<textarea>``` and elements with contenteditable attribute set to ‘true’ e.g. ```<div>```, ```<iframe>```;
* Modern WYSIWYG editors such as [CKEditor 4](https://ckeditor.com/ckeditor-4/), [CKEditor 5](https://ckeditor.com/ckeditor-5/), [TinyMCE](https://www.tiny.cloud/), [Froala Editor](https://www.froala.com/wysiwyg-editor), [Kendo UI](https://www.telerik.com/kendo-ui), [Quill](https://quilljs.com/), [Redactor](https://imperavi.com/redactor/), [Summernote](https://summernote.org/), [RadEditor - Telerik ASP.NET Editor](https://demos.telerik.com/aspnet-ajax/editor/examples/overview/defaultcs.aspx), [ProseMirror](https://prosemirror.net/), [Scribe](https://github.com/guardian/scribe), [Trix](https://trix-editor.org/), [Slate](https://www.slatejs.org/examples/richtext), [Draft.js](https://draftjs.org/), etc.
* Plugin for WordPress 4.x and WordPress 5.x. Based on the core of WProofreader, we have built a new plugin for WordPress. Check the official repo of [WProoofreader plugin for WordPress](https://github.com/WebSpellChecker/wproofreader-plugin-wordpress/) for more details.

Supported languages
------------
By default WProofreader supports 17 languages: American English, British English, Brazilian Portuguese, Canadian English, Canadian French, Danish, Dutch, Finnish, French, German, Greek, Italian, Norwegian Bokmal, Portuguese, Spanish, Swedish and Ukrainian.

There are also over 150 additional languages and specialized dictionaries such as Medical and Legal available, you can check the full list [here](https://webspellchecker.com/additional-dictionaries/). 

Get started
------------

#### WProofreader Cloud

1. [Sign up for the trial version](https://webspellchecker.com/free-trial/) to get started with WProofreader Cloud. On the subscription, you will receive an email with your service ID, an activation key, that is required for the WProofreader service activation. 

2. Add a configuration script with the required WProofreader options. You can adjust the default settings with the extra [API options](https://webspellchecker.com/docs/api/wscbundle/Options.html).

```
<script>
  window.WEBSPELLCHECKER_CONFIG = {
    autoSearch: true,
    serviceId: 'your-service-ID'
    ...
   };
</script>
```

> Note: `WEBSPELLCHECKER_CONFIG` can be added to any location on a web page before or after the `wscbundle.js` script. However, if you add wscbundle.js asynchronously, this CONFIG must be added before the script.

3. Add the `wscbundle.js` script.

```
<script type="text/javascript" src="https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js"></script>
```

Check the full version of [Get Started with Cloud WProofreader](https://docs.webspellchecker.net/display/WebSpellCheckerCloud/WProofreader) guides for more details.

#### WProofreader Server

1. [Request a 30-day trial version of WebSpellChecker Server](https://webspellchecker.com/free-trial/).
2. [Setup a WebSpellChecker Server package on your server](https://docs.webspellchecker.net/display/WebSpellCheckerServer55x).

3. Add a configuration script with the required WProofreader options. You can adjust the default settings with the extra [API options](https://webspellchecker.com/docs/api/wscbundle/Options.html).

```
<script>
  window.WEBSPELLCHECKER_CONFIG = {
    autoSearch: true,
    servicePort: '2880',
    servicePath: '/'
    ...
   };
</script>
```
> Note: `WEBSPELLCHECKER_CONFIG` can be added to any location on a web page before or after the `wscbundle.js` script. However, if you add `wscbundle.js` asynchronously, this CONFIG must be added before the script.

4. Add the `wscbundle.js` script.

```
<script type="text/javascript" src="http(s)://your_host_name/wscservice/wscbundle/wscbundle.js"></script>
```

Check the full version of [Get Started with Server WProofreader](https://docs.webspellchecker.net/display/WebSpellCheckerServer55x/WProofreader) guides for more details.

Browser support
------------

This is the list of officially supported browsers. WProofreader may also work in other browsers and environments but we unable to check all of them and guarantee proper work.

* Chrome (the latest)
* Firefox (the latest)
* Safari (the latest)
* MS Edge (the latest)
* Internet Explorer 11.0 (close to full support)
* Mobile Chrome (the latest)
* Mobile Safari (the latest)

> Note: All browsers are to be supported for web pages that work in Standard Mode.

Resources
------------

* [WProofreader Official Page](https://webspellchecker.com/wsc-proofreader/)
* [Documentation](https://docs.webspellchecker.net/)
* [Terms of Service](https://webspellchecker.com/terms-of-service/)
* [Software License Agreement](https://webspellchecker.com/legal/software-license-agreement/)

Reporting issues
------------

We use GitHub Issues as the official public bug tracker for WProofreader. Here are some recommendations to take into account when reporting an issue:

* Provide steps which help us to reproduce an issue. A sample page or JSFiddle is always welcomed.
* Some issues may be browser and integration-specific.  So, please specify what browser and integration you encountered the issue.

Technical support or questions
------------

Holders of an active subscription to the services or a commercial license have access to professional technical assistance directly from the WebSpellChecker team. [Contact us here](https://webspellchecker.com/contact-us/).

License
------------

In order to use WProofreader you have to purchase one of the following licenses according to your needs. You can find more about that on our website on the [pricing plan page](https://webspellchecker.com/pricing/).
