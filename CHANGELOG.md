# WProofreader Changelog

## 2.3.3915 – 2019-12-10

* Added UI localization for the Simplified Chinese and Japanese languages.
* Minor improvements accessibility based on the accessibility validation tools (reports).
* The height of the section with the list of words on the Dictionaries tab is increased to 360 pixels to improve usability.

### Bug Fixes

* [WP-3149] WProofreader: Highlighting of a selected language is cropped in Languages tab when using keyboard navigation
* [WP-3153] WProofreader: Redundant 'aria-level' and 'aria-expanded' tags with empty value present in button snippets
* [WP-3155] WProofreader: Some elements have insufficient color contrast 
* [WP-3157] WProofreader: Invalid ARIA attribute values for 'aria-labelledby' tag in checkboxes, radio buttons and inputs
* [WP-3158] WProofreader: Invalid ARIA roles used
* [WP-3180] WProofreader: Badge disappears in iframe
* [WP-3168] WProofreader: Actions in the badge are shifted in the expanded/active state
* [WP-3163] WProofreader: Insufficient styles protection of elements

## 2.3 – 2019-11-25

This version brings major user interface updates for WProofreader based on the user feedback that we collected: 
* Both WProofreader dialog and the badge have more contrast colors for all elements, including the icons and the color of the text being checked.
* When using keyboard navigation to move around WProofreader dialog, badge, and Settings dialog, you can benefit from the addition highlighting of the elements currently in focus.
* We have extended and simplified each view of the Settings sections, including Languages, Options, and Dictionaries.
* Pop-up notifications on the changes made in the Settings sections now appear at the bottom of the dialog to avoid overlapping of the top section of WProofreader dialog.
* Improved experience and working with dictionaries allowing even easier to disconnect the dictionaries which may be no longer required and connect them any time later. 
* When proofreading in a dialog mode now, users see only one discovered problem and suggestions to it at a time allowing easier navigation and better user experience in text proofreading. 

