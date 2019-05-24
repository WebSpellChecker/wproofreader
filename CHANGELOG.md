# WProofreader Changelog

## 1.8 – 2019-05-16

* The new blocked-based mechanism of processing and underlining spelling and grammar problems is introduced for editors that are based on a custom model such as CKEditor 5, Quill, ProseMirror, etc.

### Bug Fixes

* [WP-2796]: WProofreader: The replaced word changes formatting if other formatted word is currently focused.
* [WP-2802]: WProofreader: Underline is not removed for a spelling/grammar problem before a separator symbol.

## 1.7 – 2019-05-07

* The core and architecture of WProofreader is improved.

## 1.6 – 2019-04-02

* Title of the dialog "WebSpellChecker Proofreader" is renamed to "WProofreader".
* New API method ```instance.openDialog()``` is added for opening 'dialog mode' of WProofreader on action. This method will come in handy if you prefer to use only proofread in a dialog mode and call WProofreader on a custom action.
* New API options are added:

    * ```disableDictionariesPreferences``` – If true, this parameter hides certain features of the personal user dictionaries for end users. End users won’t be able to create, rename, remove or disconnect a dictionary.

    ```disableDictionariesPreferences: true,```

    * ```proofreadAsYouType``` – If false, this parameter disables the proofread as you type mode of WProofreader. Only proofread in a dialog mode will be available.

    ```proofreadAsYouType: false,```

    * ```removeBranding``` – If true, this parameter removes branding of WProofreader. The branding includes: title of the product, about tab with the logo and copyrights. This option is available only in Cloud Custom and Server plans.

    ```removeBranding: true,```

    * ```disableBadgePulsing``` – If true, this parameter disables pulsing effect of the orange badge button of WProofreader.

    ```disableBadgePulsing: true,```

* Added access to a WProofreader instance. Now you can get access to an instance of WProofreader.

```
<script>
window.WEBSPELLCHECKER_CONFIG = {
	autoSearch: true,
	enableGrammar: true,
	...
	onLoad: function(instance) {
		var element = instance.getContainerNode();
		element.instance = instance;
	    }
    };
</script>
```
### Bug Fixes

* [WP-2513] WProofreader for Froala Editor: Image caption is broken after Paste action with misspelled text
* [WP-2674] WProofreader: Issue with CSS styles inside of all.css for the pulse effect. CSS styles of pulse effect is not protected.
* [WP-2675] WProofreader: ```enableBadgeButton``` doesn't work with the autoSearch mode
* [WP-2706] WProofreader: Shifted markup in ```<textarea>``` element in any browser on Windows-OS


## 1.5 – 2019-02-11

* Change wavy red and green lines that underlines spelling and grammar errors accordingly to straight ones.
* German language dictionary has been extended with over 600K new words.
* Grammar support is added for Australian and New Zealand English, Polish, Slovak, Slovenian, Austrian languages.

### Bug Fixes

* [WP-2405] WProofreader: The suggestion box has wrong position in ```<iframe>``` on touch devices with zoom
* [WP-2423] WProofreader: Elements are incorrectly positioned if one from the parents of main container is scrollable
* [WP-2424] WProofreader: Empty space is underlined before a word with ```<a>``` link
* [WP-2440] WProofreader: Grammar problems separated by a new line are processed incorrectly in ```<textarea>``` elements
* [WP-2528] WProofreader: WordPress styles is broken when editing media
* [WP-2441] wscbundle.js: Quotes with code #8217 shouldn't be considered as separators & [WP-2541] SCAYT doesn't ignore 'Right single quotation mark U+2019'.
* [WP-2571] WProofreader: Incorrect position of badge button if the body has relative position and padding

## 1.4 – 2018-12-28

* Support of as you type mode for editors based on a custom data model.WProofreader fully supports ‘as you type’ mode in a wide range of WYSIWYG editors with a custom data model and virtual DOM such as CKEditor5, Quill, Trix, ProseMirror, Scribe.
* Accessibility compliance updates. The green color that was used for check-boxes and radio-buttons in the Options and Languages settings tabs has been replaced with the contrast one. This is required to by WCAG 2.1 and Section 508 accessibility standards.

### Bug Fixes

* [WP-2562] WProofreader:  Badge button and markup elements are hidden under elements that have higher z-index than WProofreader elements.
* [WP-2563] WProofreader:  Incorrect behavior of instances in model editors. 
* [WP-2404] WProofreader:  WProofreader: Suggestion box has wrong position in ```<iframe>``` element with border width more than 0.
* [WP-2564] WProofreader:  Incorrect getMaxZIndex related to HTML stacking context.
* [WP-2565] Incorrect resize behavior and getCoordinatesFromRange functionality.
* [WP-2569] WProofreader: Changes made in the Dialog mode are not saved to the CKEditor 5 body.

