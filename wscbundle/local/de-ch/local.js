/**
 * scayt v3.25.5807
 * Copyright (c) 2000-2025 WebSpellChecker LLC All rights reserved.
 */

/*!
 * jQuip JavaScript Library v0.0.3
 * https://github.com/mythz/jquip
 *
 * Copyright, Demis Bellot
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

/*!
 * Rangy, a cross-browser JavaScript range and selection library
 * http://code.google.com/p/rangy/
 *
 * Copyright 2012, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3alpha.681
 * Build date: 20 July 2012
 */

/*! @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: 0.8.1 - Build: 266 (2012/07/31 03:33 PM)
 */

/*!
* flag-icon-css
* https://github.com/lipis/flag-icon-css
*
* Copyright 2013 Panayiotis Lipiridis
* Licensed under the MIT license.
*/ 
!function(a,b){a&&(a.prototype.Localization.lang[b]={btn_add:"Hinzufügen",btn_addWord:"Wort hinzufügen",btn_deleteWord:"Wort löschen",btn_createDic:"Erstellen",btn_deleteDic:"Löschen",btn_renameDic:"Umbenennen",btn_connectDic:"Verbinden",btn_disconnectDic:"Trennen",btn_cancel:"Abbrechen",btn_disable:"Deaktivieren",btn_enable:"Aktivieren",btn_ignore:"Einmal ignorieren",btn_ignoreAll:"Alle ignorieren",btn_disableRule:"Regel deaktivieren",btn_moreSuggestions:"Mehr Vorschläge",btn_noSuggestions:"Keine Vorschläge",btn_suggestionDescription:"Vorschlagsbeschreibung",btn_options:"Ignorieroptionen",btn_dictionaries:"Wörterbuch",btn_settings:"Einstellungen",btn_copy:"Kopieren",btn_close:"Schließen",btn_goToDic:"Zum Wörterbuch",btn_showMore:"Mehr Optionen",btn_showLess:"Optionen ausblenden",btn_proofreadDialog:"Überprüfen in Dialog",btn_prevProblem:"Vorheriger Vorschlag",btn_nextProblem:"Nächster Vorschlag",btn_assistantDialog:"KI-Schreibassistent",btn_replace:"Ersetzen",btn_retry:"Wiederholen",btn_report:"Falsch melden",btn_more:"Mehr anzeigen",btn_less:"Weniger anzeigen",placeholder_fieldNameDic:"Wörterbuchnamen eingeben",placeholder_fieldAddWord:"Neues Wort eingeben",label_ignoreAllCapsWords:"Großgeschriebene Wörter ignorieren",label_ignoreDomainNames:"Domainnamen ignorieren",label_ignoreWordsWithMixedCases:"Gemischte Groß-/Kleinschreibung ignorieren",label_ignoreWordsWithNumbers:"Wörter mit Zahlen ignorieren",label_autocorrect:"Rechtschreibung automatisch korrigieren",label_autocomplete:"Autocomplete-Vorschläge",label_spellingSuggestions:"Rechtschreibung",label_grammarSuggestions:"Grammatik",label_styleGuideSuggestions:"Style guide",about:"Über",version:"Version: ",tab_dictionaries:"Wörterbuch",tab_languages:"Sprache",tab_general:"Allgemein",tab_options:"Ignorieroptionen",text_title:"Textprüfer",text_productActions:"Aktionen",text_correctionBox:"Popup Fenster",text_copyrights:"<p class='wsc-copyright__text'>&copy; 2025 WebSpellChecker LLC. All Rights Reserved.</p>",text_dictionaryWords:"Wörterbuchwörter",text_problemsCount:"Vorschläge",text_nothingToCheck:"Nichts zu überprüfen.",text_noProblems:"Gut gemacht! Keine Kommentare.",text_replaceWith:"Ersetze %s1 durch %s2",text_disabled:"Textprüfer deaktiviert",text_prompts:"Aufforderungen",text_promptsLeft:"Verbleibende tägliche Aufforderungen",text_inProgress:"In Bearbeitung",text_noPromptsLeft:"Sie haben das tägliche Limit für die Anfragen erreicht. Bitte versuchen Sie es später erneut.",text_longText:"Die Textlänge überschreitet %s Zeichen. Der KI-Schreibassistent kann nicht aktiviert werden. Wiederholen Sie den Vorgang.",text_shortText:"Die Textlänge ist unzureichend, um den KI-Schreibassistenten zu aktivieren. Mindestens %s Zeichen erforderlich. Wiederholen Sie den Vorgang.",text_unsupportedAssistantLanguage:"Die standardmäßig ausgewählte Sprache wird vom KI-Schreibassistenten nicht unterstützt.",text_assistantIsNotEnabled:"Der KI-Schreibassistent ist in der aktuellen Einstellung nicht aktiviert. Bitte kontaktieren Sie den Support, um Hilfe zu erhalten.",text_context:"Originaltext",message_success_createDic:"Wörterbuch '%s' erstellt.",message_error_createDic:"Wörterbuch '%s' konnte nicht erstellt werden. Existiert bereits.",message_success_removeDic:"Wörterbuch '%s' gelöscht.",message_error_removeDic:"Wörterbuch '%s' konnte nicht gelöscht werden. Nicht gefunden.",message_success_restoreDic:"Wörterbuch '%s' verbunden.",message_error_restoreDic:"Wörterbuch '%s' konnte nicht verbunden werden. Nicht gefunden.",message_success_disconnectDic:"Wörterbuch '%s' getrennt.",message_error_disconnectDic:"Wörterbuch '%s' konnte nicht getrennt werden. Nicht gefunden.",message_success_renameDic:"Wörterbuch '%s' umbenannt.",message_error_renameDic:"Wörterbuch '%s' konnte nicht umbenannt werden. Nicht gefunden.",message_success_deleteWordDic:"Wort '%s' gelöscht.",message_error_deleteWordDic:"Wort '%s' konnte nicht gelöscht werden. Nicht gefunden.",message_success_addWordDic:"Wort '%s' hinzugefügt.",message_error_addWordDic:"Wort '%s' konnte nicht hinzugefügt werden.",message_error_wordAlreadyAddedDic:"Wort '%s' konnte nicht hinzugefügt werden. Existiert bereits.",message_error_wordWithBannedSymbolsDic:"Wort '%s' konnte nicht hinzugefügt werden. Bitte verwenden Sie Buchstaben und Zahlen. Keine Sonderzeichen erlaubt.",message_error_nameWithBannedSymbolsDic:"Wörterbuch '%s' konnte nicht erstellt werden. Nur lateinische Buchstaben und Ziffern erlaubt, keine Sonderzeichen oder Leerzeichen.",message_success_copy:"Kopiert.",message_error_copy:'Die Aktion "Kopieren" ist in Ihrem Browser nur über eine Tastenkombination verfügbar. Verwenden Sie Strg/Cmd + C.',message_error_assist:"Etwas ist schiefgelaufen. Versuchen Sie es später noch einmal",message_success_replace:"Ersetzt.",btn_langs:"Sprache",btn_dictionaryPreferences:"Wörterbucheinstellungen",btn_userManual:"Weitere Informationen finden Sie im Benutzerhandbuch",label_fieldNameDic:"Wörterbuchname",message_info_emptyDic:"Der Wörterbuchname darf nicht leer sein.",text_descriptionDicForFree:"In der Gratisversion des Produkts werden alle Wörter, die zu einem persönlichen Wörterbuch hinzugefügt werden, im lokalen Browserspeicher gespeichert. Um ein persönliches Wörterbuch zu speichern und von verschiedenen Browsern oder Geräten darauf zuzugreifen, muss das Wörterbuch auf den WebSpellChecker-Servern gespeichert werden. Diese Option ist nur in der Vollversion Version verfügbar.",text_descriptionDicForPaid:"Erfahren Sie mehr darüber, wie Sie mit dem Wörterbuch arbeiten",oldck_btn_about:"Über SCAYT",oldck_btn_toggle:"SCAYT aktivieren",oldck_btn_langs:"Sprachen",oldck_btn_options:"Optionen",oldck_btn_dictionaries:"Wörterbücher",oldck_btn_userManual:"Für weitere Informationen siehe das Benutzerhandbuch.",oldck_tab_dictionaries:"Wörterbücher",oldck_tab_languages:"Sprachen",oldck_tab_options:"Optionen",oldck_tab_about:"Über",oldck_text_title:"SCAYT",oldck_text_descriptionDicForFree:"In der Gratisversion des SCAYT-Produkts werden alle Wörter, die zu einem persönlichen Wörterbuch hinzugefügt werden, im lokalen Browserspeicher gespeichert. Um ein persönliches Wörterbuch zu speichern und von verschiedenen Browsern oder Geräten darauf zuzugreifen, muss das Wörterbuch auf den WebSpellChecker-Servern gespeichert werden. Diese Option ist nur in der <a href='https://webspellchecker.com/wsc-scayt-ckeditor4/' target='_blank' style='text-decoration: underline; color: blue;'>Vollversion Version</a> verfügbar.",oldck_text_descriptionDicForPaid:"<a href='https://webspellchecker.com/app/user-manual/scayt_plugin_for_ckeditor4_user_manual.pdf' target='_blank' style='text-decoration: underline; color: blue;'>Erfahren Sie mehr darüber, wie Sie mit dem Wörterbuch arbeiten</a>",oldck_message_success_wordAlreadyAddedDic:"Wort '%s' konnte nicht hinzugefügt werden. Existiert bereits.",btn_about:"Über WProofreader",btn_restoreDic:"Wiederherstellen",btn_toggle:"Aktivieren",btn_undo:"Rückgängig machen",btn_redo:"Wiederholen",btn_cut:"Ausschneiden",btn_paste:"Einfügen",btn_help:"Hilfe",btn_info:"Info",btn_apply:"Anwenden",btn_back:"Zurück",btn_edit:"Bearbeiten",btn_moreLanguages:"Erfahren Sie mehr darüber, wie Sie weitere Sprachen hinzufügen",btn_learnDictionary:"Erfahren Sie mehr darüber, wie Sie mit dem Wörterbuch arbeiten",btn_showSection:"Bereich anzeigen",btn_hideSection:"Bereich ausblenden",btn_finishChecking:"Überprüfung abschließen",btn_maximize:"Maximieren",btn_restore:"Wiederherstellen",btn_leave:"Ja, verlassen",btn_stay:"Nein, bleiben",message_info_opera:"Von Opera nicht unterstützt",message_info_cut:"Die Ausschneiden-Aktion ist in Ihrem Browser nur über eine Tastenkombination verfügbar. Verwenden Sie Strg/Cmd + X",message_info_copy:"Die Kopieren-Aktion ist in Ihrem Browser nur über eine Tastenkombination verfügbar. Verwenden Sie Strg/Cmd + C",message_info_paste:"Fügen Sie Ihren Text hier über die Tastatur ein (Strg/Cmd+V) und klicken Sie auf Einfügen.",about_throw_copy:"<p class='wsc-copyright__text'>&copy; 2025 WebSpellChecker LLC. All Rights Reserved.</p>",text_descriptionDic:"Ohne hinzugefügtes Wörterbuch werden Wörter nur im Browser gespeichert.",text_spellingSectionHeader:"Rechtschreibvorschläge",text_grammarSectionHeader:"Grammatikvorschläge",text_suggestionsContainer:"Vorschlagscontainer",text_problem:"Vorschlag",text_changeTo:"Ändern zu",message_confirm_closeWithoutSave:'Sind Sie sicher, dass Sie beenden möchten? Alle Änderungen gehen verloren, wenn Sie nicht auf "Überprüfung abschließen" abschließen" klicken.'})}(window.WEBSPELLCHECKER.CORE,"de-ch");