For details, refer to the updated version of WProofreader User guide for the [Server](https://docs.webspellchecker.net/display/WebSpellCheckerServer55x/WProofreader+User+Guide) and [Cloud](https://docs.webspellchecker.net/display/WebSpellCheckerCloud/WProofreader+User+Guide). 

Improvements in accessibility and navigation. We have revised and updated the already existing navigation when using a keyboard only: 
* The keyboard combinations are now simplified.
* We have introduced Space as one more key to confirm your actions or changes made in addition to the Enter key which could be used before.
* User interface response is now better as the highlighting of the selected element is more precise and contrasting with the rest of the UI.
* You can navigate between the discovered problems and their suggestions using either left and right arrow keys when proofreading in WProofreader dialog. 

For details, refer to the updated version of WProofreader keyboard navigation guide for the [Server](https://docs.webspellchecker.net/display/WebSpellCheckerServer55x/WProofreader+Keyboard+Navigation) and [Cloud](https://docs.webspellchecker.net/display/WebSpellCheckerCloud/WProofreader+Keyboard+Navigation) versions. 

### Bug Fixes

* [WP-3124] WProofreader: Virtual markup with underlined problems shifts if to open an editor in a full screen
* [WP-3127] WProofreader: Memory leaks in Internet Explorer 11 and MS Edge
* [WP-3135] WProofreader: The grammar problem description tooltip is not capitalized
* [WP-3129] WProofreader: Incorrect color of the number of errors in the badge when integrated into TinyMCE 4 (black instead of white)
* [WP-3145] WProofreader: Bootstrap label type overwrites dialog settings and languages list labels style
* [WP-3146] WProofreader: Foundation CSS styles breaks checkboxes alignment on the Options tab


## 2.2.3825 – 2019-11-14

* Improved keyboard navigation. Now along Enter key press, the action can be confirmed using Space. Related to [GitHub #18](https://github.com/WebSpellChecker/wproofreader/issues/18).
* Updated UI localization for the German language.

### Bug Fixes

* [WP-3029]: WProofreader: Native browser spellchecker is not disabled in CKEditor 5 when WProofreader is enabled which results in double underlines
* [GitHub #19](https://github.com/WebSpellChecker/wproofreader/issues/19): WProofreader requires unsafe-inline and unsafe-eval to work (CSP)

## 2.2.3717 – 2019-09-05

### Bug Fixes

* [WP-2984]: WProofreader: Settings tab in the dialog are not localized to other languages
* [WP-2984]: WProofreader: Disable WProofreader in `Code View` in Froala Editor v3

## 2.2.3712 – 2019-08-28

### Bug Fixes

* [WP-2926]: WProofreader: The bullet points outside of the correction popup box
* [WP-3006]: WProofreader: `autoDestroy` functionality doesn't work properly in IE 11 which results in `Unspecified errors` in the console
* [WP-2978]: WProofreader: Spinner in the badge is endlessly spinning after the dialog is closed
* [WP-3008]: WProofreader: Can't remove branding for the Server version. Server returns 'canRemoveBranding: false;'

## 2.2 – 2019-08-16

* Grammar checking option is enabled by default for WProofreader.

### Bug Fixes

* [WP-2950]: WProofreader: XSS vulnerability in the Dictionary tab
* [WP-2938]: WProofreader: Lost accessibility to the badge using 'Tab' and 'Enter'
* [GitHub #1](https://github.com/WebSpellChecker/wproofreader/issues/1): [CKEditor 4] WProofreader is active in source mode highlighting HTML tags [CKEditor 4]
* [GitHub #8](https://github.com/WebSpellChecker/wproofreader/issues/8): [CKEditor 5] Word correction doesn't work after list item indentation
* [GitHub #7](https://github.com/WebSpellChecker/wproofreader/issues/7): [CKEditor 5] Crash after correcting a word
* [GitHub #10](https://github.com/WebSpellChecker/wproofreader/issues/10): [CKEditor 5] Modifier keys close WProofreader balloon
* [GitHub #12](https://github.com/WebSpellChecker/wproofreader/issues/12): [CKEditor 5] WProofreader balloon opens while dropdown is opened
* [GitHub #14](https://github.com/WebSpellChecker/wproofreader/issues/14): [CKEditor 5] Correcting a word doesn't work well with markers
* [GitHub #17](https://github.com/WebSpellChecker/wproofreader/issues/17): [CKEditor 5] No need for a workaround to assign the editor instance to a HTMLElement

## 2.1 – 2019-07-18

* Extended and improved `WEBSPELLCHECKER.init()` method for editable control creation. This method can be used for manual auto-start of WProofreader in any type of editable control including WYSIWYG editors.

### Bug Fixes

* [WP-2874]: WProofreader: Problem corrections are shown for all clicked problems

## 2.0 – 2019-06-19

* [WP-2868]: Improved performance by changing the maximum number of sentences per request has been increased to 10 and number of words per request changed from 10 to 100.

### Bug Fixes

* [WP-2829]: WProofreader: Problem underline is cut off by area of checking
* [WP-2832]: WProofreader: Drag&drop doesn’t remove existing problems underlining 
* [WP-2833]: Incomplete hover of the spelling problem of several words separated by a line break
* [WP-2872]: WProofreader: Problem markup appears in wrong position in <textarea>
* [WP-2288]: WProofreader: ‘Finish checking’ button is blocking the main functionality of ‘Proofread in a dialog’ mode
* [WP-2837]: WProofreader: Sections separation lines on the Dictionary tab are missing in Internet Explorer


## 1.9.3626 – 2019-06-05

### Bug Fixes

* [WP-2850, WP-2855]: WProofreader: Incorrect underlining of spelling and grammar problems when a rich text editor or HTML editable control for right to left languages (such as Arabic, Hebrew, etc.). 

## 1.9 – 2019-05-28

* A new virtual mechanism has been introduced for processing and underlying spelling and grammar errors in the wide range of the editable fields (HTML editable elements, and classic rich text editors such as CKEditor 4, Froala Editor, TinyMCE, etc.). With such an approach WProofreader creates a separate virtual layer behind the original element, and doesn’t affect the original content. 

Previously, it added extra span elements with styles to wrap incorrect words and phrases. In certain cases those extra elements were saved to a database which resulted in the text pollution with unwanted text unless those elements are cleaned with the additional function. The new mechanism eliminates those issues.

### Bug Fixes

* [WP-2859]: WProofreader: Extra spans elements added to the source mode of editors vs saved to a database.

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