## 1.3 – 2018-12-13

* Added new API options for WProofreader management. Two new API options ```enableAutoSearchIn``` and ```disableAutoSearchIn``` are added to give more control over the autoSearch functionality.

```enableAutoSearchIn``` parameter allows enabling the autoSearch mechanism only for elements with provided class, id, data attribute name or HTML element type.

```
<script>
    window.WEBSPELLCHECKER_CONFIG = {
        ...
        enableAutoSearchIn: ['.class', '#id', '[data-attribute]', 'textarea'],
        ...
    }
</script>
```

```disableAutoSearchIn``` parameter allows disabling the autoSearch mechanism by class, id, data attribute name, and HTML elements.

```
<script>
    window.WEBSPELLCHECKER_CONFIG = {
        ...
        disableAutoSearchIn: ['.class', '#id', '[data-attribute]', 'textarea'],
        ...
    }
</script>
```
* API documentation updates. [API documentation](http://dev.webspellchecker.net/api/wscbundle/) is updated with the descriptions of the following parameters: ```autoSearch```, ```enableAutoSearchIn```, ```disableAutoSearchIn```.

### Bug Fixes

* [WP-2380] WProofreader: Focused state is missing when using keyboard navigation between Options, Languages, Dictionary, About tabs.
* [WP-2421] WProofreader: Incorrect area-label name for the opened state of the WProofreader Dialog icon.
* [WP-2442] WProofreader: Incompatibility of WProofreader with Froala Editor. Incorrect behavior of getFocusableElements in component.js in place with querySelectorAll and passed array (convert array to string).
* [WP-2426] WProofreader plugin for WordPress: Extra element appears on hovering a misspelled word when using WordPress (Admin).

> ```enableAutoSearchInInputs``` option is no longer supported as it was replaced by ```enableAutoSearchIn```.

## 1.2 – 2018-10-31

* Compliance with International Web Accessibility Standards (WCAG 2.1) & Keyboard Navigation.
* Added a spinner for a badge button. Spinner on the dialog panel that is aimed indicating the progress of proofreading. Once the proofreading process is completed, the spinner will disappear.
* Added an extra notification, warning you from leaving the dialog with changes unsaved (without clicking 'Finish Checking'). This is made to prevent accidental loss of your proofreading results.

### Bug Fixes
* [WP-2384] WSC Proofreader: ```<span>``` elements of Proofreader are saved to DB of WordPress & Other systems and after saving are displayed on front-end.

## 1.1 – 2018-09-28

* Maximize/Restore button in a dialog mode.
* Improved notifications on the UI when working with user dictionary to bring clarity to your users.

## 1.0 – 2018-09-10

* New UI of WProofreader.
* New [API options](http://dev.webspellchecker.net/api/wscbundle/) for autoSeach: disableAutoSearchIn and enableAutoSearchInInputs.

You can disable Proofreader in any type of editable field by class, id, data attribute and elements.

```
disableAutoSearchIn: ['.class', '#id', '[data-attribute]', 'textarea'], 
```
We decided to disable Proofreader auto-enabling in the HTML ```<input>``` element by default. However, you may change this behavior and allow Proofreader checking in ```<input>```.

```
enableAutoSearchInInputs: true,
```

## 0.1 – 2018-07-26

We keep improving our new product,  WProofreader, that has been introduced in one of our recent releases. Let us remind that WProofreader is based on SpellCheckAsYouType (SCAYT) core. It is designed to simplify the integration and combine functionality of proofread as you type functionality and proofread in a dialog.

Our paid customers can start using it at no additional fee. You can already start using first version of WebSpellChecker Proofreader. Please visit [Get Started with Cloud WebSpellChecker Proofreader (autoSearch)](https://docs.webspellchecker.net/pages/viewpage.action?pageId=442663877) for guidance. 

* Easy to get started. A single script for all editable fields in a web app;
* Auto-search functionality which detects editable fields on web page and enables proofreading functionality;
* Proofread as you type functionality on multiply languages. Spell checking functionality is supported for 16 default languages and 152 additional languages, grammar checking functionality is available for 14 out of 16 default languages.
* Simplified box with corrections for spelling and grammar grammar problems. 
* A new badge button with the WebSpellChecker Proofreader settings.
* Supported in all modern browsers such as Chrome, Firefox, Internet Explorer 11+, MS Edge and Safari;
