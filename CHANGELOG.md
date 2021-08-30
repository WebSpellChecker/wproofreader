# WProofreader Changelog

## 5.15.2.0 (3.4.4570) – 2021-08-26

* Improved autocorrect feature. Words that start from the capital letter will be ignored by autocorrect. It means that there won’t be false positive and annoying autocorrections for names or other proper names.

### Bug Fixes

* [WP-4000] Autocorrect doesn't work with Unicode languages (e.g. Ukrainian, Arabic, Hebrew, etc.)
* [WP-3999] When user adds reverted words to the user dictionary they are still autocorrected


## 5.15.1.0 (3.4.4565) – 2021-08-20

* Added a toggle option **“Correct spelling automatically”** for end users to turn on/off the autocorrect feature directly from the UI on the settings dialog. User selection will be remembered in the browser local storage. To find out more about autocorrect feature, refer to the [Autocorrect guide](https://docs.webspellchecker.net/display/WebSpellCheckerCloud/Autocorrect).
* Extended the `settingsSections` option with additional value: `general`. This section right now contains the toggle Correct spelling automatically responsible for managing autocorrect functionality. By default it is shown. If admins prefer to remove it from UI, this value has to be removed from the array. Find out more in [WProofreader API options docs](https://webspellchecker.com/docs/api/wscbundle/Options.html).
* Autocorrect replacements are now more user-friendly. The following spelling alarms will be ignored from the autocorrection: abbreviations, words in mixed case or containing digits, if suggestion consists of two words or a number of letters changed is more than one.

### Bug Fixes

* [WP-3994, WP-3997] Autocorrect doesn’t work properly with “auto” language

## 5.15.0.0 (3.3.4562) – 2021-08-13

**Autocorrect** as you type functionality (beta):
* Enabled by default using new API option `autocorrect`;
* Available for all supported languages except Japanese and Chinese;
* Algorithm behind autocorrect is relying on a similarity score (Levenshtein distance) and as a source uses the aggregated statistics of user replaces bundled with the standard spell check operation. If conditions are not met, the autoreplace won’t happen.
* End users have an option to revert/undo the correction by hovering on it and selecting the original word. The autocorrected word will be underlined with a gray dotted line. Undo action is remembered during the browser session until the page is reloaded.
* In case of auto detected language, autocorrect uses the last detected language as a language for autocorrect check. More details about autocorrect feature are available here.
* Updated UI localization for the Dutch language based on the feedback from one of our clients.


.....

## 5.12.1.0 (3.2.4522) – 2021-05-12

* Default language changed from American English (`en_US`) to Auto Detect (`auto`). This will be applied if no language is predefined in configuration using lang option.
* Added a new API option `autoLangPriorities` that allows to define priorities of languages detected by auto-detect. For example, if language auto-detect defines `en`, then British English (`en_GB`) should be used during check request. It is applicable only if `auto` is available and used as a default language.
* The size of the squeezed badge is decreased by 40%. This state is enabled automatically for fields with small height and when entered text overlap the badge.

Find out more about all available customization options for [WProofreader in API documentation](https://webspellchecker.com/docs/api/wscbundle/Options.html).

### Bug Fixes

* [WP-3887] WProofreader: Extra badge appears after copy/paste in Quill editor field

## 5.12.0.0 (3.2.xxxx) – 2021-04-07

* Implemented support of the dark theme. Can be enabled by adding: `theme: ‘dark’`,
* The size of the orange floating badge is now dynamically adjusted based on the size of the input area and text position.
* Mirrored the orange badge and its elements in case of right-to-left (RTL).
* Updated user interface localization for Norwegian (`no`), Swedish (`sv`) and Danish (`da`) based on the recommendations from the client.
* Added a new user interface localization for Swiss German (`de-ch`) prepared by one of the customers.

### Bug Fixes

* [WP-3838] WProofreader jumps when user changes settings on the page with many instances
* [WP-3827] WProofreader: Dialog is not closing after switching to CKEditor 4 full view

## 5.11.0.0 (3.1.xxxx) – 2021-03-17

* Implemented global proofread dialog that aggregates all suggestions from the editable element on the page. Enabled by default: `globalProofreadDialog: true`.
* Storing spell check ignore options and language selection globally for the same origin (`domain/subdomain+protocol//:domain+port`) in the browser local storage instead of per instance storage. Enabled by default: `disableOptionsStorage [options, language]`.
* Implemented per page options and language synchronization mechanism. Enabled by default: `syncOptions = true`. It means that language selected in one instance, will be applied for all consequent and existing instances.
* Updated localization of UI for the Ukrainian and Russian languages.

### Bug Fixes

* [WP-3794] WProofreader: Elements position is shifted if initialized in elements with `display: inline;`
* [WP-3781] WProofreader: When removing a word from dictionary Russian localization says about removing a dictionary instead
* [WP-3786] WProofreader: ‘Settings’ title is shown on dialog window if it is reopened from the badge
* [WP-3795] WProofreader: Badge doesn’t refresh the suggestions count
* [WP-3814] WProofreader: Wrong focus after replace action in dialog
* [WP-3822] TypeError: Unable to get property `doctype` of undefined or null reference for WProofreader in EdgeHTML
* [WP-3824] WProofreader: Icons for such actions as Add, Ignore, More displaced in hovered state in IE11

## 5.10.0.0 (3.0.4457) – 2021-02-11

* Implemented support of right-to-left (RTL) mode for a new floating proofread dialog. Thus, user interface elements for such RTL languages as Arabic or Hebrew will be mirrored compared to the left-to-right languages.
* Updated localization of the WProofreader user interface, specifically suggestion pop-up and floating dialog, for English (en), French (fr), Arabic (ar), Hebrew (he), Ukrainian (uk) and Italian (it). Also created localization for Russian (ru).
* Added a new onToggle callback that allows listening to the application state changes from enabled to disabled.

### Bug Fixes

* [WP-3737] WProofreader: Replace action doesn’t work in the unfocused state of inline CKEditor 4
* [WP-3747] WProofreader: Overwritten style of font from normal to bold and no line break in dialog
* [WP-3723, GitHub#18]: WProofreader plugin for CKE5: If backend is unavailable for more than 5 requests, the instances states won’t be synchronized

## 5.9.0.0 (3.0.xxxx) – 2021-01-28

* Static proofread in dialog mode was replaced with a compact and intuitive floating one. Now the dialog collects only suggestions without extracting the whole text from the original text field.
* The color of detected grammar-type errors changed from green to blue.
* [[GitHub#180](https://github.com/WebSpellChecker/ckeditor-plugin-scayt/issues/180)] API | SCAYT | WProofreader: Alphabetical sorting of personal dictionary

### Bug Fixes

* [WP-3463] WProofreader: Misspelled words are not highlighted if `contenteditable=’false’` mentioned in the same element as text to be spell checked
* [WP-3434, [GitHub#26](https://github.com/WebSpellChecker/wproofreader/issues/26)] WProofreader: There is no tooltip on hover to the badge with the problems counter
* [WP-3610] WProofreader: Broken styles of badge and suggestion pop-up on Square website
* [WP-3677] WProofreader: Disabled badge overlay text at the right corner of editable field
* [WP-3695] WProofreader: App fails to start in inline elements like span
* [WP-3701] WProofreader: App fails to start with enabled detectLocalizationLanguage option
* [WP-3707] WProofreader/SCAYT core: Incorrect sentence detection with `<sub>` and `<sup>` HTML elements
* [WP-3711] WProofreader: Suggestion can’t be applied if the badge is focused
* [WP-3718] WProofreader: App can’t be initialized properly in `<textarea>` if user ignore `<div>` elements

## 5.8.1.0 (2.4.xxxx) – 2020-12-30

* WProofreader user interface is localized to the Luxembourgish language. The language code for localizations is `lb`.
* [WP-3689] WProofreader: Styles broken when `‘padding: 0’, ‘margin: 0’ and ‘border: none’` are missing for the wrappers and badge

## 5.8.0.0 (2.4.xxxx) – 2020-12-16

* Updated UI of suggestion pop-up for all themes (standard, gray, ckeditor5). Now it’s more compact and with intuitive icons. 

## 5.7.1.1 (2.4.4254) – 2020-11-17

* Improved mechanism of highlighting and replacing problems in textarea elements.

### Bug Fixes

* [WP-3588] WProofreader: Misaligned badge if iframe body is min-height 100%


## 5.7.0.0 (2.x.xxxx) – 2020-10-14

* Added a new API option `restoreNativeSpellCheck` that restores a native browser spell checker if WProofreader is switched to the disable state.  Learn more in [API options](https://webspellchecker.com/docs/api/wscbundle/Options.html).

## 5.6.4.0 (2.x.xxxx) – 2020-09-17

* Improved paragraph-based mechanism for larger text proofreading to decrease load on a client’s browser.
* Minor improvements to the French and Canadian French localization.
* Enhanced Ignore functionality which allows users to ignore problem once.

## 5.6.3.0 (2.x.xxxx) – 2020-08-03

* Added new `ignoreAttributes` and `ignoreClasses` options that enable advanced mechanisms for skipping elements by classes and attributes during text check. Learn more in [API options](https://webspellchecker.com/docs/api/wscbundle/Options.html).

## 5.6.2.0 (2.x.xxxx) – 2020-07-08

Added option `diabledRules` in WProofreader that allows specifying an array of grammar rules to be disabled for all users. Check this [guide for details](https://docs.webspellchecker.net/display/WebSpellCheckerCloud/How+to+disable+a+certain+grammar+rule+for+all+users).

## 5.6.1.0 (2.x.xxxx) – 2020-06-26

* [WP-3419] WProofreader: Tooltip for a language selector in the badge is missing

## 5.6.0.0 (2.x.xxxx) – 2020-06-04

* Added ability to select a language for checking directly from the WProofreader badge without going to settings. It can be enabled using `enableLanguagesInBadgeButton` option. By default, it is disabled. 
* Restored the functionality of detecting the browser language and using it for the WProofreader interface localization. If not detected automatically, the default language for localization will be used. It defaults to American English.
* Extended the ignore all functionality to be applied globally for a whole page instead of being limited to a single instance. After the browser’s page reload, the ignored information will be reset. 
* Improved support and integrations with two modern rich text editors: `Slate.js` and `Draft`.
* Added a new `onStatistics` callback function that allows listening to such actions made when using the app: replace a problem, ignore all problems, add a word to the dictionary, remove a word from the dictionary. Check [API documentation](https://webspellchecker.com/docs/api/wscbundle/Options.html) for details.

### Bug Fixes
* [WP-3391] WProofreader: WProofreader: Badge overlaps browser scrolls on Windows
* [WP-3384] WProofreader: Broken styles and shifted underlines in the WordPress images description
* [WP-3381] WProofreader: Long words in the problem section of the dialog mode broke the styles

## 5.5.9.0 (2.x.xxxx) – 2020-04-21

* Turned on the spelling check option `ignoreWordsWithNumbers` that during check ignores words with numbers (e.g. 1st, 2nd, etc.). This change was dictated by user feedback reflected on the statistics of the most popular words added to dictionaries. 
* The `Auto Detect` option that auto-defines a language based on the user input is pinned to the top of the language list for faster access and convenience.

### Bug Fixes
* [WP-3334] WProofreader: Clicking on ‘More Misc’ icon of Froala increases the number of errors shown on the badge
* [WP-3335] WProofreader: Switching to ‘Code View’ of Froala increases the number of errors shown on the badge by 2-times

## 5.5.8.0 (2.4.xxxx) – 2020-03-26

* Improved the overall performance of WProofreader at least by 3 times including the visual mechanism responsible for highlighting problems as a user is typing in rich text editors. 
* Improved the highlighting mechanism in the textarea elements, the delay between checks decreased from 2s to 500ms.
* Added a new `theme` option to change the default style theme of WProofreader. The available theme options: `default`, `gray`, `custom`. The custom theme allows modifying the default theme using CSS styles.
* Introduced new callback functions `onAddWordToUserDictionary` and `onDeleteWordFromUserDictionary` to track when a word is added or removed from a personal user dictionary. 
* Added an extra callback function `onCommitOptions` that allows monitoring the changes in the spellcheck ignore options and a selected language.
* Initialization using auto-search (`autoSearch:true`) will respect `spellcheck=”false”` attribute in HTML textarea and input elements and won’t be started at all. However, this won’t be applied to the rich text editors.
* Added a separate `data-wsc=”false”` attribute that will instruct auto-search functionality not to start in the element that has such an attribute. This attribute won’t be taken into consideration if the application is started manually using `init()` method.
* Extended the ignore elements list with `code` and `pre` elements that will be ignored during the check.

### Bug Fixes
* [WP-3274] WProofreader: Suggestion popup has wrong height in Draft.js editor.

## 5.5.7.3 (2.3.xxxx) – 2020-01-21

### Bug Fixes
* [WP-3197] WProofreader: Underlines are not removed for the words which are in the dictionary after it’s connected
* [WP-3198] WProofreader: JS error `”Cannot read property ‘setFocus’ of null at wscbundle.js:44”` in console when a user deletes a user dictionary
* [WP-3256], [GitHub #21](https://github.com/WebSpellChecker/wproofreader/issues/21): WProofreader: Incorrect highlighting of problems in track changes feature of CKEditor 5
* [WP-3263] WProofreader: Scroll to the next problem doesn’t work after replace/add word/Ignore all in `“Proofread in dialog”` mode
* [WP-3264] WProofreader: Problems remain highlighted in the editor after using Ignore all in the `“Proofread in dialog”` mode
* [WP-3192] WProofreader: Missing or multiple whitespace problem type is incorrectly displayed in the `“Proofread in dialog”` mode 

## 5.5.7.0 (2.3.xxxx) – 2019-12-25

* Added localization of the default language list on the Language tab of the settings dialog to a language that is set by the localization option.


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
